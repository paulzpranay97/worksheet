import React, { useState , useEffect }  from 'react';
import { Row, Col , Button} from 'antd';  
import { Typography } from 'antd';
import { Divider , ConfigProvider, Space, TimePicker ,Calendar, Modal, Table, Alert, Form, Input ,InputNumber ,DatePicker ,Select , Checkbox , Radio, message } from 'antd';

import 'remixicon/fonts/remixicon.css';
import TableCom from './TableCom';
import logo from '../images/logo.webp';
import dayjs from 'dayjs';
import axios from 'axios';

import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;


// css 
const innner_con = { background: '#ffff', boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 10px 10px', padding:'10px 15px 10px 15px', height:'170px'};
const innner_con_2 = { background:'#FCF8FF', padding: '25px 0px 0px 0px' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '0px 0px 10px 10px', padding:'0px 15px 10px 15px', height:'30px'};
const innner_con_3 = { background: '#ffff' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 10px 10px', padding:'0px 10px 0px 15px', height:'190px'};
const innner_con_3_row_2 = { background: '#ffff' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 10px 10px', padding:'8px 8px 8px 8px', height:'155px', margin:'0'};
const innner_con_4 = { background:'#FCF8FF', boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 0px 0px', padding:'10px 15px 0px 15px', height:'35px'};
const innner_con_5 = { background: '#ffff', boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '0px 0px 10px 10px', padding:'5px 15px 0px 15px', height:'140px'};
const innner_con_3_row_3 = { background: '#ffff' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 10px 10px', padding:'0px 15px 0px 15px', height:'95px'};
const innner_con_4_row_4 = { background: '#ffff' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 10px 10px', padding:'10px 15px 0px 15px', height:'165px'};
const table_container = { background: '#ffff' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '0px 0px 10px 10px', padding:'0px 0px 0px 0px'};
const table_container_header = { background: '#ffff' ,boxShadow: '0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A',  borderRadius: '10px 10px 0px 0px', padding:'10px 15px 10px 15px', height:'50px'};
const title_s_style = { width: '100%', color: '#8A62A5',margin:'5px 0px 10px 0px'};
const title_s_style_p = { width: '100%', color: '#8A62A5',margin:'-8px 0px 0px 0px'};
const title_s_style_center = { width: '100%', color: '#8A62A5',margin:'5px 0px 10px 0px', textAlign: 'center', lineHeight: '1.4rem'};
const title_xs_style = { width: '100%', color: '#545454',margin:'8px 0px 0px 0px', fontSize:'14px', fontWeight:'bold', position:'relative' , top: '28px', left: '-5px'};
const inputfiled_style = { width: '100%', border:'none', background: 'transparent', borderBottom: '1px solid #CACACA' , borderRadius: '0px',outline: 'none', boxShadow: 'none', position: 'relative', top: '-8px' };
const col_input_spaceing = {  marginTop:'-23px'};
const col_input_spaceing_divider = {  marginTop:'-40px' , marginBottom: '8px', padding: '0' };
const col_input_top_spaceing = {  marginTop: '-8px'};
const col_input_top_spaceing2 = {  marginTop: '-3px'};
const col_input_checkbox_spaceing = {  marginTop: '1px'};
const col_input_checkbox2_spaceing = {  marginTop: '-25px' };
const col_input_checkbox3_spaceing = {  marginTop: '-25px' };
const col_input_spaceing_2 = {  marginTop:'-30px'};
const col_input_spaceing_3 = {  marginTop:'-25px'};
const innner_con_header_2 = { padding:'0px 15px 0px 15px', height:'50px'};
const col_input_spaceing_header2 = { marginTop: '0px'};
const navbar_style = { background: '#FFFFFF', height: '80px', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px', width: '100%', margin: '0', padding: '0', marginBottom: '20px', borderRadius: '0px 0px 10px 10px', position: 'sticky', top: '0', left: '0', right: '0', zIndex: 1000 };
const footer_style = { background: '#FFFFFF', height: '80px', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.15) 3px 3px 3px 3px', width: '100%', margin: '0', padding: '0',  borderRadius: '10px 10px 0px 0px', position: 'sticky', bottom: '0', left: '0', right: '0', zIndex: 1000 };





function FormCom ({patient}) {


  console.log(patient);
  
  // const patient = salesDetails;
  // const base_url = 'http://localhost/marketing/ajax';
  const base_url = 'https://marketing.ps-baby.com/ajax'; 

  const [currentEditingDay, setCurrentEditingDay] = useState('');



  // All states 
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentField, setCurrentField] = useState(null);
  const [openCalender, setOpenCalender] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState({});
  const [modalTitle, setModalTitle] = useState('Select');

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
      key: '15',
      emb: '',
      date: '',
      time: '',
      day: 'Final Disposition',
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: '',
      })),
    },
  ]);
  const [cellname, setCellname] = useState('');
  const [dayname, setDayname] = useState('');
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [currentFieldtable, setCurrentFieldtable] = useState('');
  // Show modal and set current field
  const showModal = (field) => {
    setCurrentField(field);
    setIsModalVisible(true);
    const title = fieldOptions[field]?.[0]?.title || 'Select';
    setModalTitle(title);
  };

  // Handle select option change and set the value to the corresponding input
  const handleSelectChange = (value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [currentField]: value,
    }));
    form.setFieldsValue({ [currentField]: value }); 
    setIsModalVisible(false); 
  };

  
  const fieldOptions = {
    cycle_type: [
      { value: 'Egg Thawing', label: 'Egg Thawing' , title:'Cycle Type'},
      { value: 'ICSI', label: 'ICSI' , title:'Cycle Type'},
      { value: 'Culture', label: 'Culture' , title:'Cycle Type'},
      { value: 'ICSI & Culture', label: 'ICSI & Culture' , title:'Cycle Type'},
      { value: 'Egg Thawing, ICSI & Culture', label: 'Egg Thawing, ICSI & Culture' , title:'Cycle Type'},
    ],
    gender: [
      { value: 'Male', label: 'Male' , title:'Gender'},
      { value: 'Female', label: 'Female' , title:'Gender'},
      { value: 'Others', label: 'Others' , title:'Gender'},
      { value: 'N/A', label: 'N/A' , title:'Gender'},
    ],
    bx_yes_no: [
      { value: 'Yes', label: 'Yes' , title:'Cryo remaining embroyos w/o biopsy'},
      { value: 'No', label: 'No' , title:'Cryo remaining embroyos w/o biopsy'},
      
    ],
  };



  // All Functions 
  const [form] = Form.useForm(); 
  const timeFormat = 'HH:mm';

  const handlePdfDownload = () => {
    const input = document.getElementById('pdfForm'); // Use the ID to target the form
      html2canvas(input, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('form.pdf');
      });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const calculateAge = (dob) => {
    if (!dob) return null;
    const [month, day, year] = dob.split('/'); 
    const birthDate = new Date(`${year}-${month}-${day}`); 
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

  const onCalenderSelect = (value: Dayjs) => {
    if (value) {
      setSelectedDate(value.format('MM-DD-YYYY'));
      if (currentField) {
        form.setFieldsValue({ [currentField]: value.format('MM-DD-YYYY') });
      }
      // If current field is `thaw_date`, also update `egg_frozen_date`
      if (currentField === 'thaw_date') {
        form.setFieldsValue({ egg_frozen_date: value.format('MM-DD-YYYY') });
      }
      setOpenCalender(false);
    }
  };

  const handleOpenCalendar = (field) => {
    setCurrentField(field);
    setOpenCalender(true);
  };

  const onTimeSelect = (time) => {
    const formattedTime = time.format(timeFormat);
    setSelectedTime(formattedTime);

    if (currentField) {
      form.setFieldsValue({ [currentField]: formattedTime });
    }

    setOpenTime(false);
  };

  const handleOpenTimePicker = (field) => {
    setCurrentField(field);
    setOpenTime(true);
  };


  // Table code 
  const handleCellClick = (record , columnKey, columnIndex) => {
    setSelectedRowData({ ...record, columnKey });
    setCurrentFieldtable(columnKey);
    setCellname(`Egg ${columnIndex-3}`)
    if(record.day == 'D3/' || record.day == 'D4/' || record.day == 'D5/' || record.day == 'D6/' || record.day == 'D7/'){

      const cleanDay = record.day.replace(/\/$/, '');
      setDayname(`Grading for ${cleanDay}`);
    }else{

      setDayname(`Thawing Details for ${record.day}`);
    }
    if (columnKey === 'emb' || columnKey === 'date' || columnKey === 'time') {
      setSecondModalOpen(true); 
    } else if ((columnIndex + 1) % 4 === 0) {
      setModalOpen(true); 
    } else {
      setModalOpen(true); 
    }
  };

//   const handleCellClick = (record, columnKey, columnIndex) => {
//     setSelectedRowData({ ...record, columnKey });
//     setCurrentFieldtable(columnKey);
//     setCellname(`Egg ${columnIndex - 3}`);
    
//     // Set the current editing day
//     if (record.day.endsWith('/')) {
//         setCurrentEditingDay(record.day);
//         setDayname(`Grading for ${record.day.replace(/\/$/, '')}`);
//     } else {
//         setCurrentEditingDay(record.day);
//         setDayname(`Thawing Details for ${record.day}`);
//     }

//     // Open modal for combined days
//     setModalOpen(true);
// };


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
      width: 40,
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'emb', 0),
      }),
    },
    {
      title: 'Date:',
      dataIndex: 'date',
      key: 'date',
      width: 80,
      align: 'center',
      onCell: (record) => ({
        onClick: () => handleCellClick(record, 'date', 1),
      }),
    },
    {
      title: 'Time:',
      dataIndex: 'time',
      key: 'time',
      width: 80,
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
      width: 80,
      align: 'center',
      onCell: (record, rowIndex) => ({
        onClick: () => handleCellClick(record, `day${i + 1}`, i + 4),
      }),
    })),
    
  ];

