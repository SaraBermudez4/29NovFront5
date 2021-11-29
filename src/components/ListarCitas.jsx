import React from 'react'
import { Button, Card, Icon, Table } from 'react-materialize'

const ListarCitas = () => {
    return (
        <Card title="Agenda">
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Sintomas</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>Fecha</td>
                            <td>Hora</td>
                            <td>Sintomas</td>
                            <td>
                                <Button
                                    className="red"
                                    node="button"
                                    waves="light">
                                    Borrar
                                    <Icon right>delete</Icon>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Card>
    )
}

export default ListarCitas
