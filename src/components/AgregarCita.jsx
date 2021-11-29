import React from 'react'
import { Button, Card, DatePicker, Icon, Textarea, TextInput, TimePicker } from 'react-materialize'

const AgregarCita = () => {
    return (
        <Card title="Agregar Citas" >
            <form>
                <div className="row">
                    <TextInput
                        id="nombre"
                        label="Nombre"
                    />
                </div>
                <div className="row">
                    <div className="col s10 l6">
                        <DatePicker
                            id="fecha"
                            label="Fecha"
                            options={{
                                i18n: {
                                    cancel: 'Cancelar',
                                    clear: 'Limpiar',
                                    done: 'Ok',
                                    months: [
                                        'Enero',
                                        'February',
                                        'March',
                                        'April',
                                        'May',
                                        'June',
                                        'July',
                                        'August',
                                        'September',
                                        'October',
                                        'November',
                                        'December'
                                    ],
                                    monthsShort: [
                                        'Ene',
                                        'Feb',
                                        'Mar',
                                        'Apr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Aug',
                                        'Sep',
                                        'Oct',
                                        'Nov',
                                        'Dec'
                                    ],
                                    nextMonth: '›',
                                    previousMonth: '‹',
                                    weekdays: [
                                        'Sunday',
                                        'Monday',
                                        'Tuesday',
                                        'Wednesday',
                                        'Thursday',
                                        'Friday',
                                        'Saturday'
                                    ],
                                    weekdaysAbbrev: [
                                        'S',
                                        'M',
                                        'T',
                                        'W',
                                        'T',
                                        'F',
                                        'S'
                                    ],
                                    weekdaysShort: [
                                        'Sun',
                                        'Mon',
                                        'Tue',
                                        'Wed',
                                        'Thu',
                                        'Fri',
                                        'Sat'
                                    ]
                                },
                            }}
                        />
                    </div>
                    <div className="col s10 l6">
                        <TimePicker id="hora" label="Hora" />
                    </div>
                </div>
                <div className="row">
                    <Textarea
                        id="sintomas"
                        label="Sintomas"
                    />
                </div>
                <Button
                    className="indigo darken-4"
                    type="submit"
                    node="button"
                    waves="light"
                >
                    Guardar
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </Card>
    )
}

export default AgregarCita
