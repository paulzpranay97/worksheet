import React, { useState, useEffect } from 'react';
import { Typography, Input, List, Modal, Table, Button, ConfigProvider, Collapse } from 'antd';
import axios from 'axios';
import Navbar from './Navbar';

const { Search } = Input;
const { Text, Title } = Typography;
const { Panel } = Collapse;

function SearchPatient({ onPatientSelect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [salesData, setSalesData] = useState({}); // Use an object to store sales data keyed by patient ID
  const [selectedPatient, setSelectedPatient] = useState(null);

  const base_url = 'https://marketing.ps-baby.com/ajax';
  // const base_url = 'http://localhost/marketing/ajax';

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (!query) {
      setPatients([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(base_url, {
        params: {
          action: 'search_ip_by_name',
          name: query
        }
      });
      setPatients(response.data);
    } catch (error) {
      console.error("There was an error fetching the patients!", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePatientSelect = async (patient) => {
    setSelectedPatient(patient);

    // Check if the sales data for the selected patient is already fetched
    if (!salesData[patient.id]) {
      try {
        const response = await axios.get(base_url, {
          params: {
            action: 'sales_record_by_ip_id',
            id: patient.id
          }
        });
        setSalesData((prevData) => ({
          ...prevData,
          [patient.id]: response.data // Store the sales data keyed by patient ID
        }));
      } catch (error) {
        console.error("There was an error fetching the sales records!", error);
      }
    }
  };

  const handleActionClick = (record) => {
    onPatientSelect(record); // Action button logic
  };

  const columns = [
    {
      title: 'No.',
      key: 'serialNumber',
      align: 'center',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Donor ID',
      dataIndex: 'donor_id',
      key: 'donor_id',
    },
    {
      title: 'Cycle',
      dataIndex: 'cycle',
      key: 'cycle',
      align: 'center'
    },
    {
      title: 'Sales Status',
      dataIndex: 'sales_status',
      key: 'sales_status',
    },
    {
      title: 'Eggs Sold',
      dataIndex: 'eggs_sold',
      key: 'eggs_sold',
      align: 'center'
    },
    {
      title: 'Date',
      dataIndex: 'insert_time',
      key: 'insert_time',
      align: 'center',
      render: (text) => {
        const timestamp = Number(text);
        if (!isNaN(timestamp)) {
          const date = new Date(timestamp * 1000);
          const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`;
          return formattedDate;
        } else {
          return 'Invalid Date';
        }
      },
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <Button type="primary" style={{ borderRadius: '18px' }} onClick={() => handleActionClick(record)}>
          Open <i class="ri-survey-line"></i>
        </Button>
      ),
    },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8a62a5',
            borderRadius: 8,
            colorBorder: '#8a62a5',
            fontSize: 16,
            controlHeight: 50,
            fontWeightStrong: 700,
          },
          components: {
            Button: {
              colorPrimary: '#8a62a5',
              borderRadius: 18,
              controlHeight: 30,
            },
            Input: {
              borderRadius: 30,
              controlHeight: 50,
              fontSize: 20,
              paddingInline: 40
            },
            List: {
              colorBorder: '#8a62a5',
            },
            Modal: {
              borderRadius: 10,
            },
            Table: {
              headerBg: '#fcf8ff',
              headerColor: '#545454',
              footerColor: '#545454',
              borderColor: '#e8e8e8'
            },
          },
        }}
      >
        {/* Search Modal */}
        <Modal
          title={<Title level={4} style={{ textAlign: 'left', color: '#8a62a5' }}>Search By Patient Name</Title>}
          open={true}
          closable={false}
          maskClosable={false}
          footer={null}
          width={1000}
          centered
        >
          <Search
            placeholder="Search by patient name"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            enterButton
            loading={loading}
          />
          {searchQuery && (
            <List
              bordered
              dataSource={patients}
              renderItem={(patient) => (
                <List.Item style={{ width: '100%', display: 'flex'  }}>
                  <Collapse accordion expandIconPosition="right" style={{ width: '100%' }}>
                    <Panel  
                      header={<span style={{ fontSize: '16px', fontWeight: '600' }}>{patient.name}</span>}
                      key={patient.id} 
                      onClick={() => handlePatientSelect(patient)}>
                      <Table
                        columns={columns}
                        dataSource={salesData[patient.id] || []} 
                        rowKey="id"
                        pagination={false}
                      />
                    </Panel>
                  </Collapse>
                </List.Item>
              )}
              style={{ marginTop: 20, maxHeight: '500px', overflowY: 'auto' }}
            />
          )}
        </Modal>
      </ConfigProvider>
    </>
  );
}

export default SearchPatient;