//   const renderModalContent = () => {
//     if (!selectedRowData) return null;

//     // Get the base day (e.g., 'D3') and its pair (e.g., 'D3/')
//     const baseDay = selectedRowData.day.replace('/', '');
//     const dayPair = `${baseDay}/`;

//     // Define options for each day and its pair
//     const dayOptions = {
//         D0: ["ICSI", "DEG"],
//         D1: ["0PN", "1PN", "2PN", "3PN", "4PN", "MPN", "DEG", "Cell Arrest"],
//         D2: ["Continuing Culture", "DEG", "Cell Arrest"],
//         D3: ["Continuing Culture", "1-Cell", "2-Cell", "3-Cell", "4-Cell", "5-Cell", "6-Cell", "7-Cell", "8-Cell", "9-Cell", "10-Cell", "11-Cell", "12-Cell", "13-Cell", "14-Cell", "MC", "MC Comp", "Mor", "DEG", "Cell arrest"],
//         'D3/': ["GAA", "GAB", "GBA", "GBB", "GCA", "GCB", "GCC", "GC+", "GC+C+", "FAA+", "FAB", "FBA", "FBB", "FCA", "FCB", "FAC", "FBC", "FCC", "FC+", "FC+C+", "PAA", "PAB", "PBA", "PBB", "PCA", "PCB", "PAC", "PBC", "PCC", "PC+", "PC+C+"],
//         D4: ["MC", "MC Comp", "Mor", "Cav Mor", "Comp Mor", "EB", "DEG", "Cell arrest"],
//         'D4/': ["GAA", "GAB", "GBA", "GBB", "GCA", "GCB", "GCC", "GC+", "GC+C+", "FAA", "FAB", "FBA", "FBB", "FCA", "FCB", "FAC", "FBC", "FCC", "FC+", "FC+C+", "PAA", "PAB", "PBA", "PBB", "PCA", "PCB", "PAC", "PBC", "PCC", "PC+", "PC+C+"],
//         D5: ["MC", "MC Comp", "Mor", "Cav Mor", "EB", "B", "HB", "HHB", "DEG"],
//         'D5/': ["GAA", "GAB", "GBA", "GBB", "GCA", "GCB", "GCC", "GC+", "GC+C+", "FAA", "FAB", "FBA", "FBB", "FCA", "FCB", "FAC", "FBC", "FCC", "FC+", "FC+C+", "PAA", "PAB", "PBA", "PBB", "PCA", "PCB", "PAC", "PBC", "PCC", "PC+", "PC+C+"],
//         D6: ["MC", "EB", "B", "HB", "HHB", "DEG"],
//         'D6/': ["GAA", "GAB", "GBA", "GBB", "GCA", "GCB", "GCC", "GC+", "GC+C+", "FAA", "FAB", "FBA", "FBB", "FCA", "FCB", "FAC", "FBC", "FCC", "FC+", "FC+C+", "PAA", "PAB", "PBA", "PBB", "PCA", "PCB", "PAC", "PBC", "PCC", "PC+", "PC+C+"],
//         D7: ["MC", "EB", "B", "HB", "HHB", "DEG"],
//         'D7/': ["GAA", "GAB", "GBA", "GBB", "GCA", "GCB", "GCC", "GC+", "GC+C+", "FAA", "FAB", "FBA", "FBB", "FCA", "FCB", "FAC", "FBC", "FCC", "FC+", "FC+C+", "PAA", "PAB", "PBA", "PBB", "PCA", "PCB", "PAC", "PBC", "PCC", "PC+", "PC+C+"],
//         AH: ["AH"],
//         'Final Disposition': ["-", "Bx/Cryo", "Cryo", "Discard"]
//     };

//     // Determine if the day has a paired counterpart
//     const hasPair = dayOptions[dayPair] !== undefined;

//     return (
//         <>
//             {/* Render base day options */}
//             <div>
//                 <span>{baseDay} Selection:</span>
//                 <Select
//                     value={selectedRowData[baseDay]}
//                     onChange={(value) => handleChangeForDay(value, baseDay)}
//                     style={{ width: '100%' }}
//                 >
//                     <Option value="">Select</Option>
//                     {dayOptions[baseDay].map(option => (
//                         <Option key={option} value={option}>{option}</Option>
//                     ))}
//                 </Select>
//             </div>
//             {/* Render paired day options if applicable */}
//             {hasPair && (
//                 <div>
//                     <span>{dayPair} Selection:</span>
//                     <Select
//                         value={selectedRowData[dayPair]}
//                         onChange={(value) => handleChangeForDay(value, dayPair)}
//                         style={{ width: '100%' }}
//                     >
//                         <Option value="">Select</Option>
//                         {dayOptions[dayPair].map(option => (
//                             <Option key={option} value={option}>{option}</Option>
//                         ))}
//                     </Select>
//                 </div>
//             )}
//         </>
//     );
// };

// const columns = [
//     { title: 'Emb:', dataIndex: 'emb', key: 'emb', width: 40, align: 'center', onCell: (record) => ({ onClick: () => handleCellClick(record, 'emb', 0) }) },
//     { title: 'Date:', dataIndex: 'date', key: 'date', width: 80, align: 'center', onCell: (record) => ({ onClick: () => handleCellClick(record, 'date', 1) }) },
//     { title: 'Time:', dataIndex: 'time', key: 'time', width: 80, align: 'center', onCell: (record) => ({ onClick: () => handleCellClick(record, 'time', 2) }) },
//     {
//         title: '', dataIndex: 'day', key: 'day', width: 80, align: 'center',
//         render: (text, record, index) => {
//             if (['D3', 'D4', 'D5', 'D6', 'D7'].includes(record.day)) {
//                 return { children: <span style={{ fontWeight: 'bold' }}>{record.day}</span>, props: { rowSpan: 2 } };
//             }
//             if (['D3/', 'D4/', 'D5/', 'D6/', 'D7/'].includes(record.day)) {
//                 return { children: null, props: { rowSpan: 0 } };
//             }
//             return <span style={{ fontWeight: 'bold' }}>{text}</span>;
//         },
//     },
//     ...Array.from({ length: 20 }, (_, i) => ({
//         title: `${i + 1}`,
//         dataIndex: `day${i + 1}`,
//         key: `day${i + 1}`,
//         width: 80,
//         align: 'center',
//         onCell: (record, rowIndex) => ({ onClick: () => handleCellClick(record, `day${i + 1}`, i + 4) }),
//     })),
// ];

// const handleChangeForDay = (value, day) => {
//   setSelectedRowData(prevState => ({
//       ...prevState,
//       [day]: value,
//   }));

