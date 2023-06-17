export interface AppointmentProps {
  customer: string
  startsAt: Date
  endsAt: Date
}

export class Appointment {
  private props: AppointmentProps

  get customer (): string {
    return this.props.customer
  }

  get startsAt (): string {
    return this.props.customer
  }

  get endsAt (): string {
    return this.props.customer
  }

  constructor (props: AppointmentProps) {
    this.props = props
  }
}