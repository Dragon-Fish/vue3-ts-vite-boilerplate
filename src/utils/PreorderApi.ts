import axios, { type AxiosResponse } from 'axios'

type AjaxResponse<T> = {
  code: keyof typeof RET_CODE
  message: typeof RET_CODE[keyof typeof RET_CODE]
  data: T
}

const RET_CODE = {
  1: 'SUCCESS',
  1000: '请输入正确的手机号码',
  1001: '已经预约',
  1002: '验证码发送失败，请重试',
  1003: '参数错误',
  1004: '验证失败，请重试',
  1005: '令牌过期',
  1008: '数据库已初始化',
  1009: '请先获取验证码',
  10001: '请{number}秒后重试',
}

const ENDPOINTS = {
  _BASE_URL: import.meta.env.PROD ? '/api' : '/api',
  MESSAGE_SERVICE: '/sms',
  REGISTER: '/register',
  USER_COUNT: '/user_count',
}

export class PreorderApi {
  ENDPOINTS: typeof ENDPOINTS

  constructor() {
    this.ENDPOINTS = ENDPOINTS
  }

  get ajax() {
    const instance = axios.create({
      baseURL: this.ENDPOINTS._BASE_URL,
      timeout: 5 * 1000,
    })
    /**
     * HTTP status 状态码恒为 200
     * 需要从 code 返回作判断
     */
    instance.interceptors.response.use(
      (ctx: AxiosResponse<AjaxResponse<any>>) => {
        if (ctx.data.code !== 1) {
          throw ctx.data
        }
        return ctx
      }
    )
    return instance
  }

  sendSms(arena: string = '+86', phone: string) {
    return this.ajax.post<AjaxResponse<{ verifyId: string; ticket: string }>>(
      this.ENDPOINTS.MESSAGE_SERVICE,
      {
        arena,
        phone,
      }
    )
  }

  register(data: {
    arena: string
    phone: string
    verifyId: string
    code: string
  }) {
    return this.ajax.post(this.ENDPOINTS.REGISTER, data)
  }

  userCount() {
    return this.ajax.get<AjaxResponse<{ count: number }>>(
      this.ENDPOINTS.USER_COUNT
    )
  }
}

export const api = new PreorderApi()
