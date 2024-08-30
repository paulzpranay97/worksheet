import React, { useState } from 'react';
import { Button, TimePicker, Calendar, Table ,ConfigProvider, Space, Modal, Select } from 'antd';
import dayjs from 'dayjs';
import axios from 'axios';
const { Option } = Select;

function TableCom() {

  const [modalOpen, setModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [currentFieldtable, setCurrentFieldtable] = useState('');
  const [data, setData] = useState([
    {
      key: '1',
      emb: '',
      date: '',
      time: '',
      day: 'D0',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '2',
      emb: '',
      date: '',
      time: '',
      day: 'D1',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '3',
      emb: '',
      date: '',
      time: '',
      day: 'D2',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '4',
      emb: '',
      date: '',
      time: '',
      day: 'D3',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '5',
      emb: '',
      date: '',
      time: '',
      day: 'D3/',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '6',
      emb: '',
      date: '',
      time: '',
      day: 'AH',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '7',
      emb: '',
      date: '',
      time: '',
      day: 'D4',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '8',
      emb: '',
      date: '',
      time: '',
      day: 'D4/',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '9',
      emb: '',
      date: '',
      time: '',
      day: 'D5',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '10',
      emb: '',
      date: '',
      time: '',
      day: 'D5/',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '11',
      emb: '',
      date: '',
      time: '',
      day: 'D6',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '12',
      emb: '',
      date: '',
      time: '',
      day: 'D6/',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '13',
      emb: '',
      date: '',
      time: '',
      day: 'D7',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '14',
      emb: '',
      date: '',
      time: '',
      day: 'D7/',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
    {
      key: '10',
      emb: '',
      date: '',
      time: '',
      day: 'Final Disposition',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
  ]);

  const timeFormat = 'HH:mm';


  const handleCellClick = (record , columnKey, columnIndex) => {
    console.log('Clicked record:', record);
    console.log('Column Key:', columnKey);
    console.log('Column Index:', columnIndex);

    setSelectedRowData({ ...record, columnKey });
    setCurrentFieldtable(columnKey);

    if (columnKey === 'emb' || columnKey === 'date' || columnKey === 'time') {
      setSecondModalOpen(true); 
    } else if ((columnIndex + 1) % 4 === 0) {
      setModalOpen(true); 
    } else {
      setModalOpen(true); 
    }
  };

  const handleChange = (value) => {
    if (selectedRowData) {
      const newData = data.map((row) => {
        if (row.key === selectedRowData.key) {
          return {
            ...row,
            [currentFieldtable]: value,
          };
        }
        return row;
      });
      setData(newData);
      setSecondModalOpen(false);
      setModalOpen(false);
    }
  };

  const handleTimeChange = (time, timeString) => {
    handleChange(timeString);
  };

  const handleDateSelect = (date) => {
    handleChange(date.format('MM-DD-YYYY'));
  };

  
  
const columns = [
  {
    title: 'Emb:',
    dataIndex: 'emb',
    key: 'emb',
    width: 35,
    align: 'center',
    onCell: (record) => ({
      onClick: () => handleCellClick(record, 'emb', 0),
    }),
  },
  {
    title: 'Date:',
    dataIndex: 'date',
    key: 'date',
    width: 40,
    align: 'center',
    onCell: (record) => ({
      onClick: () => handleCellClick(record, 'date', 1),
    }),
  },
  {
    title: 'Time:',
    dataIndex: 'time',
    key: 'time',
    width: 40,
    align: 'center',
    onCell: (record) => ({
      onClick: () => handleCellClick(record, 'time', 2),
    }),
  },
  {
    title: '',
    dataIndex: 'day',
    key: 'day',
    width: 80,
    align: 'center',
    render: (text, record, index) => {
      // Check if the day is 'D3' and set rowspan to 2
      if (record.day === 'D3') {
        return {
          children: <span style={{ fontWeight: 'bold' }}>{text}</span>,
          props: {
            rowSpan: 2,
          },
        };
      }
      if (record.day === 'D4') {
        return {
          children: <span style={{ fontWeight: 'bold' }}>{text}</span>,
          props: {
            rowSpan: 2,
          },
        };
      }
      if (record.day === 'D5') {
        return {
          children: <span style={{ fontWeight: 'bold' }}>{text}</span>,
          props: {
            rowSpan: 2,
          },
        };
      }
      if (record.day === 'D6') {
        return {
          children: <span style={{ fontWeight: 'bold' }}>{text}</span>,
          props: {
            rowSpan: 2,
          },
        };
      }
      if (record.day === 'D7') {
        return {
          children: <span style={{ fontWeight: 'bold' }}>{text}</span>,
          props: {
            rowSpan: 2,
          },
        };
      }

      
      // For the next row after 'D3', set rowspan to 0 to skip rendering the cell
      if (index > 0 && data[index - 1].day === 'D3') {
        return {
          children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
      if (index > 0 && data[index - 1].day === 'D4') {
        return {
          children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
      if (index > 0 && data[index - 1].day === 'D5') {
        return {
          children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
      if (index > 0 && data[index - 1].day === 'D6') {
        return {
          children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
      if (index > 0 && data[index - 1].day === 'D7') {
        return {
          children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
     
      return <span style={{ fontWeight: 'bold' }}>{text}</span>;
    },
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    title: `${i + 1}`,
    dataIndex: `day${i + 1}`,
    key: `day${i + 1}`,
    width: 30,
    align: 'center',
    onCell: (record, rowIndex) => ({
      onClick: () => handleCellClick(record, `day${i + 1}`, i + 4),
    }),
  })),
  
];


  const renderSecondModalContent = () => {
    if (!selectedRowData) return null;


    if (currentFieldtable === 'emb') {
      return (
        <>
        
          <Select style={{ width: '100%' }} value="" onChange={handleChange}>
              <Option value="">Select</Option>
              <Option value="AL">AL</Option>
          </Select>
        
         
        </>
      );
    } else if (currentFieldtable === 'date') {
      return (
        <>
          <Calendar  fullscreen={false} onSelect={handleDateSelect}/>
        </>
      );
    } else if (currentFieldtable === 'time') {
      return (
        <>
          <TimePicker
          defaultValue={dayjs(selectedRowData?.time || '00:00', timeFormat)}
          format={timeFormat}
          onChange={handleTimeChange}
          style={{ width: '100%' }}
        />
          
        </>
      );
    }
  };

  const renderModalContent = () => {
    if (!selectedRowData) return null;
    const { day } = selectedRowData;
    if (day === 'D0') {
      return (
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="ICSI">ICSI</Option>
                            <Option value="DEG">DEG</Option>
        </Select>
      );
    }else if(day === 'D1'){
      return (
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="0PN">0PN</Option>
                            <Option value="1PN">1PN</Option>
                            <Option value="2PN">2PN</Option>
                            <Option value="3PN">3PN</Option>
                            <Option value="4PN">4PN</Option>
                            <Option value="MPN">MPN</Option>
                            <Option value="DEG">DEG</Option>
                            <Option value="Cell Arrest">Cell Arrest</Option>
        </Select>
      );
    
    }else if(day === 'D2'){
      return (
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="Continuing Culture">Continuing Culture</Option>
                            <Option value="DEG">DEG</Option>
                            <Option value="Cell Arrest">Cell Arrest</Option>
        </Select>
      );
    
    }else if(day === 'D3'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="Continuing Culture">Continuing Culture</Option>
                            <Option value="1-Cell">1-Cell</Option>
                            <Option value="2-Cell">2-Cell</Option>
                            <Option value="3-Cell">3-Cell</Option>
                            <Option value="4-Cell">4-Cell</Option>
                            <Option value="5-Cell">5-Cell</Option>
                            <Option value="6-Cell">6-Cell</Option>
                            <Option value="7-Cell">7-Cell</Option>
                            <Option value="8-Cell">8-Cell</Option>
                            <Option value="9-Cell">9-Cell</Option>
                            <Option value="10-Cell">10-Cell</Option>
                            <Option value="11-Cell">11-Cell</Option>
                            <Option value="12-Cell">12-Cell</Option>
                            <Option value="13-Cell">13-Cell</Option>
                            <Option value="14-Cell">14-Cell</Option>
                            <Option value="MC">MC</Option>
                            <Option value="MC Comp">MC Comp</Option>
                            <Option value="Mor">Mor</Option>
                            <Option value="DEG">DEG</Option>
                            <Option value="Cell arrest">Cell arrest</Option>
        </Select>
        </>
      );
    }else if(day === 'D3/'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="GAA">GAA</Option>
                            <Option value="GAB">GAB</Option>
                            <Option value="GBA">GBA</Option>
                            <Option value="GBB">GBB</Option>
                            <Option value="GCA">GCA</Option>
                            <Option value="GCB">GCB</Option>
                            <Option value="GCC">GCC</Option>
                            <Option value="GC+">GC+</Option>
                            <Option value="GC+C+">GC+C+</Option>
                            <Option value="FAA+">FAA+</Option>
                            <Option value="FAB">FAB</Option>
                            <Option value="FBA">FBA</Option>
                            <Option value="FBB">FBB</Option>
                            <Option value="FCA">FCA</Option>
                            <Option value="FCB">FCB</Option>
                            <Option value="FAC">FAC</Option>
                            <Option value="FBC">FBC</Option>
                            <Option value="FCC">FCC</Option>
                            <Option value="FC+">FC+</Option>
                            <Option value="FC+C+">FC+C+</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAB">PAB</Option>
                            <Option value="PBA">PBA</Option>
                            <Option value="PBB">PBB</Option>
                            <Option value="PBB">PBB</Option>
                            <Option value="PCA">PCA</Option>
                            <Option value="PCB">PCB</Option>
                            <Option value="PAC">PAC</Option>
                            <Option value="PBC">PBC</Option>
                            <Option value="PCC">PCC</Option>
                            <Option value="PC+">PC+</Option>
                            <Option value="PC+C+">PC+C+</Option>
        </Select>
        </>
      );
    }else if(day === 'D4'){
      return (
        <>
          <Select
            value=""
            onChange={handleChange}
            style={{ width: '100%' }}
          >
                  <Option value="">Select</Option>
                  <Option value="MC">MC</Option>
                  <Option value="MC Comp">MC Comp</Option>
                  <Option value="Mor">Mor</Option>
                  <Option value="Cav Mor">Cav Mor</Option>
                  <Option value="Comp Mor">Comp Mor</Option>
                  <Option value="EB">EB</Option>
                  <Option value="DEG">DEG</Option>
                  <Option value="Cell arrest">Cell arrest</Option>
          </Select>
        </>
      );
    }else if(day === 'D4/'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="GAA">GAA</Option>
                            <Option value="GAB">GAB</Option>
                            <Option value="GBA">GBA</Option>
                            <Option value="GBB">GBB</Option>
                            <Option value="GCA">GCA</Option>
                            <Option value="GCB">GCB</Option>
                            <Option value="GCC">GCC</Option>
                            <Option value="GC+">GC+</Option>
                            <Option value="GC+C+">GC+C+</Option>
                            <Option value="FAA">FAA</Option>
                            <Option value="FAB">FAB</Option>
                            <Option value="FBA">FBA</Option>
                            <Option value="FBB">FBB</Option>
                            <Option value="FCA">FCA</Option>
                            <Option value="FCB">FCB</Option>
                            <Option value="FAC">FAC</Option>
                            <Option value="FBC">FBC</Option>
                            <Option value="FCC">FCC</Option>
                            <Option value="FC+">FC+</Option>
                            <Option value="FC+C+">FC+C+</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAB">PAB</Option>
                            <Option value="PBA">PBA</Option>
                            <Option value="PBB">PBB</Option>
                            <Option value="PCA">PCA</Option>
                            <Option value="PCB">PCB</Option>
                            <Option value="PAC">PAC</Option>
                            <Option value="PBC">PBC</Option>
                            <Option value="PCC">PCC</Option>
                            <Option value="PC+">PC+</Option>
                            <Option value="PC+C+">PC+C+</Option>
        </Select>
        </>
      );
    }else if(day === 'D5'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="MC">MC</Option>
                            <Option value="MC Comp">MC Comp</Option>
                            <Option value="Mor">Mor</Option>
                            <Option value="Cav Mor">Cav Mor</Option>
                            <Option value="EB">EB</Option>
                            <Option value="B">B</Option>
                            <Option value="HB">HB</Option>
                            <Option value="HHB">HHB</Option>
                            <Option value="DEG">DEG</Option>
        </Select>
        </>
      );
    }else if(day === 'D5/'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="GAA">GAA</Option>
                            <Option value="GAB">GAB</Option>
                            <Option value="GBA">GBA</Option>
                            <Option value="GBB">GBB</Option>
                            <Option value="GCA">GCA</Option>
                            <Option value="GCB">GCB</Option>
                            <Option value="GCC">GCC</Option>
                            <Option value="GC+">GC+</Option>
                            <Option value="GC+C+">GC+C+</Option>
                            <Option value="FAA">FAA</Option>
                            <Option value="FAB">FAB</Option>
                            <Option value="FBA">FBA</Option>
                            <Option value="FBB">FBB</Option>
                            <Option value="FCA">FCA</Option>
                            <Option value="FCB">FCB</Option>
                            <Option value="FAC">FAC</Option>
                            <Option value="FBC">FBC</Option>
                            <Option value="FCC">FCC</Option>
                            <Option value="FC+">FC+</Option>
                            <Option value="FC+C+">FC+C+</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAB">PAB</Option>
                            <Option value="PBA">PBA</Option>
                            <Option value="PBB">PBB</Option>
                            <Option value="PCA">PCA</Option>
                            <Option value="PCB">PCB</Option>
                            <Option value="PAC">PAC</Option>
                            <Option value="PBC">PBC</Option>
                            <Option value="PCC">PCC</Option>
                            <Option value="PC+">PC+</Option>
                            <Option value="PC+C+">PC+C+</Option>
        </Select>
        </>
      );
    }else if(day === 'D6' || day === 'D7'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="MC">MC</Option>
                            <Option value="EB">EB</Option>
                            <Option value="B">B</Option>
                            <Option value="HB">HB</Option>
                            <Option value="HHB">HHB</Option>
                            <Option value="DEG">DEG</Option>
        </Select>
        </>
      );
    }else if(day === 'D6/' || day === 'D7/'){
      return (
        <>
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="GAA">GAA</Option>
                            <Option value="GAB">GAB</Option>
                            <Option value="GBA">GBA</Option>
                            <Option value="GBB">GBB</Option>
                            <Option value="GCA">GCA</Option>
                            <Option value="GCB">GCB</Option>
                            <Option value="GCC">GCC</Option>
                            <Option value="GC+">GC+</Option>
                            <Option value="GC+C+">GC+C+</Option>
                            <Option value="FAA">FAA</Option>
                            <Option value="FAB">FAB</Option>
                            <Option value="FBA">FBA</Option>
                            <Option value="FBB">FBB</Option>
                            <Option value="FCA">FCA</Option>
                            <Option value="FCB">FCB</Option>
                            <Option value="FAC">FAC</Option>
                            <Option value="FBC">FBC</Option>
                            <Option value="FCC">FCC</Option>
                            <Option value="FC+">FC+</Option>
                            <Option value="FC+C+">FC+C+</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAA">PAA</Option>
                            <Option value="PAB">PAB</Option>
                            <Option value="PBA">PBA</Option>
                            <Option value="PBB">PBB</Option>
                            <Option value="PCA">PCA</Option>
                            <Option value="PCB">PCB</Option>
                            <Option value="PAC">PAC</Option>
                            <Option value="PBC">PBC</Option>
                            <Option value="PCC">PCC</Option>
                            <Option value="PC+">PC+</Option>
                            <Option value="PC+C+">PC+C+</Option>
        </Select>
        </>
      );
    }else if(day === 'Final Disposition'){
      return (
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
                            <Option value="">Select</Option>
                            <Option value="-">-</Option>
                            <Option value="Bx/Cryo">Bx/Cryo</Option>
                            <Option value="Cryo">Cryo</Option>
                            <Option value="Discard">Discard</Option>
        </Select>
      );
    }else if(day === 'AH'){
      return (
        <Select
          value=""
          onChange={handleChange}
          style={{ width: '100%' }}
        >
            <Option value="">Select</Option>
            <Option value="AH">AH</Option>
        </Select>
      );
    }

    
  };



  const transformData = () => {
    const transformed = {};
  
    data.forEach((row) => {
      const dayKey = row.day.toLowerCase().replace(' ', '_');
      transformed[dayKey] = [];
  
      
      transformed[dayKey].push(row.emb || "");
      transformed[dayKey].push(row.date || "");
      transformed[dayKey].push(row.time || "");
  
    
      for (let i = 4; i <= 23; i++) {  
        transformed[dayKey].push(row[`day${i - 3}`] || "");
      }
    });
  
    return transformed;
  };

  const sendDataToAPI = async () => {
    const transformedData = transformData();

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', transformedData);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleSubmit = () => {

    const transformedData = transformData();
    console.log(transformedData);
    
    // sendDataToAPI();
  };
  return (
    <>
      <ConfigProvider
              theme={{
                components: {
                  Table: {
                    borderColor: '#CACACA',
                  },
                },
              }}
            >
                <Space>
                      <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        size="middle"
                        pagination={false}
                        scroll={{ x: '100%', y: '100%' }}

                        components={{
                          body: {
                            cell: (props) => (
                              <td {...props} />
                            ),
                          },
                        }}

                        
                      />
                </Space>
        </ConfigProvider>
      <Modal
        title="Row Details"
        centered
        open={modalOpen}
        // onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        {renderModalContent()}
      </Modal>

      <Modal
        title={`${currentFieldtable ? currentFieldtable.charAt(0).toUpperCase() + currentFieldtable.slice(1) : ''} Field`}
        centered
        open={secondModalOpen}
        // onOk={() => setSecondModalOpen(false)}
        onCancel={() => setSecondModalOpen(false)}
        footer={null}
      >
        {renderSecondModalContent()}
      </Modal>

      
    </>
  );
}

export default TableCom;