//   const newData = data.map(row => {
//       if (row.day === day || row.day === `${day}/`) {
//           return {
//               ...row,
//               [day]: value,
//           };
//       }
//       return row;
//   });
//   setData(newData);
// };


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
          <TimePicker defaultValue={dayjs(selectedRowData?.time || '00:00', timeFormat)} format={timeFormat} onChange={handleTimeChange} style={{ width: '100%' }} />
        </>
      );
    }
  };

  const renderModalContent = () => {
    if (!selectedRowData) return null;
    const { day } = selectedRowData;
    if (day === 'D0') {
      
      return (
       
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
                            <Option value="">Select</Option>
                            <Option value="ICSI">ICSI</Option>
                            <Option value="DEG">DEG</Option>
        </Select>
      );

    }else if(day === 'D1'){
      return (
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
                            <Option value="">Select</Option>
                            <Option value="Continuing Culture">Continuing Culture</Option>
                            <Option value="DEG">DEG</Option>
                            <Option value="Cell Arrest">Cell Arrest</Option>
        </Select>
      );
    
    }else if(day === 'D3'){
      return (
        <>
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
          <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
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
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
                            <Option value="">Select</Option>
                            <Option value="-">-</Option>
                            <Option value="Bx/Cryo">Bx/Cryo</Option>
                            <Option value="Cryo">Cryo</Option>
                            <Option value="Discard">Discard</Option>
        </Select>
      );
    }else if(day === 'AH'){
      return (
        <Select value="" onChange={handleChange} style={{ width: '100%' }} >
            <Option value="">Select</Option>
            <Option value="AH">AH</Option>
        </Select>
      );
    }

    
  };

  useEffect(() => {
    if (Array.isArray(patient) && patient.length > 0 && typeof patient[0] === 'object') {
      const patientData = patient[0];

      const table_existing_data = safeJsonParse(patientData.daily_report);
      const semen_analysis_data = safeJsonParse(patientData.semen_analysis);

      if (Object.keys(table_existing_data).length > 0) {
        const updatedData = transformDataForTable(table_existing_data);
        setData(updatedData); 
      }
      
      const age = calculateAge(patientData.dob);
      
      form.setFieldsValue({
        patient_name: patientData.name || '',
        partner_name: patientData.spouse || '',
        patient_dob: formatDate(patientData.dob) || '',
        partner_dob: formatDate(patientData.spouse_dob) || '',
        age: age || 0,
        cycle: patientData.cycle || '',
        art: patientData.art || '',
        dnr: patientData.donor_id || '',
        age_oocyte: patientData.age || '',
        sperm_source: patientData.sperm_source || '',
        sperm_bank: patientData.sperm_bank || '',
        icsi: patientData.icsi || '',
        total_thawed_eggs: patientData.thawed || '',
        survived: patientData.survived || '',
        mii: patientData.mii || '',
        mi: patientData.mi || '',
        two_pn: patientData.d2pn || '',
        cryo_two_pn: patientData.d2pn || '',
        cryo_d5: patientData.d5 || '',
        cryo_d6: patientData.d6 || '',
        cryo_d7: patientData.d7 || '',
        cryo_total: patientData.total_emb_cryo || '',
        pgs_total_bx: patientData.total_bx || '',
        comment: patientData.notes || '',
        thaw_date: patientData.thaw_date || '',
        fs_ml: semen_analysis_data?.fresh_semen?.volume || '',
        fs_ml_10: semen_analysis_data?.fresh_semen?.count || '',
        fs_percentage: semen_analysis_data?.fresh_semen?.motility || '',
        fs_progressive: semen_analysis_data?.fresh_semen?.progressive || '',
        at_ml: semen_analysis_data?.after_thawing?.volume || '',
        at_ml_10: semen_analysis_data?.after_thawing?.count || '',
        at_percentage: semen_analysis_data?.after_thawing?.motility || '',
        at_progressive: semen_analysis_data?.after_thawing?.progressive || '',
        f_ml: semen_analysis_data?.final?.volume || '',
        f_ml_10: semen_analysis_data?.final?.count || '',
        f_percentage: semen_analysis_data?.final?.motility || '',
        f_progressive: semen_analysis_data?.final?.progressive || '',
        egg_frozen_date: patientData.thaw_date || '',
      });

      // console.log('Current form values:', form.getFieldsValue());
      
    } else {
      // console.log('Patient is not an array or is empty');
    }
  }, [patient, form]);

 
  
  
  const safeJsonParse = (str) => {
    if (!str) {
      return {};
    }
    try {
      return JSON.parse(str);
    } catch (e) {
      console.error('JSON parse error:', e);
      return {}; 
    }
  };
  
  const transformData = () => {
    const transformed = {};
    data.forEach((row) => {
      const dayKey = row.day.toLowerCase();
      if (dayKey) {
        transformed[dayKey] = [];
        transformed[dayKey].push(row.emb || "");
        transformed[dayKey].push(row.date || "");
        transformed[dayKey].push(row.time || "");
        for (let i = 4; i <= 23; i++) {  
          transformed[dayKey].push(row[`day${i - 3}`] || "");
        }
      }
    });
    return transformed;
  };
  
  const transformDataForTable = (existingData) => {
    const transformed = data.map((item) => {
      const dayKey = item.day.toLowerCase(); 
      const dayData = existingData[dayKey] || []; 
      return {
        ...item,
        emb: dayData[0] || '', 
        date: dayData[1] || '',
        time: dayData[2] || '',
        ...Array.from({ length: 20 }, (_, i) => ({
          [`day${i + 1}`]: dayData[i + 3] || '',  
        })).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      };
    });
  
    return transformed; 
  };

  // Function to handle sending daily report data to the API using FormData
  const sendDailyReport = async (transformedData) => {
    try {
      const patientData = patient[0];
      let formData = new FormData();
      formData.append('id_inv', patientData.id);
      formData.append('daily_report', JSON.stringify(transformedData));
      // const response = await axios.post('http://localhost/marketing/ajax?action=inv_update_daily_report', formData, {
      const response = await axios.post('https://marketing.ps-baby.com/ajax?action=inv_update_daily_report', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }); 
    } catch (error) {
      console.error('Error sending daily report:', error);
    }
  };

  // Function to handle sending egg thaw details to the API
  const sendEggThawDetails = async (values) => {
    try {
      const patientData = patient[0];

      // Prepare semen analysis data
      const semenAnalysisData = {
        fresh_semen: {
          volume: values.fs_ml,
          count: values.fs_ml_10,
          motility: values.fs_percentage,
          progressive: values.fs_progressive,
        },
        after_thawing: {
          volume: values.at_ml,
          count: values.at_ml_10,
          motility: values.at_percentage,
          progressive: values.at_progressive,
        },
        final: {
          volume: values.f_ml,
          count: values.f_ml_10,
          motility: values.f_percentage,
          progressive: values.f_progressive,
        },
      };

      const semenAnalysisDataString = JSON.stringify(semenAnalysisData);

      const response = await axios.get( base_url , {
        params: {
          action: 'inv_save_or_update_egg_thaw_details',
          id_inv: patientData.id,
          art: values.art,
          procedure_date: '',
          receipt_date: '',
          sperm_source: values.sperm_source,
          sperm_details: '',
          sperm_bank: values.sperm_bank,
          fresh_or_frozen_sperm: '',
          sperm_donor_id: '',
          sperm_receipt_date: '',
          tms: '',
          thawed: values.total_thawed_eggs,
          survived: values.survived,
          mii: values.mii,
          mi: values.mi,
          assigned: '',
          icsi: values.icsi,
          d1pn: '',
          d2pn: values.cryo_two_pn,
          d3pn_more: '',
          fert: '',
          hatched: '',
          no_of_embryos_cleaved: '',
          total_bl: '',
          initial_cryo_date: '',
          d5: values.cryo_d5,
          d6: values.cryo_d6,
          d7: values.cryo_d7,
          d3: '',
          total_emb_cryo: values.cryo_total,
          pgs: '',
          euploid: '',
          aneuploid: '',
          no_result: '',
          mosaic: '',
          untested: '',
          total_bx: values.pgs_total_bx,
          thaw_emb: '',
          icsi_emb: '',
          biopsy_emb: '',
          sperm_proc: '',
          fert_check: '',
          assisted_hatching: '',
          cryo_emb: '',
          cane_color: '',
          straws: '',
          tank: '',
          canister: '',
          in_storage: '',
          storage_clinic: '',
          note: values.comment,
          semen_analysis: semenAnalysisDataString,
          thaw_date: values.thaw_date,
        },
      });
      // console.log('Egg thaw details sent successfully:', response.data , );
    } catch (error) {
      console.error('Error sending egg thaw details:', error);
    }
  };

  // Combined handleSubmit function to call both APIs
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const transformedData = transformData();
      await sendEggThawDetails(values);
      await sendDailyReport(transformedData);
      message.success('Form submitted successfully!');
     
    } catch (error) {
      message.success('Form submitted successfully!');
      console.error('Error during form submission:', error);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const  handleClose = () => {
    window.location.href = 'https://marketing.ps-baby.com/dashboard';
  };



  return (
    <>
      <Row gutter={24} style={navbar_style}>
          <Col span={6} style={{ color: 'red',  display: 'flex', alignItems: 'center',paddingLeft:'50px' }}> 
            <img src={logo} alt="" style={{ color: 'blue' ,textAlign:'center',margin:'0'}}/>
          </Col>

          <Col span={6} style={{ display: 'flex' , flexDirection: 'row', alignItems: 'center' , justifyContent: 'center'}}>
            <Title level={4} style={title_s_style}>ART WORKSHEET - EGG THAW</Title>
          </Col>
        
          <Col span={6} style={{ color: 'red', display: 'flex', alignItems: 'center',justifyContent:'flex-end' }}> 
            <Button type="primary" danger ghost style={{ textAlign:'center',margin:'0', background: 'rgb(138, 98, 165)' , border:'1px solid rgb(138, 98, 165)', color: '#fff'  , fontWeight: '600' , fontSize: '20px' ,  width: '360px' , height: '50px', borderRadius: '10px' , fontSize: '25px !important' }} onClick={handlePdfDownload}><span style={{ fontSize: '18px'}}>Print PDF <i class="ri-file-pdf-2-line" style={{ fontSize: '22px' , marginLeft: '10px'}}></i></span></Button>
          </Col>
          <Col span={6} style={{ color: 'red', display: 'flex', alignItems: 'center',justifyContent:'flex-end' }}> 
            <Button type="primary" danger ghost style={{ textAlign:'center',margin:'0', background: 'rgb(138, 98, 165)' , border:'1px solid rgb(138, 98, 165)', color: '#fff'  , fontWeight: '600' , fontSize: '20px' ,  width: '360px' , height: '50px', borderRadius: '10px' , fontSize: '25px !important' }} onClick={handleRefresh}><span style={{ fontSize: '18px'}}>Add New Case <i class="ri-add-circle-line" style={{ fontSize: '22px' , marginLeft: '10px'}}></i></span></Button>
          </Col>
      </Row>

      <Form name="worksheet_form" id="pdfForm" style={{ margin:'5px' , marginBottom: '100px'}} form={form} autoComplete="off">

        {/* hearder row */}
        <Row gutter={8} className='first-main-con' style={{ marginTop:'10px' }}>  
              {/* 1st col  */}
              {/* <Col span={7} className='gutter-row' > 
                <div style={innner_con_header_2}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={24} >
                          <Title level={4} style={title_s_style}>Art Worksheet - Egg Thaw</Title>
                        </Col>
                      </Row>
                </div>   
              </Col> */}
              
              {/* 2nd col  */}
              <Col span={14} className='gutter-row' > 
                <div style={innner_con_header_2}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={24} style={ col_input_spaceing_header2 }>
                              {/* <Form.Item
                                label={<span style={{ display: 'inline-block', width: '90px', textAlign: 'left', fontWeight: 'bold', fontSize: '15px' }}>Cycle Type</span>}
                                
                                name="cycle_type"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input

                                  style={inputfiled_style}
                                  value={selectedValues.cycle_type}
                                  onClick={() => showModal('cycle_type')}
                                  readOnly
                                  placeholder="Select Option"
                                />

                              </Form.Item> */}

                              <Title level={4} style={title_s_style}>Cycle Type: <span style={{ fontSize: '14px' , color:'black'}}>Egg Thawing, ICSI & Culture </span> </Title>
                        </Col>
                      </Row>
                </div>
              </Col>

              {/* 3rd col  */}
              <Col span={6} className='gutter-row'> 
                <div style={innner_con_header_2}>
                        <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                          <Col span={24} style={col_input_spaceing_header2}>
                                <Form.Item
                                  
                                  label={<span style={{ display: 'inline-block', width: '90px', textAlign: 'left', fontWeight: 'bold', fontSize: '15px' }}>Primary Dr.</span>}
                                  name="primary_md"
                                  validateTrigger="onBlur"
                                  layout="horizontal"
                                  
                                >
                                  <Input  style={inputfiled_style}/>
                                </Form.Item>
                          </Col>
                        </Row>
                </div>
              </Col>

              {/* 4th col  */}
              <Col span={4} className='gutter-row'> 
                <div style={innner_con_header_2}>
                        <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                          <Col span={24} style={col_input_spaceing_header2}>
                                <Form.Item
                                  
                                  label={<span style={{ display: 'inline-block', width: '95px', textAlign: 'left', fontWeight: 'bold', fontSize: '15px' }}>Incubator #</span>}
                                  name="incubator"
                                  validateTrigger="onBlur"
                                  layout="horizontal"
                                  
                                >
                                  <InputNumber  style={inputfiled_style}/>
                                </Form.Item>
                          </Col>
                        </Row>
                </div>
              </Col>
              
        </Row>
          
        {/* 1st row  */}
        <Row gutter={8} className='first-main-con' >  
              {/* 1st col  */}
              <Col span={4} className='gutter-row' > 
                <div style={innner_con}>
                    <Row gutter={15}>

                        <Col span={24}>
                          <Title level={5} style={{...title_s_style_p }}>Patient Details</Title>
                        </Col>
                        <Col span={24} >
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '100px', textAlign: 'left' }}>Patient Name</span>}
                              name="patient_name"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
          
                        <Col span={24} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '90px', textAlign: 'left' }}>Patient DOB :</span>}
                              name="patient_dob"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              rules={[
                                {
                                  message: 'Please select a date.',
                                },
                                {
                                  pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                  message: 'Date must be in MM-DD-YYYY format.',
                                },
                              ]}
                            >
                              <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('patient_dob')}  readOnly  />
                            </Form.Item>
                        </Col>
                        
                        <Col span={24} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '30px', textAlign: 'left' }}>ART</span>}
                              name="art"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        
                        <Col span={24} style={col_input_spaceing}>
                            <Form.Item
                              label={<span style={{ display: 'inline-block', width: '65px', textAlign: 'left' }}>Lost 4 ID</span>}
                              name="lost_4_id_patient"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        
                        
                        <Col span={12} style={col_input_spaceing}>
                            <Form.Item
                              
                              // label={<span style={{ display: 'inline-block', width: '40px', textAlign: 'left' }}>Age</span>}
                              label='Age'
                              name="age"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <InputNumber style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={12} style={col_input_spaceing}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Cycle</span>}
                              name="cycle"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                      </Row>
                </div>                     
              </Col>
              <Col span={4} className='gutter-row' > 
                <div style={innner_con}>
                    <Row gutter={15}>

                        <Col span={24}>
                          <Title level={5} style={{...title_s_style_p }}>Partner Details:</Title>
                        </Col>
                        
                        <Col span={24}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '100px', textAlign: 'left' }}>Partner Name</span>}
                              name="partner_name"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        
                        <Col span={24} style={col_input_spaceing}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '90px', textAlign: 'left' }}>Partner DOB</span>}
                              name="partner_dob"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              rules={[
                                {
                                  message: 'Please select a date.',
                                },
                                {
                                  pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                  message: 'Date must be in MM-DD-YYYY format.',
                                },
                              ]}
                            >
                              {/* <DatePicker   style={inputfiled_style}/> */}
                              <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('partner_dob')}  readOnly/>
                            </Form.Item>
                        </Col>
                        
                        <Col span={24} style={col_input_spaceing}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '40px', textAlign: 'left' }}>CMV</span>}
                              name="cmv"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        
                        <Col span={24} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '65px', textAlign: 'left' }}>Lost 4 ID</span>}
                              name="lost_4_id_partner"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        
                      </Row>
                </div>                     
              </Col>
              {/* 2nd col  */}
              <Col span={8} className='gutter-row' > 
                <div style={innner_con_3}>
                      <Row gutter={15}>
                        <Col span={10} style={{ borderRight: '1px solid rgb(84 84 84 / 30%)', height:'190px' }}>
                          <Row gutter={15}>
                              <Col span={24}>
                                <Title level={5} style={{...title_s_style, marginBottom: '30px'}}>Oocyte Source:</Title>
                              </Col>
                              <Col span={24} style={col_input_spaceing_2}>
                                <Form.Item 
                                  label={<span style={{ display: 'inline-block', width: '32px', textAlign: 'left' }}>DNR</span>}
                                  name="dnr"
                                  validateTrigger="onBlur"
                                  layout="horizontal"

                                >
                                  <Input  style={inputfiled_style}/>
                                </Form.Item>
                              </Col>
                              <Col span={24} style={col_input_spaceing_2}>
                                <Form.Item
                                  label={<span style={{ display: 'inline-block', width: '30px', textAlign: 'left' }}>Age</span>}
                                  name="age_oocyte"
                                  validateTrigger="onBlur"
                                  layout="horizontal"

                                >
                                  <InputNumber  style={inputfiled_style}/>
                                </Form.Item>
                              </Col>
                              <Col span={24} style={{marginTop: '-20px'}}>
                                <Form.Item name="oocyte_source" >
                                  <Radio.Group style={{ width: '400px' }}>
                                    <Radio value="patient">Patient</Radio>
                                    <Radio value="donor">Donor</Radio>
                                  </Radio.Group>
                                </Form.Item>
                              </Col>
                              <Col span={24} style={{ marginTop:'-10px' }}>
                                  <Form.Item name="gender" label={<span style={{ display: 'inline-block', width: '20px', textAlign: 'left' }}><i className="ri-women-line"></i></span>} >
                                    
                                  <Input
                                    style={inputfiled_style}
                                    value={selectedValues.gender}
                                    onClick={() => showModal('gender')}
                                    readOnly
                                    placeholder="Select Option"
                                  />
                                    
                                  </Form.Item>
                              </Col>
                          </Row>
                        </Col>

                        <Col span={14} style={{ height:'165px' }}>
                          <Row gutter={15}>
                            <Col span={24}>
                              <Title level={5} style={{...title_s_style }}>Sperm Source:</Title>
                            </Col>

                            <Col span={24} style={{marginTop: '-10px'}}>
                                <Form.Item name="sperm_source" >
                                  <Radio.Group style={{ width: '400px' }}>
                                    <Radio value="patient">Patient</Radio>
                                    <Radio value="fresh">Fresh</Radio>
                                    
                                  </Radio.Group>
                                </Form.Item>
                              </Col>
                            
                            <Col span={24} style={{ marginTop: '-30px'}}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '86px', textAlign: 'left'}}>Frozen Date</span>}
                                name="frozen_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                style={{ margin:'0' , marginBottom: '10px', position: 'relative' , top: '8px'}}
                                rules={[
                                {
                                  message: 'Please select a date.',
                                },
                                {
                                  pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                  message: 'Date must be in MM-DD-YYYY format.',
                                },
                              ]}
                              
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('date_sperm')}    readOnly/>
                              </Form.Item>
                            </Col>

                            <Col span={24} style={{ marginTop: '-12px'}}>
                              <Title level={5} style={title_s_style}>Donor:</Title>
                            </Col>
                            <Col span={24} style={{ marginTop: '-15px'}}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '86px', textAlign: 'left'}}>Sperm Bank</span>}
                                name="sperm_bank"
                                validateTrigger="onBlur"
                                layout="horizontal"

                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                            </Col>
                            <Col span={24} style={{ marginTop: '-30px'}}>
                              <Form.Item
                                  
                                  label={<span style={{ display: 'inline-block', width: '86px', textAlign: 'left' }}>Vial #</span>}
                                  name="sperm_visit"
                                  validateTrigger="onBlur"
                                  layout="horizontal"

                                >
                                  <Input  style={inputfiled_style}/>
                                </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                </div>  
              </Col>
              {/* 3rd col  */}
              <Col span={8} className='gutter-row' > 
                <div style={innner_con_4}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={10} >
                          <Title level={5} style={{ ...title_s_style, marginTop: '0px '}}>THAW & FERT:</Title>
                        </Col>
                        <Col span={14} style={{marginTop: '-5px'}}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '80px', textAlign: 'left' }}>Thaw Date</span>}
                              name="thaw_date"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              rules={[
                                {
                                  message: 'Please select a date.',
                                },
                                {
                                  pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                  message: 'Date must be in MM-DD-YYYY format.',
                                },
                              ]}
                            
                            >
                            <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('thaw_date')}    readOnly/>
                            </Form.Item>
                        </Col>
                      </Row>
                </div> 
                <div style={innner_con_5}>
                    <Row gutter={10}>
                        <Col span={24} style={{ marginTop: '-5px', marginBottom: '12px'}}>
                            <Title level={5} style={{ ...title_s_style, marginTop: '5px '}}>Thaw ID Check:</Title>
                        </Col>

                        <Col span={6} style={{ ...col_input_spaceing }}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Date</span>}
                              name="thaw_date_insert"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              rules={[
                                {
                                  message: 'Please select a date.',
                                },
                                {
                                  pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                  message: 'Date must be in MM-DD-YYYY format.',
                                },
                              ]}
                            >
                              <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('thaw_date_insert')}    readOnly/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Time</span>}
                              name="thaw_date_time"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              
                              <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('thaw_date_time')}    readOnly/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Emb</span>}
                              name="emb"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Obs</span>}
                              name="obs"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={24} style={{ ...col_input_spaceing_divider  }}>
                        <Divider  style={{
                          borderColor: 'rgba(84, 84, 84, 0.3)',
                          borderWidth: '1px', 
                          borderHeight: '10px',
          
                      }}  orientation="left" orientationMargin={0} ></Divider>
                        </Col>
                        
                        <Col span={8} style={{ ...col_input_spaceing}}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>ICSI</span>}
                              name="icsi"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ ...col_input_spaceing}}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '58px', textAlign: 'left' }}>Thawed</span>}
                              name="total_thawed_eggs"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ ...col_input_spaceing}}>
                          <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '58px', textAlign: 'left' }}>Survived</span>}
                              name="survived"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                  
                        
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight:'bold',  margin:'0',  padding: '0' }}># MII</span>}
                              name="mii"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight:'bold',  margin:'0',  padding: '0' }}># MI</span>}
                              name="mi"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight:'bold',  margin:'0',  padding: '0' }}>MI-MII</span>}
                              name="mi_mii"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={{ ...col_input_spaceing}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight:'bold',  margin:'0',  padding: '0' }}># 2PN</span>}
                              name="two_pn"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        
                    </Row>


                      
                </div>
              </Col>
        </Row>

        {/* 2nd row  */}
        <Row gutter={8} className='first-main-con' style={{marginTop:'10px' }}>
              {/* 1st col  */}
              <Col span={3} className='gutter-row' > 
                <div style={innner_con_3_row_2}>
                    <Row >

                        <Col span={24} style={{marginTop: '5px'}}>
                          <Form.Item name="sperm_source" >
                            <Radio.Group style={{ width: '150px' }}>
                              <Radio value="BX ALL">BX ALL</Radio>
                              <Radio value="BX up to">BX up to</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{marginTop: '-20px'}}>
                          <Form.Item
                              
                              name="bx_up_to"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={24} style={{marginTop: '-50px'}}>
                          <Title level={5} style={{ fontWeight:'400' , fontSize: '14px'}}>& Cryo remaining embroyos w/o biopsy</Title>
                        </Col>
                        <Col span={24} style={{marginTop: '0px'}}>
                          <Form.Item name="bx_yes_no"  >
                          <Input
                                    style={inputfiled_style}
                                    value={selectedValues.bx_yes_no}
                                    onClick={() => showModal('bx_yes_no')}
                                    readOnly
                                    placeholder="Select Option"
                                  />
                          </Form.Item>
                        </Col>
                      </Row>
                      
                </div>  
              </Col>
              
              {/* 2rd col  */}
              <Col span={6} className='gutter-row' > 
                <div style={innner_con_3_row_2}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px' }}>
                          <Col span={24} >
                            <Title level={5} style={{ ...title_s_style }}>PGS / PGD:</Title>
                          </Col>
                        
                          <Col span={13} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '62px', textAlign: 'left' }}>PGD Lab</span>}
                                name="pgd_lab"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>
                          <Col span={11} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '56px', textAlign: 'left' , fontWeight: 'bold'}}>Day 5 Bx</span>}
                                name="day_5_bx"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>

                          <Col span={13} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '62px', textAlign: 'left' }}>Test</span>}
                                name="pgs_test"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>
                          <Col span={11} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '56px', textAlign: 'left' , fontWeight: 'bold'}}>Day 6 Bx</span>}
                                name="day_6_bx"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>

                          <Col span={13} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '62px', textAlign: 'left' }}>Bx Emb</span>}
                                name="pgs_bx_emb"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>
                          <Col span={11} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '56px', textAlign: 'left' , fontWeight: 'bold'}}>Day 7 Bx</span>}
                                name="day_7_bx"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>

                          <Col span={13} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '62px', textAlign: 'left' }}>Obs</span>}
                                name="pgs_obs"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>
                          <Col span={11} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '56px', textAlign: 'left' , fontWeight: 'bold'}}>Total Bx</span>}
                                name="pgs_total_bx"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                          </Col>

                      </Row>
                </div> 
              </Col>

              {/* 3r  d col  */}
              <Col span={15} className='gutter-row' > 
                <div style={innner_con_3_row_2}>
                      <Row gutter={15} >

                        <Col span={7} style={{ borderRight: '1px solid rgb(84 84 84 / 30%)', height:'155px'}}>
                            <Row gutter={10} >
                                <Col span={24} >
                                  <Title level={5} style={{ ...title_s_style}}>Sperm Prep:</Title>
                                </Col>

                                <Col span={24} style={{marginTop: '-5px'}}>
                                <Form.Item name="sperm_prep" >
                                  <Radio.Group style={{ width: '250px' }}>
                                    <Radio value="Wash" >Wash</Radio>
                                    <Radio value="Gradient" >Gradient</Radio>
                                    <Radio value="Swim up" >Swim up</Radio>
                                    <Radio value="TESE prep" >TESE prep</Radio>
                                  </Radio.Group>
                                </Form.Item>
                              </Col>
                               
                                <Col span={24} style={{marginTop: '-25px'}}>
                                  <Form.Item
                                  
                                  label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>By</span>}
                                  name="sperm_prep_by"
                                  validateTrigger="onBlur"
                                  layout="horizontal"
                                >
                                  <Input  style={inputfiled_style}/>
                                </Form.Item>
                                </Col>
                                <Col span={24} style={col_input_spaceing_2}>
                                  <Form.Item
                                  
                                  label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Time</span>}
                                  name="sperm_prep_time"
                                  validateTrigger="onBlur"
                                  layout="horizontal"
                                >
                                  <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('sperm_prep_time')}    readOnly/>
                                </Form.Item>
                                </Col>
                            </Row>
                        </Col>

                        <Col span={17} style={{ position:'relative' , left:'10px', height:'155px'}}>
                          <Row gutter={20}>

                            <Col span={5} style={{ margin: '0' }}>
                              <Title level={5} style={title_xs_style}>Volume:</Title>
                              <Title level={5} style={title_xs_style}>Count:</Title>
                              <Title level={5} style={title_xs_style}>Motility:</Title>
                              <Title level={5} style={title_xs_style}>Progressive:</Title>
                              
                            </Col>

                            <Col span={6} >
                              <Row gutter={10}>
                                  <Col span={24}><Title level={5} style={{ ...title_s_style , position: 'relative', left:'-8rem', width: '242px'}}>Fresh Semen or before Freezing</Title></Col>
                                  
                                  <Col span={24} style={col_input_top_spaceing}>
                                    <Form.Item
                                      
                                      name="fs_ml"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>ml</span>}
                                      
                                      />
                                    </Form.Item>
                                </Col>
                                  <Col span={24} style={col_input_spaceing}>
                                    <Form.Item
                                      
                                      name="fs_ml_10"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>x10¹ ml</span>}
                                       
                                      />
                                    </Form.Item>
                                </Col>
                                  <Col span={24} style={col_input_spaceing}>
                                    <Form.Item
                                      
                                      name="fs_percentage"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>%</span>}
                                        
                                      />
                                    </Form.Item>
                                </Col>

                                <Col span={24} style={{marginTop: '-30px'}}>
                                  <Form.Item name="fs_progressive" >
                                    <Radio.Group style={{ width: '160px' }}>
                                      <Radio value="PR">PR</Radio>
                                      <Radio value="NP" style={{marginLeft: '-12px'}}>NP</Radio>
                                      <Radio value="IM" style={{marginLeft: '-12px'}}>IM</Radio>
                                    </Radio.Group>
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Col>

                            <Col span={6} >
                            <Row gutter={10}>
                                  <Col span={24}><Title level={5} style={{...title_s_style , textAlign: 'right' }}>After Thawing</Title></Col>
                                  <Col span={24} style={col_input_top_spaceing}>
                                    <Form.Item
                                      
                                      name="at_ml"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>ml</span>}
                                       
                                      />
                                    </Form.Item>
                                </Col>
                                <Col span={24} style={col_input_spaceing}>
                                    <Form.Item
                                      
                                      name="at_ml_10"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >

                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>x10¹ ml</span>}
                                        
                                      />
                                      
                                    </Form.Item>
                                </Col>
                                  <Col span={24} style={col_input_spaceing}>
                                    <Form.Item
                                      
                                      name="at_percentage"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                     <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>%</span>}
                                        
                                      />
                                    </Form.Item>
                                </Col>
                                
                                <Col span={24} style={{marginTop: '-30px'}}>
                                  <Form.Item name="at_progressive" >
                                    <Radio.Group style={{ width: '160px' }}>
                                      <Radio value="PR">PR</Radio>
                                      <Radio value="NP" style={{marginLeft: '-12px'}}>NP</Radio>
                                      <Radio value="IM" style={{marginLeft: '-12px'}}>IM</Radio>
                                    </Radio.Group>
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Col>

                            <Col span={6} >
                            <Row gutter={10}>
                                  <Col span={24}><Title level={5} style={{...title_s_style , textAlign: 'right' }}>Final</Title></Col>
                                  
                                  <Col span={24} style={col_input_top_spaceing}>
                                    <Form.Item
                                      
                                      name="f_ml"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>ml</span>}
                                       
                                      />
                                    </Form.Item>
                                </Col>
                                <Col span={24} style={col_input_spaceing}>
                                    <Form.Item
                                      
                                      name="f_ml_10"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left' }}>x10¹ ml</span>}
                                  
                                      />
                                    </Form.Item>
                                </Col>
                                  <Col span={24} style={col_input_spaceing}>
                                    <Form.Item
                                      
                                      name="f_percentage"
                                      validateTrigger="onBlur"
                                      layout="horizontal"
                                    >
                                      <Input
                                        addonAfter={<span style={{ display: 'inline-block', textAlign: 'left'}}>%</span>}
                                      />
                                    </Form.Item>
                                </Col>
                                
                                <Col span={24} style={{marginTop: '-30px'}}>
                                  <Form.Item name="f_progressive" >
                                    <Radio.Group style={{ width: '160px' }}>
                                      <Radio value="PR">PR</Radio>
                                      <Radio value="NP" style={{marginLeft: '-12px'}}>NP</Radio>
                                      <Radio value="IM" style={{marginLeft: '-12px'}}>IM</Radio>
                                    </Radio.Group>
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Col>
                            
                            
                          </Row>
                        </Col>

                      </Row>
                </div>  
              </Col>
        </Row>

        {/* 3rd row  */}
        <Row gutter={8} className='first-main-con' style={{ marginTop:'10px' }}>
            {/* 1st col  */}
            <Col span={9} className='gutter-row' > 
              <div style={innner_con_3_row_3}>
                    <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                      <Col span={16} >
                      <Title level={5} style={title_s_style}>Cryopreservation Consent Date:</Title>
                      </Col>
                      <Col span={8} style={{marginTop: '0px'}}>
                        <Form.Item name="cryo_status" >
                          <Radio.Group style={{ width: '400px' }}>
                            <Radio value="Accept">Accept</Radio>
                            <Radio value="Decline" style={{ marginLeft: '-10px' }}>Decline</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col span={24} style={{ marginTop: '-28px' }}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '95px', textAlign: 'left' }}>Thaw ID Check</span>}
                              name="thaw_id_check"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                      <Col span={5} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '28px', textAlign: 'left' , fontWeight: 'bold'}}>2PN</span>}
                              name="cryo_two_pn"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                      <Col span={4} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '20px', textAlign: 'left' , fontWeight: 'bold'}}>D5</span>}
                              name="cryo_d5"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                      <Col span={4} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '20px', textAlign: 'left' , fontWeight: 'bold'}}>D6</span>}
                              name="cryo_d6"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                      <Col span={5} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '20px', textAlign: 'left' , fontWeight: 'bold'}}>D7</span>}
                              name="cryo_d7"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                      <Col span={6} style={col_input_spaceing}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' , fontWeight: 'bold'}}>Total</span>}
                              name="cryo_total"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                    </Row>
              </div>   
            </Col>
            
            {/* 2nd col  */}
            <Col span={6} className='gutter-row' > 
              <div style={innner_con_3_row_3}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={6} ><Title level={5} style={title_s_style}>ET Day:</Title></Col>
                        <Col span={18} style={{marginTop: '0px'}}>
                          <Form.Item name="et_day" >
                            <Radio.Group style={{ width: '400px' }}>
                              <Radio value="D3">D3</Radio>
                              <Radio value="D5" style={{ marginLeft: '0px' }}>D5</Radio>
                              <Radio value="D6" style={{ marginLeft: '0px' }}>D6</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                       
                        <Col span={12} style={{ marginTop: '-28px' }}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '25px', textAlign: 'left' , fontWeight: 'bold'}}>#ET</span>}
                                name="et"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={12} style={{ marginTop: '-28px' }}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '50px', textAlign: 'left' , fontWeight: 'bold'}}>#ET MD</span>}
                                name="et_md"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={24} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '55px', textAlign: 'left' , fontWeight: 'bold'}}>Catheter</span>}
                                name="et_catheter"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                      </Row>
              </div>
            </Col>

            {/* 3rd col  */}
            <Col span={3} className='gutter-row'> 
              <div style={innner_con_3_row_3}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={24} >
                          <Title level={5} style={title_s_style_center}>Embryo Retaining</Title>
                        </Col>
                        <Col span={24} style={{marginTop: '0px', justifyContent: 'center', alignContent: 'center' , display: 'flex'}}>
                          <Form.Item name="emb_retaining" >
                            <Radio.Group  style={{ width: '100%' ,justifyContent: 'center', alignContent: 'center' , display: 'flex'}} >
                              <Radio value="Yes">Yes</Radio>
                              <Radio value="No">No</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                      </Row>
                      
              </div>
            </Col>

            {/* 4th col  */}
            <Col span={6} className='gutter-row'> 
              <div style={innner_con_3_row_3}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={24} >
                          <Title level={5} style={title_s_style}>Embryo Transfer ID Check:</Title>
                        </Col>
                        <Col span={12} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' , fontWeight: 'bold'}}>Date</span>}
                                name="emb_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('emb_date')}    readOnly/>
                              </Form.Item>
                        </Col>
                        <Col span={12} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' , fontWeight: 'bold'}}>Time</span>}
                                name="emb_time"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('emb_time')}    readOnly/>
                              </Form.Item>
                        </Col>
                        <Col span={12} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' , fontWeight: 'bold'}}>Emb</span>}
                                name="emb_emb"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={12} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' , fontWeight: 'bold'}}>Obs</span>}
                                name="emb_obs"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                      </Row>
              </div>
            </Col>
        </Row>

        {/* table Container  */}
        <Row gutter={8} className='first-main-con' style={{ marginTop:'10px' }}>
            <Col span={24} className='gutter-row' > 
              <div style={table_container_header}>
                <Row gutter={15}>

                  <Col span={7} style={{ padding: '5px' }}>
                    <Row>
                        <Col span={24} style={col_input_top_spaceing}>
                          <Title level={5} style={title_s_style}>INSEM / ICSI ID Check</Title>
                        </Col>
                    </Row>
                  </Col>

                  <Col span={17} style={{ padding: '5px' }}> 
                    <Row gutter={15}>
                        <Col span={6} style={col_input_top_spaceing}> 
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight: 'bold' }}>Emb</span>}
                              name="icsi_emb"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={col_input_top_spaceing}> 
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight: 'bold' }}>Obs</span>}
                              name="icsi_obs"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={col_input_top_spaceing}> 
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight: 'bold' }}>Date</span>}
                              name="icsi_date"
                              validateTrigger="onBlur"
                              layout="horizontal"
                              rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                            >
                              {/* <DatePicker  style={inputfiled_style}/> */}
                              <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('icsi_date')}    readOnly/>
                            </Form.Item>
                        </Col>
                        <Col span={6} style={col_input_top_spaceing}> 
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left', fontWeight: 'bold' }}>Time</span>}
                              name="icsi_time"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                             <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('icsi_time')}    readOnly/>
                            </Form.Item>
                        </Col>
                        <Col span={12} style={col_input_spaceing}> 
                            <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '150px', textAlign: 'left', fontWeight: 'bold' }}>Insemination Sperm #</span>}
                                name="insemination_sperm"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={12} style={col_input_spaceing}> 
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '110px', textAlign: 'left', fontWeight: 'bold' }}>Medium Volume</span>}
                              name="medium_volume"
                              validateTrigger="onBlur"
                              layout="horizontal"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                        </Col>
                    </Row>
                  </Col>

                  
                  
                </Row>
                    
              </div>
              <div style={table_container}>
                <Row>
                   <Col span={24}>
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
                   </Col>
                </Row>
                    
              </div>
            </Col>
        </Row>

        {/* 4th row  */}
        <Row gutter={8} className='first-main-con' style={{ marginTop:'10px' }}>  
            {/* 1st col  */}
            <Col span={4} className='gutter-row' > 
              <div style={innner_con_4_row_4}>
                    <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                      
                      
                      <Col span={24} style={{}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '100%', textAlign: 'left' }}>Egg frozen date:</span>}
                              name="egg_frozen_date"
                              validateTrigger="onBlur"
                              layout="vertical"
                              rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                            >
                            <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('egg_frozen_date')}    readOnly/>
                            </Form.Item>
                      </Col>
                      <Col span={24} style={{}}>
                            <Form.Item
                              
                              label={<span style={{ display: 'inline-block', width: '100%', textAlign: 'left' }}>Egg frozen by (Donor Bank): </span>}
                              name="egg_frozen_by"
                              validateTrigger="onBlur"
                              layout="vertical"
                            >
                              <Input  style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                    </Row>
              </div>   
            </Col>
            
            {/* 2nd col  */}
            <Col span={4} className='gutter-row' > 
              <div style={innner_con_4_row_4}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        {/* <Col span={6} ><Title level={5} style={title_s_style}>ET Day:</Title></Col> */}
                        
                        <Col span={24} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '90 px', textAlign: 'left' }}>Thaw Medium</span>}
                                name="thaw_medium"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={24} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '50px', textAlign: 'left' }}>Lot</span>}
                                name="lot"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={24} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '55px', textAlign: 'left' }}>Exp Date</span>}
                                name="exp_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                              >
                                <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('exp_date')}   readOnly/>
                              </Form.Item>
                        </Col>
                        <Col span={24} style={{  marginTop:'-25px', marginBottom: '50px' }}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '80px', textAlign: 'left' }}>Comment:</span>}
                                name="comment"
                                validateTrigger="onBlur"
                                layout="vertical"
                              >
                                <TextArea  style={{ ...inputfiled_style, position:'relative', top: '-25px'}}  />
                              </Form.Item>
                        </Col>
                      </Row>
              </div>
            </Col>

            {/* 3rd col  */}
            <Col span={7} className='gutter-row'> 
              <div style={innner_con_4_row_4}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={24} >
                          <Title level={5} style={title_s_style}>Ver 122921</Title>
                        </Col>
                        

                        <Col span={16} style={col_input_top_spaceing2}>
                          <Form.Item name="d1_medium_change" >
                            <Radio.Group style={{ width: '400px' }}>
                              <Radio value="D1 Medium Change">D1 Medium Change</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                        <Col span={8} style={col_input_top_spaceing2}>
                              <Form.Item
                                label={<span style={{ display: 'inline-block', width: '38px', textAlign: 'left' }}>Initial</span>}
                                name="d1_medium_change_initial"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>

                        <Col span={16} style={col_input_checkbox3_spaceing}>
                          <Form.Item name="d3_medium_change" >
                            <Radio.Group style={{ width: '400px' }}>
                              <Radio value="D3 Medium Change">D3 Medium Change</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                        <Col span={8} style={col_input_spaceing_3}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '38px', textAlign: 'left' }}>Initial</span>}
                                name="d3_medium_change_initial"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>

                        <Col span={16} style={col_input_checkbox3_spaceing}>
                          <Form.Item name="worksheet_final_checking" >
                            <Radio.Group style={{ width: '400px' }}>
                              <Radio value="Worksheet Final Checking">Worksheet Final Checking</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                        <Col span={8} style={col_input_spaceing_3}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '38px', textAlign: 'left' }}>Initial</span>}
                                name="worksheet_final_checking_initial"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>

                        <Col span={16} style={col_input_checkbox3_spaceing}>
                          <Form.Item name="scan" >
                            <Radio.Group style={{ width: '400px' }}>
                              <Radio value="Scan">Scan</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                        <Col span={8} style={col_input_spaceing_3}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '38px', textAlign: 'left' }}>Initial</span>}
                                name="scan_initial"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                      </Row>
                      
              </div>
            </Col>

            {/* 4th col  */}
            <Col span={9} className='gutter-row'> 
              <div style={innner_con_4_row_4}>
                      <Row gutter={10} style={{ marginLeft:'0', marginRight:'0' , borderRadius:'0px 0px 10px 10px'}}>
                        <Col span={24} >
                          <Title level={5} style={title_s_style}>Kevin Oum, PhD, HCLD, CC/EMB Laboratory Director</Title>
                        </Col>

                        <Col span={10} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '110px', textAlign: 'left' }}>Sperm Disc By</span>}
                                name="sperm_disc_by"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Date</span>}
                                name="sperm_disc_by_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('sperm_disc_by_date')}    readOnly/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_top_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Time</span>}
                                name="sperm_disc_by_time"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('sperm_disc_by_time')}    readOnly/>
                              </Form.Item>
                        </Col>

                        <Col span={10} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '110px', textAlign: 'left' }}>Oocyte Disc By</span>}
                                name="oocyte_disc_by"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Date</span>}
                                name="oocyte_disc_by_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('oocyte_disc_by_date')}   readOnly/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Time</span>}
                                name="oocyte_disc_by_time"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('oocyte_disc_by_time')}    readOnly/>
                              </Form.Item>
                        </Col>

                        <Col span={10} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '110px', textAlign: 'left' }}>Embryo Disc By</span>}
                                name="embryo_disc_by"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Date</span>}
                                name="embryo_disc_by_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                rules={[
                              {
                                message: 'Please select a date.',
                              },
                              {
                                pattern: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/,
                                message: 'Date must be in MM-DD-YYYY format.',
                              },
                            ]}
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                <Input  style={inputfiled_style} onClick={() => handleOpenCalendar('embryo_disc_by_date')}   readOnly/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>Time</span>}
                                name="embryo_disc_by_time"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style} onClick={() => handleOpenTimePicker('embryo_disc_by_time')}    readOnly/>
                              </Form.Item>
                        </Col>

                        <Col span={10} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '110px', textAlign: 'left' }}>Dish Prep By</span>}
                                name="dish_prep_by"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>D1</span>}
                                name="dish_prep_by_d1"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        <Col span={7} style={col_input_spaceing}>
                              <Form.Item
                                
                                label={<span style={{ display: 'inline-block', width: '35px', textAlign: 'left' }}>D3/4</span>}
                                name="dish_prep_by_d3/4"
                                validateTrigger="onBlur"
                                layout="horizontal"
                              >
                                <Input  style={inputfiled_style}/>
                              </Form.Item>
                        </Col>
                        
                        
                      </Row>
              </div>
            </Col>
        </Row>

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
                {/* popup calender */}
                <Modal
                    title={<Title level={5} style={{ color: '#8a62a5', margin: 0 }}>Select a Date</Title>}
                    centered
                    open={openCalender}
                    onOk={() => setOpenCalender(false)}
                    onCancel={() => setOpenCalender(false)}
                    width={1000}
                    footer={null}
                >
                    <Calendar  
                     
                     fullscreen={false}
                    onSelect={onCalenderSelect}  />
                </Modal>
                {/* popup time */}
                <Modal
                    title={<Title level={5} style={{ color: '#8a62a5', margin: 0 }}>Select a Time</Title>}
                    centered
                    open={openTime}
                    onOk={() => setOpenTime(false)}
                    onCancel={() => setOpenTime(false)}
                    width={500}
                    footer={null}
                >
                    <TimePicker
                      defaultValue={dayjs(selectedRowData?.time || '00:00', timeFormat)}
                      format={timeFormat}
                      onChange={onTimeSelect}
                      style={{ width: '100%' }}
                    />
                </Modal>
                {/* popup for table */}
                <Modal
                  title={<Title level={5} style={{ color: '#8a62a5', margin: 0 }}>Select {dayname} - {cellname}</Title>}
                  centered
                  open={modalOpen}
                  width={500}
                  // onOk={() => setModalOpen(false)}
                  onCancel={() => setModalOpen(false)}
                  footer={null}
                >
                  {renderModalContent()}
                </Modal>

                <Modal
                title={<Title level={5} style={{ color: '#8a62a5', margin: 0 }}>{`Select ${currentFieldtable ? currentFieldtable.charAt(0).toUpperCase() + currentFieldtable.slice(1) : ''}`}</Title>}
                
                  centered
                  open={secondModalOpen}
                  // onOk={() => setSecondModalOpen(false)}
                  onCancel={() => setSecondModalOpen(false)}
                  footer={null}
                  width={500}
                >
                  {renderSecondModalContent()}
                </Modal>

                  {/* Modal for Select options */}
                  <Modal
                    centered
                    title={<Title level={5} style={{ color: '#8a62a5', margin: 0 }}>Select {modalTitle}</Title>}
                    visible={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    footer={null}
                  >
                    <Select
                      style={{ width: '100%' }}
                      onChange={handleSelectChange}
                      value={selectedValues[currentField]}
                      allowClear
                    >
                      {fieldOptions[currentField]?.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Modal>

        </ConfigProvider>

      </Form>

      <Row gutter={24}  style={footer_style}>
          <Col span={14} style={{ color: 'red',  display: 'flex', alignItems: 'center',justifyContent:'flex-end'  }}> 
          </Col>
          <Col span={5} style={{ color: 'red',  display: 'flex', alignItems: 'right',justifyContent:'flex-end'  }}> 
            <Button type="primary" danger ghost style={{ textAlign:'center',margin:'0', border:'1px solid #FFE6F0' , color: '#EF83B1' , fontWeight: 'bold' , width: '360px' ,height: '50px' , borderRadius: '10px' , background: '#FFE6F0' }} onClick={handleClose}><span style={{ fontSize: '18px'}}>Close</span></Button>
          </Col>
          <Col span={5} style={{ color: 'red',  display: 'flex', alignItems: 'right',justifyContent:'flex-end' }}> 
            <Button type="primary" danger ghost style={{ textAlign:'center',margin:'0', background: 'rgb(138, 98, 165)' , border:'1px solid rgb(138, 98, 165)', color: '#fff'  , fontWeight: 'bold' , width: '360px' , height: '50px', borderRadius: '10px' }} onClick={handleSubmit}><span style={{ fontSize: '18px'}}>Submit</span></Button>
          </Col>
      </Row>
    </>
  );
}

