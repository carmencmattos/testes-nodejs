import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-futute-date";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const startsAt = getFutureDate('2022-10-10')
    const endsAt = getFutureDate('2022-10-11')

    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(
      appointmentsRepository
    )

    expect(createAppointment.execute({
      customer: 'Aurora',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  }) 

  it('should not be able to create an appointment with overlapping dates', async () => {
    const startsAt = getFutureDate('2022-10-10')
    const endsAt = getFutureDate('2022-10-15')

    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(
      appointmentsRepository
    )

    await createAppointment.execute({
      customer: 'Aurora',
      startsAt,
      endsAt
    })

    expect(createAppointment.execute({
      customer: 'Amora',
      startsAt: getFutureDate('2022-10-14'),
      endsAt: getFutureDate('2022-10-18')
    })).rejects.toBeInstanceOf(Error)

    expect(createAppointment.execute({
      customer: 'Amora',
      startsAt: getFutureDate('2022-10-08'),
      endsAt: getFutureDate('2022-10-12')
    })).rejects.toBeInstanceOf(Error)

    expect(createAppointment.execute({
      customer: 'Amora',
      startsAt: getFutureDate('2022-10-08'),
      endsAt: getFutureDate('2022-10-17')
    })).rejects.toBeInstanceOf(Error)

    expect(createAppointment.execute({
      customer: 'Amora',
      startsAt: getFutureDate('2022-10-11'),
      endsAt: getFutureDate('2022-10-12')
    })).rejects.toBeInstanceOf(Error)
  }) 
})