import React from "react";
import { Table } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sevice</th>
            <th>Hairstylist</th>
            <th>Schedule</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000001</td>
            <td>James</td>
            <td>Ceasar Haircut</td>
            <td>John Doe</td>
            <td>
              <p>8:00 am</p>
              <p>01/16/23</p>
            </td>
            <td>Completed</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>000002</td>
            <td>Monica</td>
            <td>Baby Bangs</td>
            <td>Jane Doe</td>
            <td>
              <p>8:00 am</p>
              <p>01/17/23</p>
            </td>
            <td>Cancelled</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>000003</td>
            <td>Peter</td>
            <td>Classsic Ceasar Cut</td>
            <td>Steve Smith</td>
            <td>
              <p>8:00 am</p>
              <p>01/17/23</p>
            </td>
            <td>Check-in</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>000004</td>
            <td>Marry</td>
            <td>Classic Bob</td>
            <td>Jane Doe</td>
            <td>
              <p>8:00 am</p>
              <p>01/17/23</p>
            </td>
            <td>Waiting</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>000005</td>
            <td>Mark</td>
            <td>Sleek Fringe Haircut</td>
            <td>Steve Smith</td>
            <td>
              <p>8:00 am</p>
              <p>01/17/23</p>
            </td>
            <td>Completed</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>000006</td>
            <td>Kyle</td>
            <td>Hard Part Cut</td>
            <td>John Doe</td>
            <td>
              <p>8:00 am</p>
              <p>01/17/23</p>
            </td>
            <td>Completed</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>000007</td>
            <td>Zeus</td>
            <td>Sleek Fringe Haircut</td>
            <td>Steve Smith</td>
            <td>
              <p>8:00 am</p>
              <p>01/17/23</p>
            </td>
            <td>Check-in</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
