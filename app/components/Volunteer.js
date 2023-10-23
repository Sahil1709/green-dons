import React from 'react';
import { Badge, Descriptions } from 'antd';
const items = [
    {
      key: '1',
      label: 'Volunteer Task',
      children: 'Assisting the Community',
    },
    {
      key: '2',
      label: 'Type of Service',
      children: 'Cleaning the park',
    },
    {
      key: '3',
      label: 'Volunteer Duration',
      children: '54 hours',
    },
    {
      key: '4',
      label: 'Start Date',
      children: '2023-10-24',
    },
    {
      key: '5',
      label: 'End Date',
      children: '2023-11-31',
      span: 2,
    },
    {
      key: '6',
      label: 'Status',
      children: <Badge status="processing" text="Ongoing" />,
      span: 3,
    },
    {
      key: '7',
      label: 'Total Hours Worked',
      children: '30.00',
    },
    {
      key: '8',
      label: 'Remaining Hours',
      children: '24.00',
    },
    {
      key: '9',
      label: 'Continue working',
      children: 'YES',
    },
    {
      key: '10',
      label: 'Details',
      children: (
        <>
          Task Description: Assisting with cleaning community parks 
          <br />
          Location: Local Community Center
          <br />
          Volunteer Program: Youth Community Engagement
          <br />
          Coordinator: David Salamander
          <br />
          Contact Info: 9879319231
          <br />
          Region: San Francisco, CA
          <br />
        </>
      ),
    },
  ];
  
const Volunteer = () => <Descriptions title="User Info" bordered items={items} />;
export default Volunteer;