export default FormCom;


  // useEffect(() => {
   
  //   if (Array.isArray(patient) && patient.length > 0 && typeof patient[0] === 'object') {
  //     const patientData = patient[0];     
  //     console.log(patientData);
      
  //     const table_existing_data = JSON.parse(patientData.daily_report || '' );
      

  //     if (Object.keys(table_existing_data).length > 0) {
  //       const updatedData = transformDataForTable (table_existing_data);
  //       setData(updatedData); // Update the table data state
  //     }
      
  //     form.setFieldsValue({
  //       patient_name: patientData.name || '',
  //       partner_name: patientData.spouse || '',
  //       patient_dob: formatDate(patientData.dob) || '',
  //       partner_dob: formatDate(patientData.spouse_dob) || '',
  //       age: calculateAge(patientData.dob) || '',
  //       cycle: patientData.cycle || '',
  //       sperm_source: patientData.sperm_source || '',
  //       sperm_bank: patientData.sperm_bank || '',
  //       total_thawed_eggs: patientData.thawed || '',
  //       survived: patientData.survived || '',
  //       mii: patientData.mii || '',
  //       mi: patientData.mi || '',
  //       cryo_two_pn: patientData.d2pn || '',
  //       pgs_total_bx: patientData.total_bx || '',
  //       comment: patientData.notes || '',
  //     });
  //   } else {
  //     console.log('Patient is not an array or is empty:', typeof(patient));
  //   }
  // }, [patient, form]);

  // const transformData = () => {
  //   const transformed = {};
  //     data.forEach((row) => {
  //         const dayKey = row.day.toLowerCase();
  //         transformed[dayKey] = [];
  //         transformed[dayKey].push(row.emb || "");
  //         transformed[dayKey].push(row.date || "");
  //         transformed[dayKey].push(row.time || "");
  //           for (let i = 4; i <= 23; i++) {  
  //             transformed[dayKey].push(row[`day${i - 3}`] || "");
  //           }
  //     });
  //     return transformed;
  // };

  // const transformDataForTable  = (existingData) => {
  //   const transformed = data.map((item) => {
      
  //       const dayKey = item.day.toLowerCase();
        
  //       const dayData = existingData[dayKey]; 

  //       if (Array.isArray(dayData)) {
  //           return {
  //               ...item,
  //               emb: dayData[0] || '',
  //               date: dayData[1] || '',
  //               time: dayData[2] || '',
  //               ...Array.from({ length: 20 }, (_, i) => ({
  //                   [`day${i + 1}`]: dayData[i + 3] || '',
  //               })).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
  //           };
  //       } else {
  //           return item;
  //       }
  //   });
  //   return transformed;
  // };