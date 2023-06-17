import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  endsAt.setDate(endsAt.getDate() + 1)

  const appointment = new Appointment({
    customer: 'Aurora',
    startsAt,
    endsAt, 
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('Aurora')
});

test('cannot create an appointment with end date befor start date', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  endsAt.setDate(endsAt.getDate() - 1)
    
  expect(() => {
    return new Appointment({
      customer: 'Aurora',
      startsAt,
      endsAt, 
    })
  }).toThrow()   
})  