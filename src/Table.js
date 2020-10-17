import React from 'react'
import { Form, Button, Table } from 'react-bootstrap';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <Button className="delete" variant="danger" size="sm" onClick={() => props.removeCharacter(index)}>Delete</Button>
                    <Button className="change" size="sm" onClick={() => props.changeStatus(row.name, row.job)} >Change</Button>
                    <Form.Group>
                        <Form.Control name="index" type="hidden" data-id={index + 1} />
                    </Form.Group>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const UserTable = (props) => {
    const {characterData, removeCharacter, changeStatus} = props
  
    return (
      <Table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}changeStatus={changeStatus}/>
      </Table>
    )
  }

export default UserTable