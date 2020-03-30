import { validateEmail } from './'

describe('validateEmail', () => {
  it('should return true for real emails', () => {
    expect(validateEmail('hello@gmail.com')).toBe(true)
    expect(validateEmail('hello@alexhughes.com')).toBe(true)
    expect(validateEmail('alex@gmail.com')).toBe(true)
  })

  it('should return false for incorrect emails', () => {
    expect(validateEmail('not correct')).toBe(false)
    expect(validateEmail('hello@notcorrect')).toBe(false)
    expect(validateEmail('gmail.com')).toBe(false)
  })
})
