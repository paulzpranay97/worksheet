import React, { useState, useEffect } from "react";
// import html2canvas from 'html2canvas';
import { Row, Col, Button, Flex } from "antd";
import { Typography } from "antd";
import {
  Divider,
  ConfigProvider,
  Space,
  TimePicker,
  Calendar,
  Modal,
  Table,
  Alert,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Checkbox,
  Radio,
  message,
} from "antd";

import "remixicon/fonts/remixicon.css";
import logo from "../images/logo.webp";
import dayjs from "dayjs";
import axios from "axios";

// import type { CalendarProps } from "antd";
// import type { Dayjs } from "dayjs";



const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

// css
const innner_con = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  height: "170px",
};

const innner_con_new_2 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  height: "230px",
};

const innner_con_new_3 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  height: "155px",
};

const headingbackgroundColor ={
  background: 'rgb(138 98 165 / 14%)',
  width: '100%',
  padding:'5px 10px',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  borderRadius: '10px 10px 0px 0px'

}

const conBodystyle ={
  padding:'0px 10px',
}

const innner_con_2 = {
  background: "#FCF8FF",
  padding: "25px 0px 0px 0px",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "0px 0px 10px 10px",
  padding: "0px 15px 10px 15px",
  height: "30px",
};

const innner_con_3 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  padding: "0px 10px 0px 15px",
  height: "190px",
};

const innner_con_3_row_2 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  padding: "10px 10px 20px 10px",
  height: "200px",
  margin: "0",
};

const innner_con_4 = {
  background: "#FCF8FF",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 0px 0px",
  padding: "10px 15px 0px 15px",
  height: "30px",
};

const innner_con_5 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "0px 0px 10px 10px",
  padding: "5px 15px 20px 15px",
  height: "140px",
};

const innner_con_3_row_3 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  padding: "0px 10px 0px 10px",
  height: "145px",
};

const innner_con_4_row_4 = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 10px 10px",
  padding: "10px 10px 20px 10px",
  height: "155px",
};

const table_container = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "0px 0px 10px 10px",
  padding: "0px 0px 0px 0px",
};

const table_container_header = {
  background: "#ffff",
  boxShadow: "0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A",
  borderRadius: "10px 10px 0px 0px",
  padding: "10px 15px 10px 15px",
  height: "50px",
};

const title_s_style = {
  width: "100%",
  color: "#8A62A5",
  margin: "-5px 0px 10px 0px",
};

const title_s_style_navbar = {
  width: "100%",
  color: "#8A62A5",
  margin: "5px 0px 10px 15px",
  fontSize: "25px",
  fontFamily: "Montserrat, sans-serif",
};

const title_s_style_p = {
  width: "100%",
  color: "#8A62A5",
  margin: "0px 0px 0px 0px",

  
};

const title_s_style_center = {
  width: "100%",
  color: "#8A62A5",
  margin: "5px 0px 10px 0px",
  // textAlign: "center",
  lineHeight: "1.4rem",
};

const title_xs_style = {
  width: "100%",
  color: "#545454",
  fontSize: "14px",
  fontWeight: "bold",
  position: "relative",
  left: "0px",
 
};
const title_xs_style_spaceing = {
  
  marginTop: '15px',
};

const inputfiled_style = {
  width: "100%",
  border: "none",
  background: "transparent",
  borderBottom: "1px solid #CACACA",
  borderRadius: "0px",
  outline: "none",
  boxShadow: "none",
  position: "relative",
  top: "-4px",
  padding: '0',
  fontWeight: '700',
  fontSize: '12.5px',
  textAlign: 'center',
};

const inputfiled_style_text_box = {
  width: "100%",
  border: "none",
  background: "transparent",
  border: "1px solid #CACACA",
  borderRadius: "8px",
  outline: "none",
  boxShadow: "none",
  position: "relative",
  top: "0px",
  padding: '0',
  fontWeight: '700',
  fontSize: '13px',
  textAlign: 'left',
};

const inputfiled_style_table_modal = {
  width: "100%",
  border: "none",
  background: "transparent",
  border:'none',
  borderRadius: "0px",
  outline: "none",
  boxShadow: "none",
  position: "relative",
  top: "0px",
  padding: '0',
  fontWeight: '700',
  fontSize: '16px',
  textAlign: 'center',
  

};

const col_input_spaceing = { marginTop: "-24px" };

const col_input_spaceing_divider = {
  marginTop: "-40px",
  marginBottom: "8px",
  padding: "0",
};

const col_input_top_spaceing = { marginTop: "-8px" };

const col_input_top_spaceing2 = { marginTop: "-3px" };

const col_input_checkbox_spaceing = { marginTop: "1px" };

const col_input_checkbox2_spaceing = { marginTop: "-25px" };

const col_input_checkbox3_spaceing = { marginTop: "-25px" };

const col_input_spaceing_2 = { marginTop: "-30px" };

const col_input_spaceing_3 = { marginTop: "-25px" };

const innner_con_header_2 = { padding: "0px 15px 0px 15px", height: "50px" };

const col_input_spaceing_header2 = { marginTop: "0px" };

const navbar_style = {
  background: "#FFFFFF",
  height: "80px",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
  width: "100%",
  margin: "0",
  padding: "0",
  marginBottom: "20px",
  borderRadius: "0px 0px 10px 10px",
  position: "sticky",
  top: "0",
  left: "0",
  right: "0",
  zIndex: 1000,
};
const footer_style = {
  background: "#FFFFFF",
  height: "80px",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.15) 3px 3px 3px 3px",
  width: "100%",
  margin: "0",
  padding: "0",
  borderRadius: "10px 10px 0px 0px",
  position: "sticky",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: 1000,
};

// function FormCom({ patient, fetchPatientData }) {
function FormCom({ patient: patientFromProps }) {
  
  const [patient, setPatient] = useState([]);
  const base_url = "https://marketing.ps-baby.com/ajax";

  
  // All states
  const [currentEditingDay, setCurrentEditingDay] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentField, setCurrentField] = useState(null);
  const [openCalender, setOpenCalender] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [rowModal, setRowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState({ oocyte_source: 'Donor', sperm_source: 'Donor', });
  const [modalTitle, setModalTitle] = useState("Select");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [data, setData] = useState([
    {
      key: "1",
      emb: "",
      date: "",
      time: "",
      day: "D0",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "2",
      emb: "",
      date: "",
      time: "",
      day: "D1",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "3",
      emb: "",
      date: "",
      time: "",
      day: "D2",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "4",
      emb: "",
      date: "",
      time: "",
      day: "D3",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "5",
      emb: "",
      date: "",
      time: "",
      day: "D3/",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "6",
      emb: "",
      date: "",
      time: "",
      day: "AH",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "7",
      emb: "",
      date: "",
      time: "",
      day: "D4",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "8",
      emb: "",
      date: "",
      time: "",
      day: "D4/",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "9",
      emb: "",
      date: "",
      time: "",
      day: "D5",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "10",
      emb: "",
      date: "",
      time: "",
      day: "D5/",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "11",
      emb: "",
      date: "",
      time: "",
      day: "D6",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "12",
      emb: "",
      date: "",
      time: "",
      day: "D6/",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "13",
      emb: "",
      date: "",
      time: "",
      day: "D7",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "14",
      emb: "",
      date: "",
      time: "",
      day: "D7/",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
    {
      key: "15",
      emb: "",
      date: "",
      time: "",
      day: "Final Disposition",
      ...Array.from({ length: 20 }, (_, i) => ({
        [`day${i + 1}`]: "",
      })),
    },
  ]);
  const [cellname, setCellname] = useState("");
  const [dayname, setDayname] = useState("");
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [currentFieldtable, setCurrentFieldtable] = useState("");
  const [form] = Form.useForm();
  const timeFormat = "HH:mm";
  const [showAll, setShowAll] = useState(false);


  // for bx section show hide 
  const [selectedBxOption, setSelectedBxOption] = useState(null);

  const handleBxChange = (e) => {
    setSelectedBxOption(e.target.value); 
  };

  const fieldOptions = {
    cycle_type: [
      { value: 'Egg Thawing', label: 'Egg Thawing', title: 'Cycle Type' },
      { value: 'ICSI', label: 'ICSI', title: 'Cycle Type' },
      { value: 'Culture', label: 'Culture', title: 'Cycle Type' },
      { value: 'ICSI & Culture', label: 'ICSI & Culture', title: 'Cycle Type' },
      { value: 'Egg Thawing, ICSI & Culture', label: 'Egg Thawing, ICSI & Culture', title: 'Cycle Type' },
    ],
    gender: [
      { value: 'Male', label: 'Male', title: 'Gender' },
      { value: 'Female', label: 'Female', title: 'Gender' },
      { value: 'Others', label: 'Others', title: 'Gender' },
      { value: 'N/A', label: 'N/A', title: 'Gender' },
    ],
    bx_yes_no: [
      { value: 'Yes', label: 'Yes', title: 'Cryo remaining embryos w/o biopsy' },
      { value: 'No', label: 'No', title: 'Cryo remaining embryos w/o biopsy' },
    ],
    oocyte_source: [
      { value: 'Donor', label: 'Donor', title: 'Oocyte Source' },
      { value: 'Patient', label: 'Patient', title: 'Oocyte Source' },
    ],
    serology: [
      { value: 'NA', label: 'NA', title: 'Serology' },
      { value: 'Biohazard', label: 'Biohazard', title: 'Serology' },
    ],
    serology_positive: [
      { value: 'HBsAg', label: 'HBsAg', title: 'Serology Positive' },
      { value: 'HBcAb', label: 'HBcAb', title: 'Serology Positive' },
      { value: 'Anti HCV', label: 'Anti HCV', title: 'Serology Positive' },
      { value: 'CMV Ab', label: 'CMV Ab', title: 'Serology Positive' },
      { value: 'T.Pallidum', label: 'T.Pallidum', title: 'Serology Positive' },
      { value: 'Chlamydia', label: 'Chlamydia', title: 'Serology Positive' },
      { value: 'Gonorrhea', label: 'Gonorrhea', title: 'Serology Positive' },
      { value: 'HIV', label: 'HIV', title: 'Serology Positive' },
      { value: 'Other', label: 'Other', title: 'Serology Positive' },
    ],
    sperm_source: [
      { value: 'Donor', label: 'Donor', title: 'Sperm Source' },
      { value: 'Patient', label: 'Patient', title: 'Sperm Source' },
    ],
    sperm_type: [
      { value: 'Fresh', label: 'Fresh', title: 'Sperm Type' },
      { value: 'Frozen', label: 'Frozen', title: 'Sperm Type' },
    ],
    sperm_serology: [
      { value: 'NA', label: 'NA', title: 'Serology' },
      { value: 'Biohazard', label: 'Biohazard', title: 'Serology' },
    ],
    sperm_serology_positive: [
      { value: 'HBsAg', label: 'HBsAg', title: 'Serology Positive' },
      { value: 'HBcAb', label: 'HBcAb', title: 'Serology Positive' },
      { value: 'Anti HCV', label: 'Anti HCV', title: 'Serology Positive' },
      { value: 'CMV Ab', label: 'CMV Ab', title: 'Serology Positive' },
      { value: 'T.Pallidum', label: 'T.Pallidum', title: 'Serology Positive' },
      { value: 'Chlamydia', label: 'Chlamydia', title: 'Serology Positive' },
      { value: 'Gonorrhea', label: 'Gonorrhea', title: 'Serology Positive' },
      { value: 'HIV', label: 'HIV', title: 'Serology Positive' },
      { value: 'Other', label: 'Other', title: 'Serology Positive' },
    ],
    pgd_lab: [
      { value: 'Progenesis', label: 'Progenesis', title: 'PGS Lab' },
      { value: 'Cooper Surgical', label: 'Cooper Surgical', title: 'PGS Lab' },
      { value: 'Natera', label: 'Natera', title: 'PGS Lab' },
      { value: 'Igenomix', label: 'Igenomix', title: 'PGS Lab' },
      { value: 'Other', label: 'Other', title: 'PGS Lab' },
    ],
    pgs_test: [
      { value: 'PGT-A', label: 'PGT-A', title: 'PGS Test' },
      { value: 'PGT-M', label: 'PGT-M', title: 'PGS Test' },
      { value: 'PGT-SR', label: 'PGT-SR', title: 'PGS Test' },
    ],
    sperm_prep: [
      { value: 'Wash', label: 'Wash', title: 'Sperm Prep' },
      { value: 'Gradient', label: 'Gradient', title: 'Sperm Prep' },
      { value: 'Swim up', label: 'Swim up', title: 'Sperm Prep' },
      { value: 'TESE prep', label: 'TESE prep', title: 'Sperm Prep' },
    ],
    cell_stage: [
      { value: '2PN', label: '2PN', title: 'Cell Stage' },
      { value: 'D3', label: 'D3', title: 'Cell Stage' },
    ],
    
  };

  // useEffect(() => {
  //   const fetchPrimaryDoctors = async () => {
  //     try {
  //       const response = await fetch(`https://marketing.ps-baby.com/ajax?action=inv_get_all_staff&category=md`);
  //       const data = await response.json();

  //       if (data.type === 'success') {
  //         const formattedPrimaryDoctors = data.data.map((staff) => ({
  //           value: staff.staff_name,
  //           label: staff.staff_name,
  //           title: 'Primary Dr.',
  //         }));
  //         setFieldOptions((prevOptions) => ({
  //           ...prevOptions,
  //           primary_md: formattedPrimaryDoctors, 
  //         }));
  //       } else {
  //         console.error(data.msg);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching primary doctors: ', error);
  //     }
  //   };
  //   fetchPrimaryDoctors();
  // }, []);

  useEffect(() => {
    if (patientFromProps && Array.isArray(patientFromProps)) {
      setPatient(patientFromProps); 
    }
  }, [patientFromProps]);

  useEffect(() => {
    if ( Array.isArray(patient) && patient.length > 0 && typeof patient[0] === "object" ) {
      const patientData = patient[0];
      const table_existing_data = safeJsonParse(patientData.daily_report);
      const semen_analysis_data = safeJsonParse(patientData.semen_analysis);

      if (Object.keys(table_existing_data).length > 0) {
        const updatedData = transformDataForTable(table_existing_data);
        setData(updatedData);
      }

      const age = calculateAge(patientData.dob);
      let egg_frozen_by_field_value = '';
      const donor_id_exist_UG_OVO = patientData.donor_id;

      if (donor_id_exist_UG_OVO.includes("UG")) {
        egg_frozen_by_field_value = `${patientData.retrieval_center}-UG`;
      } 
      if (donor_id_exist_UG_OVO.includes("OVO")) {
        egg_frozen_by_field_value = `${patientData.retrieval_center}-OVO`;
      } 
      if (!donor_id_exist_UG_OVO.includes("UG") && !donor_id_exist_UG_OVO.includes("OVO")) {
        egg_frozen_by_field_value = patientData.retrieval_center;
      }

      let emb_val_from_table = (table_existing_data.d1 && table_existing_data.d1[0]) || [];
      let date_d1_val_from_table = (table_existing_data.d1 && table_existing_data.d1[1]) || [];
      let time_d1_val_from_table = (table_existing_data.d1 && table_existing_data.d1[2]) || [];
      let date_d7_val_from_table = (table_existing_data.d7 && table_existing_data.d7[1]) || [];
      let time_d7_val_from_table = (table_existing_data.d7 && table_existing_data.d7[2]) || [];
      
      let day_5_bx_array = table_existing_data["d5"] || [];
      let hb_count_d5 = day_5_bx_array.filter(item => item === "HB").length;
      let hhb_count_d5 = day_5_bx_array.filter(item => item === "HHB").length;
      let d5_total_bx_count = hb_count_d5 + hhb_count_d5;
      
      let day_6_bx_array = table_existing_data["d6"] || [];
      let hb_count_d6 = day_6_bx_array.filter(item => item === "HB").length;
      let hhb_count_d6 = day_6_bx_array.filter(item => item === "HHB").length;
      let d6_total_bx_count = hb_count_d6 + hhb_count_d6;
      
      let day_7_bx_array = table_existing_data["d7"] || [];
      let hb_count_d7 = day_7_bx_array.filter(item => item === "HB").length;
      let hhb_count_d7 = day_7_bx_array.filter(item => item === "HHB").length;
      let d7_total_bx_count = hb_count_d7 + hhb_count_d7;
      
      let total_bx_pgs = d5_total_bx_count + d6_total_bx_count + d7_total_bx_count;

      
      form.setFieldsValue({
        patient_name: patientData.name || "",
        partner_name: patientData.spouse || "",
        patient_dob: formatDate(patientData.dob) || "",
        partner_dob: formatDate(patientData.spouse_dob) || "",
        age: age || 0,
        art: patientData.art || "",
        dnr: patientData.donor_id || "",
        age_oocyte: patientData.age || "",
        sperm_source: patientData.sperm_source || "Donor",
        sperm_bank: patientData.sperm_bank || "",
        icsi: patientData.icsi || "",
        total_thawed_eggs: patientData.thawed || "",
        survived: patientData.survived || "",
        mii: patientData.mii || "",
        mi: patientData.mi || "",
        one_pn: patientData.d1pn || "",
        two_pn: patientData.d2pn || "",
        cryo_two_pn: patientData.d2pn || "",
        cryo_d5: patientData.d5 || "",
        cryo_d6: patientData.d6 || "",
        cryo_d7: patientData.d7 || "",
        cryo_d3: patientData.d3 || "",
        cryo_total: patientData.total_emb_cryo || "",
        pgs_total_bx: patientData.total_bx || "",
        comment: patientData.notes || "",
        thaw_date: patientData.thaw_date || "",
        fs_ml: semen_analysis_data?.fresh_semen?.volume || "",
        fs_ml_10: semen_analysis_data?.fresh_semen?.count || "",
        fs_percentage: semen_analysis_data?.fresh_semen?.motility || "",
        fs_progressive: semen_analysis_data?.fresh_semen?.progressive || "",
        at_ml: semen_analysis_data?.after_thawing?.volume || "",
        at_ml_10: semen_analysis_data?.after_thawing?.count || "",
        at_percentage: semen_analysis_data?.after_thawing?.motility || "",
        at_progressive: semen_analysis_data?.after_thawing?.progressive || "",
        f_ml: semen_analysis_data?.final?.volume || "",
        f_ml_10: semen_analysis_data?.final?.count || "",
        f_percentage: semen_analysis_data?.final?.motility || "",
        f_progressive: semen_analysis_data?.final?.progressive || "",
        egg_frozen_date: patientData.thaw_date || "",
        egg_frozen_by: egg_frozen_by_field_value || "",
        thaw_date_insert: patientData.thaw_date || "",
        sperm_prep_by: emb_val_from_table || "",
        d1_medium_change_initial: emb_val_from_table || "",
        d3_medium_change_initial: emb_val_from_table || "",
        worksheet_final_checking_initial: emb_val_from_table || "",
        sperm_disc_by: emb_val_from_table || "",
        oocyte_disc_by: emb_val_from_table || "",
        embryo_disc_by: emb_val_from_table || "",
        dish_prep_by: emb_val_from_table || "",
        dish_prep_by_d1: emb_val_from_table || "",
        sperm_disc_by_date: date_d1_val_from_table || "",
        sperm_disc_by_date: date_d1_val_from_table || "",
        sperm_disc_by_time: time_d1_val_from_table || "",
        oocyte_disc_by_date: date_d1_val_from_table || "",
        oocyte_disc_by_time: time_d1_val_from_table || "",
        embryo_disc_by_date: date_d7_val_from_table || "",
        embryo_disc_by_time: time_d7_val_from_table || "", 
        day_5_bx: d5_total_bx_count || "0", 
        day_6_bx: d6_total_bx_count || "0", 
        day_7_bx: d7_total_bx_count || "0", 
        pgs_total_bx: total_bx_pgs || "0", 
      });

    } else {
      
    }
  }, [patient, form]);

  const fetchPatientData = async (patientId) => {
    const base_url = 'https://marketing.ps-baby.com/ajax';
    try {
      const response = await axios.get(base_url, {
        params: {
          action: 'egg_thaw_record_by_sales',
          id: patientId,
        },
      });
  
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };
  
  const update_table_data_by_day = async (day, data) => {
    try {
      let days = day;
      let datas = data;
      const patientData = patient[0];
      const response = await axios.get(base_url, {
        params: {
          action: "update_daily_report_by_day",
          id_sales: patientData.id,
          days: JSON.stringify(days),
          data: JSON.stringify(datas),
        },
      });
      if(response.data.type === "success"){
        const table_new_data =await fetchPatientData(patientData.id);
        setPatient(table_new_data); 
        const updatedPatientData = table_new_data[0];
        const table_existing_new = safeJsonParse(updatedPatientData.daily_report);
        if (Object.keys(table_existing_new).length > 0) {
            const updatedData = transformDataForTable(table_existing_new);
            setData(updatedData); 
        }
        
      }
    } catch (error) {
      console.error("Error sending daily report:", error);
    }
  };

  // Function to handle sending daily report data to the API using FormData
  const sendDailyReport = async (transformedData) => {
    try {
      const patientData = patient[0];
      let formData = new FormData();
      formData.append("id_inv", patientData.id);
      formData.append("daily_report", JSON.stringify(transformedData));
      // const response = await axios.post('http://localhost/marketing/ajax?action=inv_update_daily_report', formData, {
      const response = await axios.post(
        "https://marketing.ps-baby.com/ajax?action=inv_update_daily_report",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error sending daily report:", error);
    }
  };
  
  // Function to handle sending egg thaw details to the API
  const sendEggThawDetails = async (values) => {
    try {
      const patientData = patient[0];
      const semenAnalysisData = {
        fresh_semen: {
          volume: values.fs_ml || 'NA',
          count: values.fs_ml_10 || 'NA',
          motility: values.fs_percentage || 'NA',
          progressive: values.fs_progressive || 'NA',
        },
        after_thawing: {
          volume: values.at_ml || 'NA',
          count: values.at_ml_10 || 'NA',
          motility: values.at_percentage || 'NA',
          progressive: values.at_progressive || 'NA',
        },
        final: {
          volume: values.f_ml || 'NA',
          count: values.f_ml_10 || 'NA',
          motility: values.f_percentage || 'NA',
          progressive: values.f_progressive || 'NA',
        },
      };

      const semenAnalysisDataString = JSON.stringify(semenAnalysisData);

      const response = await axios.get(base_url, {
        params: {
          action: "inv_save_or_update_egg_thaw_details",
          id_inv: patientData.id,
          art: values.art,
          procedure_date: "",
          receipt_date: "",
          sperm_source: values.sperm_source,
          sperm_details: "",
          sperm_bank: values.sperm_bank,
          fresh_or_frozen_sperm: "",
          sperm_donor_id: "",
          sperm_receipt_date: "",
          tms: "",
          thawed: values.total_thawed_eggs,
          survived: values.survived,
          mii: values.mii,
          mi: values.mi,
          assigned: "",
          icsi: values.icsi,
          d1pn: values.one_pn,
          d2pn: values.two_pn,
          d3pn_more: "",
          fert: "",
          hatched: "",
          no_of_embryos_cleaved: "",
          total_bl: "",
          initial_cryo_date: "",
          d5: values.cryo_d5,
          d6: values.cryo_d6,
          d7: values.cryo_d7,
          d3: values.cryo_d3, 
          total_emb_cryo: values.cryo_total,
          pgs: "",
          euploid: "",
          aneuploid: "",
          no_result: "",
          mosaic: "",
          untested: "",
          total_bx: values.pgs_total_bx,
          thaw_emb: "",
          icsi_emb: "",
          biopsy_emb: "",
          sperm_proc: "",
          fert_check: "",
          assisted_hatching: "",
          cryo_emb: "",
          cane_color: "",
          straws: "",
          tank: "",
          canister: "",
          in_storage: "",
          storage_clinic: "",
          note: values.comment,
          semen_analysis: semenAnalysisDataString,
          thaw_date: values.thaw_date,
        },
      });
    } catch (error) {
      console.error("Error sending egg thaw details:", error);
    }
  };
  
  // Combined handleSubmit function to call both APIs
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const transformedData = transformData();
      await sendEggThawDetails(values);
      await sendDailyReport(transformedData);

      const updatedPatientData = await fetchPatientData(patient[0].id);
      
      if (updatedPatientData) {
        setPatient(updatedPatientData); 
        message.success("Form submitted successfully!");
      } else {
        message.error("Failed to retrieve updated patient data.");
      }
    } catch (error) {
      message.success("Form submitted successfully!");
      console.error("Error during form submission:", error);
    }
  };


  const onDateChangeFields   = (name, dateString) => {
      form.setFieldsValue({ [name]: dateString });
  };

  // All Functions
  // Show modal and set current field
  const showModal = (field) => {
    setCurrentField(field);
    setIsModalVisible(true);
    const title = fieldOptions[field]?.[0]?.title || "Select";
    setModalTitle(title);
  };

  const handleSelectChange = (value) => {
    
    if (value === "Donor" && currentField == "oocyte_source") {
      let  serologyValue = "N/A";
      setSelectedValues((prevValues) => ({
        ...prevValues,
        serology: serologyValue, 
      }));
      form.setFieldsValue({
        serology: serologyValue,
      });
      setIsModalVisible(false);
    } else if (value === "Patient"  && currentField == "oocyte_source") {
      let serologyValue = "Biohazard";
      setSelectedValues((prevValues) => ({
        ...prevValues,
        serology: serologyValue, 
      }));
      form.setFieldsValue({
        serology: serologyValue,
      });
      setIsModalVisible(false);
    } else if (value === "Donor" && currentField == "sperm_source") {
      let  serologyValue = "N/A";
      setSelectedValues((prevValues) => ({
        ...prevValues,
        sperm_serology: serologyValue, 
      }));
      form.setFieldsValue({
        sperm_serology: serologyValue,
      });
      setIsModalVisible(false);
    } else if (value === "Patient"  && currentField == "sperm_source") {
      let serologyValue = "Biohazard";
      setSelectedValues((prevValues) => ({
        ...prevValues,
        sperm_serology: serologyValue, 
      }));
      form.setFieldsValue({
        sperm_serology: serologyValue,
      });
      setIsModalVisible(false);
    } 
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [currentField]: value, 
    }));

    form.setFieldsValue({
      [currentField]: value,
    });
    setIsModalVisible(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const calculateAge = (dob) => {
    if (!dob) return null;
    const [month, day, year] = dob.split("/");
    const birthDate = new Date(`${year}-${month}-${day}`);
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const onCalenderSelect = (value) => {
    if (value) {
      const formattedDate = value.format("MM/DD/YYYY");
      if (currentField) {
        
      form.setFieldsValue({ [currentField]: formattedDate });
      }
      
      if (currentField === "thaw_date") {
        form.setFieldsValue({ egg_frozen_date: value.format("MM-DD-YYYY") });
      }
      setOpenCalender(false);
    }
  };


  
// const onCalenderSelect = (value) => {
//   if (value) {
//     const formattedDate = value.format("MM/DD/YYYY");

//     // Ensure that only day selection triggers the value set
//     const today = new Date();
//     const selectedDate = value.toDate();
    
//     // Only proceed if the selected day is different from the current day
//     if (today.getDate() !== selectedDate.getDate()) {
//       if (currentField) {
//         form.setFieldsValue({ [currentField]: formattedDate });
//       }

//       // if (currentField === "thaw_date") {
//       //   form.setFieldsValue({ egg_frozen_date: value.format("MM-DD-YYYY") });
//       // }

//       setOpenCalender(false); 
//     }
//   }
// };

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
  const handleChange = (value) => {
    if (selectedRowData) {
      const newData = data.map((row) => {
        if (currentFieldtable === 'emb') {
          return {
            ...row,
            emb: value, 
          };
        }
        if (row.key === selectedRowData.key) {
          return {
            ...row,
            [currentFieldtable]: value,
          };
        }
        return row;
      });
      if(value === 'AL'){
        let arrayData = newData.map((row) => [
          row.emb || value,
          row.date || "", 
          row.time || "", 
          row.day1 || "", 
          row.day2 || "", 
          row.day3 || "", 
          row.day4 || "", 
          row.day5 || "", 
          row.day6 || "", 
          row.day7 || "", 
          row.day8 || "", 
          row.day9 || "", 
          row.day10 || "",
          row.day11 || "",
          row.day12 || "",
          row.day13 || "",
          row.day14 || "",
          row.day15 || "",
          row.day16 || "",
          row.day17 || "",
          row.day18 || "",
          row.day19 || "",
          row.day20 || "",
        ]);
        let days = ["d0", "d1", "d2", "d3", "d3/", "ah", "d4", "d4/", "d5", "d5/", "d6", "d6/", "d7", "d7/", "final disposition"];
        if (Array.isArray(days) && Array.isArray(arrayData) && days.length === arrayData.length) {
          update_table_data_by_day(days, arrayData);
          setData(newData);
          setSecondModalOpen(false);
          setModalOpen(false);
        } else {
          console.error('Days and data are not valid arrays or are of different lengths');
        }
      }else{
         
        newData.forEach((row) => {
          if (row.day === "D3/") {
            row.date = newData.find((r) => r.day === "D3").date || row.date;
            row.time = newData.find((r) => r.day === "D3").time || row.time;
          }
          if (row.day === "D4/") {
            row.date = newData.find((r) => r.day === "D4").date || row.date;
            row.time = newData.find((r) => r.day === "D4").time || row.time;
          }
          if (row.day === "D5/") {
            row.date = newData.find((r) => r.day === "D5").date || row.date;
            row.time = newData.find((r) => r.day === "D5").time || row.time;
          }
          if (row.day === "D6/") {
            row.date = newData.find((r) => r.day === "D6").date || row.date;
            row.time = newData.find((r) => r.day === "D6").time || row.time;
          }
          if (row.day === "D7/") {
            row.date = newData.find((r) => r.day === "D7").date || row.date;
            row.time = newData.find((r) => r.day === "D7").time || row.time;
          }
        });

        let arrayData = newData.map((row) => [
          row.emb || value,
          row.date || "", 
          row.time || "", 
          row.day1 || "", 
          row.day2 || "", 
          row.day3 || "", 
          row.day4 || "", 
          row.day5 || "", 
          row.day6 || "", 
          row.day7 || "", 
          row.day8 || "", 
          row.day9 || "", 
          row.day10 || "",
          row.day11 || "",
          row.day12 || "",
          row.day13 || "",
          row.day14 || "",
          row.day15 || "",
          row.day16 || "",
          row.day17 || "",
          row.day18 || "",
          row.day19 || "",
          row.day20 || "",
        ]);
        let days = ["d0", "d1", "d2", "d3", "d3/", "ah", "d4", "d4/", "d5", "d5/", "d6", "d6/", "d7", "d7/", "final disposition"];
  
        if (Array.isArray(days) && Array.isArray(arrayData) && days.length === arrayData.length) {
          update_table_data_by_day(days, arrayData);
          setData(newData);
          setSecondModalOpen(false);
          setModalOpen(false);
        } else {
          console.error('Days and data are not valid arrays or are of different lengths');
        }
      }
    }
  };

  const handleTimeChange = (time, timeString) => {
    handleChange(timeString);
  };

  const handleDateSelect = (date) => {
    handleChange(date.format("MM/DD/YYYY"));
  };

  const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
  });
  const currentDate = new Date();
  const currentformattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${currentDate.getFullYear()}`;

  const handleSubmitTableModal = (day) => {

    if(day == 'd0'){
      const dayArrayd0 = new Array(23).fill(''); 
      dayArrayd0[0] = form.getFieldValue(`emb_d0`) || '';
      dayArrayd0[1] = form.getFieldValue(`date_d0`) || '';
      dayArrayd0[2] =  currentTime;
      let icsi = Number(form.getFieldValue('thaw_d0_icsi')) || 0;
      let deg = Number(form.getFieldValue('thaw_d0_deg')) || 0;

      for (let i = 0; i < icsi; i++) {
        dayArrayd0[3 + i] = 'ICSI';
      }

      for (let i = 0; i < deg; i++) {
        dayArrayd0[3 + icsi + i] = 'DEG';
      }
      var days =["d0"];

      var data =[dayArrayd0];
      
      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
     
    }else if(day == 'd1'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d1`) || '';
      dayArray[1] = form.getFieldValue(`date_d1`) || '';
      dayArray[2] = currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
        dayArray[3 + i] = form.getFieldValue(`thaw_d1_${i + 1}`) || '';
      }
      var days =["d1"];
      var data =[dayArray];
      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }else if(day == 'd2'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d2`) || '';
      dayArray[1] = form.getFieldValue(`date_d2`) || '';
      dayArray[2] =  currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_d2_${i + 1}`) || '';
      }
      var days =["d2"];
      var data =[dayArray];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }

    }else if(day == 'd3'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d3`) || '';
      dayArray[1] = form.getFieldValue(`date_d3`) || '';
      dayArray[2] =  currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_d3_${i + 1}`) || '';
      }
      // Array for d3/----------
      const dayArray2 = new Array(23).fill(''); 
      dayArray2[0] = form.getFieldValue(`emb_d3`) || '';
      dayArray2[1] = form.getFieldValue(`date_d3`) || '';
      dayArray2[2] = currentTime;
      
      for (let i = 0; i < thawedEggs; i++) {
            dayArray2[3 + i] = form.getFieldValue(`thaw_d3/_${i + 1}`) || '';
      }
      var days =["d3", "d3/"];
      var data =[dayArray, dayArray2];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }else if(day == 'd4'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d4`) || '';
      dayArray[1] = form.getFieldValue(`date_d4`) || '';
      dayArray[2] =  currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_d4_${i + 1}`) || '';
      }
      // Array for d4/----------
      const dayArray2 = new Array(23).fill(''); 
      dayArray2[0] = form.getFieldValue(`emb_d4`) || '';
      dayArray2[1] = form.getFieldValue(`date_d4`) || '';
      dayArray2[2] = currentTime;
      // const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray2[3 + i] = form.getFieldValue(`thaw_d4/_${i + 1}`) || '';
      }
      var days =["d4", "d4/"];
      var data =[dayArray, dayArray2];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }else if(day == 'd5'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d5`) || '';
      dayArray[1] = form.getFieldValue(`date_d5`) || '';
      dayArray[2] = currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_d5_${i + 1}`) || '';
      }
      // Array for d5/----------
      const dayArray2 = new Array(23).fill(''); 
      dayArray2[0] = form.getFieldValue(`emb_d5`) || '';
      dayArray2[1] = form.getFieldValue(`date_d5`) || '';
      dayArray2[2] = currentTime;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray2[3 + i] = form.getFieldValue(`thaw_d5/_${i + 1}`) || '';
      }
      var days =["d5", "d5/"];
      var data =[dayArray, dayArray2];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }else if(day == 'd6'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d6`) || '';
      dayArray[1] = form.getFieldValue(`date_d6`) || '';
      dayArray[2] = currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_d6_${i + 1}`) || '';
      }
      // Array for d6/----------
      const dayArray2 = new Array(23).fill(''); 
      dayArray2[0] = form.getFieldValue(`emb_d6`) || '';
      dayArray2[1] = form.getFieldValue(`date_d6`) || '';
      dayArray2[2] = currentTime;
      // const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray2[3 + i] = form.getFieldValue(`thaw_d6/_${i + 1}`) || '';
      }
      var days =["d6", "d6/"];
      var data =[dayArray, dayArray2];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }else if(day == 'd7'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_d7`) || '';
      dayArray[1] = form.getFieldValue(`date_d7`) || '';
      dayArray[2] = currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_d7_${i + 1}`) || '';
      }
      // Array for d7/----------
      const dayArray2 = new Array(23).fill(''); 
      dayArray2[0] = form.getFieldValue(`emb_d7`) || '';
      dayArray2[1] = form.getFieldValue(`date_d7`) || '';
      dayArray2[2] = currentTime;
      // const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray2[3 + i] = form.getFieldValue(`thaw_d7/_${i + 1}`) || '';
      }
      var days =["d7", "d7/"];
      var data =[dayArray, dayArray2];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
       
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }else if(day == 'final disposition'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_final_disposition`) || '';
      dayArray[1] = form.getFieldValue(`date_final_disposition`) || '';
      dayArray[2] = currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_final_disposition_${i + 1}`) || '';
      }
      var days =["final disposition"];
      var data =[dayArray];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }

    }else if(day == 'ah'){
      const dayArray = new Array(23).fill(''); 
      dayArray[0] = form.getFieldValue(`emb_ah`) || '';
      dayArray[1] = form.getFieldValue(`date_ah`) || '';
      dayArray[2] = form.getFieldValue(`time_ah`) || currentTime;
      const thawedEggs = Number(form.getFieldValue('total_thawed_eggs')) || 0;
      for (let i = 0; i < thawedEggs; i++) {
            dayArray[3 + i] = form.getFieldValue(`thaw_ah_${i + 1}`) || '';
      }
      var days =["ah"];
      var data =[dayArray];
      console.log(data);

      if (Array.isArray(days) && Array.isArray(data) && days.length === data.length) {
        update_table_data_by_day(days, data);
        setRowModal(false);
      } else {
          console.error('Days and data are not valid arrays or are of different lengths');
      }
    }
  };

  const handleClearTableForm = (day) => {
    const fieldsToClear = form.getFieldsValue(); 
    const fieldsToReset = {};
    Object.keys(fieldsToClear).forEach(key => {
        if (key.startsWith(`thaw_${day}_`) || key.startsWith(`thaw_${day}/_`) ) {
            fieldsToReset[key] = ''; 
        }
    });
    form.setFieldsValue(fieldsToReset);
  };

  const rendertableModalContents = () => {
    if (!selectedRecord) return null; 
      let thawedEggs = 0;
      let formThawedEggs = Number(form.getFieldValue().total_thawed_eggs);
      let dataThawedEggs = Number(patient.thawed);
      if(dataThawedEggs){
        thawedEggs=dataThawedEggs;
      }else{
        thawedEggs=formThawedEggs;
      }
    const recordDay = selectedRecord.day;
    
    if (recordDay === "D0") {
      const existingDataforShowing = data && data.length > 0 ? data[0] : {};
      let icsiCount = 0;
      let degCount = 0;
      let emb = '';
      let time = '';
      let date = '';
      Object.entries(existingDataforShowing).forEach(([key, value]) => {
          if (key.startsWith('day')) {
              if (value === "ICSI") {
                  icsiCount++;
              } else if (value === "DEG") {
                  degCount++;
              }
          } else if (key === 'emb') {
              emb = value;
          } else if (key === 'time') {
              time = value;
          } else if (key === 'date') {
              date = value;
          }
      });
      form.setFieldsValue({
          thaw_d0_icsi: icsiCount,
          thaw_d0_deg: degCount,
          emb_d0: emb ,
          date_d0: date,
          time_d0: time,
      });
      return (
        <>
          <Form name="d0_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d0" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d0" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d0" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              

                  <Col span={12} style={{ marginTop: "0px" }} >
                    <Form.Item
                      label="Select ICSI Count"
                      name={`thaw_d0_icsi`}
                      validateTrigger="onBlur"
                      layout="vertical"
                    >
                      <InputNumber  style={{ width: "100%" }}/>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ marginTop: "0px" }} >
                    <Form.Item
                      label="Select DEG Count"
                      name={`thaw_d0_deg`}
                      validateTrigger="onBlur"
                      layout="vertical"
                    >
                      <InputNumber  style={{ width: "100%" }}/>
                    </Form.Item>
                  </Col>

                
                 
             
            </Row>
          </Form>

          

          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d0')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d0")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    } else if (recordDay === "D1") {

      const existingDataforShowing = data && data.length > 0 ? data[1] : {};
      Object.entries(existingDataforShowing).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d1: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d1: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d1: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d1_${key.slice(3)}`]: value });
          }
      });
      
      const firstRowData = data && data.length > 0 ? data[0] : {};
      let isFirstSet = true; 
      const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        let firstFieldValue = '';
        for (let i = 1; i <= Object.keys(firstRowData).length; i++) {
            let fieldName = `thaw_d1_${i}`;
            firstFieldValue = form.getFieldValue(fieldName);
            if (firstFieldValue) {
                break; 
            }
        }
        Object.entries(firstRowData).forEach(([key, value]) => {
              if (
                  value &&
                  typeof value !== 'object' &&
                  key !== 'key' &&
                  key !== 'date' &&
                  key !== 'time' &&
                  key !== 'emb' &&
                  key !== 'day' &&
                  value !== 'DEG'
              ) { 
                  form.setFieldsValue({
                      [`thaw_d1_${key.slice(3)}`]: isChecked ? firstFieldValue : '',
                  });
              }
          });
      };
      return (
        <>
        
          <Form name="d1_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d1" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d1" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d1" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>


              <Col span={24}>
              {Object.entries(firstRowData).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' ? (
                    <>
                    <Row gutter={10}>
                        <Col span={6} key={key} style={{ marginTop: '15px' }}>
                            <Title level={5}>{key.startsWith('day') ? `${value} ${key.slice(3)}` : key}</Title>
                        </Col>
                        <Col span={10} style={{ marginTop: '10px' }}>
                                    <Form.Item label={`Thawing Details`} name={`thaw_d1_${key.slice(3)}`} validateTrigger="onBlur" layout="vertical" >
                                        <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
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
                                    </Form.Item>
                                </Col>
                        {isFirstSet || showAll ? (
                              <>
                                {isFirstSet && (
                                    <Col span={8} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'right', flexDirection: 'row', marginTop: '10px' }}>
                                        <Form.Item label={`Set this value for all`} name={`check_d1_${key.slice(3)}`} validateTrigger="onBlur" layout="vertical" >
                                            <Checkbox onChange={handleCheckboxChange} style={{ marginLeft: '10px' }}></Checkbox>
                                        </Form.Item>
                                    </Col>
                                )}
                              </>
                        ) : null}
                        {isFirstSet && (isFirstSet = false)}

                        </Row>
                    </>
                ) : null
            ))}
            </Col>
            </Row>
          </Form>
          <Row gutter={10}>
              
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d1')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d1")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    } else if (recordDay === "D2") {

      const existingDataforShowing = data && data.length > 0 ? data[2] : {};
      Object.entries(existingDataforShowing).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d2: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d2: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d2: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d2_${key.slice(3)}`]: value });
          }
      });
      const firstRowData = data && data.length > 0 ? data[1] : {};
      let isFirstSet = true; 
          const handleCheckboxChange = (e) => {
            const isChecked = e.target.checked;
            let firstFieldValue = '';
            for (let i = 1; i <= Object.keys(firstRowData).length; i++) {
                let fieldName = `thaw_d2_${i}`;
                firstFieldValue = form.getFieldValue(fieldName);
                if (firstFieldValue) {
                    break; 
                }
            }
            Object.entries(firstRowData).forEach(([key, value]) => {
                  if (
                      value &&
                      typeof value !== 'object' &&
                      key !== 'key' &&
                      key !== 'date' &&
                      key !== 'time' &&
                      key !== 'emb' &&
                      key !== 'day' &&
                      value !== 'DEG'
                  ) {
                      form.setFieldsValue({
                          [`thaw_d2_${key.slice(3)}`]: isChecked ? firstFieldValue : '',
                      });
                  }
              });
          };
    
      return (
        <>
          <Form name="d2_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
            <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d2" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d2" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d2" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>

              <Col span={24}>
              {Object.entries(firstRowData).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' ? (
                    <>
                    <Row gutter={10}>
                        <Col span={6} key={key} style={{ marginTop: '15px' }}>
                            <Title level={5}>{key.startsWith('day') ? `D1 EGG ${key.slice(3)}` : key}: {value}</Title>
                        </Col>
                        <Col span={10} style={{ marginTop: '10px' }}>
                                    <Form.Item
                                        label={`Thawing Details for Egg ${key.slice(3)}`}
                                        name={`thaw_d2_${key.slice(3)}`}
                                        validateTrigger="onBlur"
                                        layout="vertical"
                                    >
                                        <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
                                          <Option value="">Select</Option>
                                          <Option value="Continuing Culture">Continuing Culture</Option>
                                          <Option value="DEG">DEG</Option>
                                          <Option value="Cell Arrest">Cell Arrest</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                        {isFirstSet || showAll ? (
                              <>
                                {isFirstSet && (
                                    <Col span={8} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'right', flexDirection: 'row', marginTop: '10px' }}>
                                        <Form.Item label={`Set this value for all`} name={`check_d2_${key.slice(3)}`} validateTrigger="onBlur" layout="vertical" >
                                            <Checkbox onChange={handleCheckboxChange} style={{ marginLeft: '10px' }}></Checkbox>
                                        </Form.Item>
                                    </Col>
                                )}
                              </>
                        ) : null}
                        {isFirstSet && (isFirstSet = false)}

                        </Row>
                    </>
                ) : null
            ))}
            </Col>
              
            </Row>
            </Form>
            <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d2')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d2")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
            
         </>
      );
    }  else if (recordDay === "D3" || recordDay === "D3/") {
      const existingDataforShowingd3 = data && data.length > 0 ? data[3] : {};
      Object.entries(existingDataforShowingd3).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d3: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d3: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d3: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d3_${key.slice(3)}`]: value });
          }
      });

      const existingDataforShowing_d3 = data && data.length > 0 ? data[4] : {};
      Object.entries(existingDataforShowing_d3).forEach(([key, value]) => {
          if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d3/_${key.slice(3)}`]: value });
          }
      });

      const firstRowData = data && data.length > 0 ? data[2] : {};
      
      return (
        <>
          <Form name="d3_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d3" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d3" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d3" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={24}>
                {Object.entries(firstRowData).map(([key, value]) => (
                  value && typeof value === 'object' ? null :
                  value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest'  && value !== 'HB' && value !== 'HHB' ? (
                      <>
                        <Row gutter={10}>
                            <Col span={10} key={key} style={{ marginTop: '15px' }}>
                                <Title level={5}>{key.startsWith('day') ? `D2 EGG ${key.slice(3)}` : key}: {value}</Title>
                            </Col>
                            <Col span={7} style={{ marginTop: '10px' }}>
                                  <Form.Item
                                      label={`Thawing Details for Egg ${key.slice(3)}`}
                                      name={`thaw_d3_${key.slice(3)}`}
                                      validateTrigger="onBlur"
                                      layout="vertical"
                                  >
                                      <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
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
                                  </Form.Item>
                              </Col>

                              <Col span={7} style={{ marginTop: '10px' }}>
                                  <Form.Item
                                      label={`Grading Details for Egg ${key.slice(3)}`}
                                      name={`thaw_d3/_${key.slice(3)}`}
                                      validateTrigger="onBlur"
                                      layout="vertical"
                                  >
                                      <Select  style={{ width: "100%" }} placeholder={`Select grading details for egg ${key.slice(3)}`}>
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
                                  </Form.Item>
                              </Col>
                          </Row>
                      </>
                  ) : null
                ))}
              </Col>
            </Row>
          </Form>

          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d3')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d3")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    } else if (recordDay === "D4" || recordDay === "D4/") {

      const existingDataforShowingd4 = data && data.length > 0 ? data[6] : {};
      Object.entries(existingDataforShowingd4).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d4: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d4: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d4: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d4_${key.slice(3)}`]: value });
          }
      });

      const existingDataforShowing_d4 = data && data.length > 0 ? data[7] : {};
      Object.entries(existingDataforShowing_d4).forEach(([key, value]) => {
          if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d4/_${key.slice(3)}`]: value });
          }
      });

      const d3Row = data && data.length > 0 ? data[3] : {};
      const d3GradingRow = data && data.length > 0 ? data[4] : {};
      
      return (
        <>
          <Form name="d4_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d4" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d4" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d4" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>


            <Col span={16}>
              
                {Object.entries(d3Row).map(([key, value]) => (
                  value && typeof value === 'object' ? null :
                  value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest'  && value !== 'HB' && value !== 'HHB' ? (
                      <>
                      <Row gutter={8}>
                        <Col span={16} key={key} style={{ marginTop: '15px' }}>
                            <Title level={5}>{key.startsWith('day') ? `D3 EGG ${key.slice(3)}` : key}: {value}</Title>
                        </Col>
                        <Col span={8} style={{ marginTop: '10px' }}>
                              <Form.Item
                                  // label={`Thawing Details for Egg ${key.slice(3)}`}
                                  label='Thawing' 
                                  name={`thaw_d4_${key.slice(3)}`}
                                  validateTrigger="onBlur"
                                  layout="vertical"
                              >
                                  <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
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
                              </Form.Item>
                          </Col>
                        </Row>
                      </>
                  ) : null
                ))}
        </Col>
        <Col span={8}>
              {Object.entries(d3GradingRow).map(([key, value]) => (
                  value && typeof value === 'object' ? null :
                  value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest'   && value !== 'HB' && value !== 'HHB' ? (
                      <>
                        <Row gutter={8}>
                            <Col span={8} key={key} style={{ marginTop: '15px' }}>
                                <Title level={5}> {value}</Title>
                            </Col>
                            <Col span={16} style={{ marginTop: '10px' }}>
                                <Form.Item
                                    label={`Grading`}
                                    name={`thaw_d4/_${key.slice(3)}`}
                                    validateTrigger="onBlur"
                                    layout="vertical"
                                >
                                    <Select  style={{ width: "100%" }} placeholder={`Select grading details for egg ${key.slice(3)}`}>
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
                                </Form.Item>
                            </Col>
                            </Row>
                      </>
                  ) : null
                ))}
            </Col>
              
            </Row>
          </Form>
          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d4')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d4")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    } else if (recordDay === "D5" || recordDay === "D5/") {

      const existingDataforShowingd5 = data && data.length > 0 ? data[8] : {};
      Object.entries(existingDataforShowingd5).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d5: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d5: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d5: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d5_${key.slice(3)}`]: value });
          }
      });

      const existingDataforShowing_d5 = data && data.length > 0 ? data[9] : {};
      Object.entries(existingDataforShowing_d5).forEach(([key, value]) => {
          if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d5/_${key.slice(3)}`]: value });
          }
      });
      const d4Row = data && data.length > 0 ? data[6] : {};
      const d4GradingRow = data && data.length > 0 ? data[7] : {};
      return (
        <>
          <Form name="d5_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d5" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d5" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d5" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>


              <Col span={16}>
              
              {Object.entries(d4Row).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest'  && value !== 'HB' && value !== 'HHB' ? (
                    <>
                    <Row gutter={8}>
                      <Col span={16} key={key} style={{ marginTop: '15px' }}>
                          <Title level={5}>{key.startsWith('day') ? `D4 EGG ${key.slice(3)}` : key}: {value}</Title>
                      </Col>
                      <Col span={8} style={{ marginTop: '10px' }}>
                            <Form.Item
                                // label={`Thawing Details for Egg ${key.slice(3)}`}
                                label='Thawing' 
                                name={`thaw_d5_${key.slice(3)}`}
                                validateTrigger="onBlur"
                                layout="vertical"
                            >
                                <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
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
                            </Form.Item>
                        </Col>
                      </Row>
                    </>
                ) : null
              ))}

      </Col>

      <Col span={8}>

            {Object.entries(d4GradingRow).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' ? (
                    <>
                      <Row gutter={8}>
                          <Col span={8} key={key} style={{ marginTop: '15px' }}>
                              <Title level={5}> {value}</Title>
                          </Col>
                          <Col span={16} style={{ marginTop: '10px' }}>
                              <Form.Item
                                  label={`Grading`}
                                  name={`thaw_d5/_${key.slice(3)}`}
                                  validateTrigger="onBlur"
                                  layout="vertical"
                              >
                                  <Select  style={{ width: "100%" }} placeholder={`Select grading details for egg ${key.slice(3)}`}>
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
                              </Form.Item>
                          </Col>
                          </Row>
                    </>
                ) : null
              ))}
          </Col>
            </Row>
          </Form>

          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d5')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d5")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    }  else if (recordDay === "D6" || recordDay === "D6/") {
      const existingDataforShowingd6 = data && data.length > 0 ? data[10] : {};
      Object.entries(existingDataforShowingd6).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d6: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d6: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d6: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d6_${key.slice(3)}`]: value });
          }
      });

      const existingDataforShowing_d6 = data && data.length > 0 ? data[11] : {};
      Object.entries(existingDataforShowing_d6).forEach(([key, value]) => {
          if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d6/_${key.slice(3)}`]: value });
          }
      });
      const d5Row = data && data.length > 0 ? data[8] : {};
      const d5GradingRow = data && data.length > 0 ? data[9] : {};

      console.log(d5Row);
      
      return (
        <>
          <Form name="d6_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
            <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d6" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d6" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d6" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>

              <Col span={16}>
              
              {Object.entries(d5Row).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest'  && value !== 'HB' && value !== 'HHB' ? (
                    <>
                    <Row gutter={8}>
                      <Col span={16} key={key} style={{ marginTop: '15px' }}>
                          <Title level={5}>{key.startsWith('day') ? `D5 EGG ${key.slice(3)}` : key}: {value}</Title>
                      </Col>
                      <Col span={8} style={{ marginTop: '10px' }}>
                            <Form.Item
                                // label={`Thawing Details for Egg ${key.slice(3)}`}
                                label='Thawing' 
                                name={`thaw_d6_${key.slice(3)}`}
                                validateTrigger="onBlur"
                                layout="vertical"
                            >
                                <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
                                    <Option value="">Select</Option>
                                    <Option value="MC">MC</Option>
                                    <Option value="EB">EB</Option>
                                    <Option value="B">B</Option>
                                    <Option value="HB">HB</Option>
                                    <Option value="HHB">HHB</Option>
                                    <Option value="DEG">DEG</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                      </Row>
                    </>
                ) : null
              ))}

      </Col>

      <Col span={8}>
            {Object.entries(d5GradingRow).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' && value !== 'HB' && value !== 'HHB' ? (
                    <>
                      <Row gutter={8}>
                          <Col span={8} key={key} style={{ marginTop: '15px' }}>
                              <Title level={5}> {value}</Title>
                          </Col>
                          <Col span={16} style={{ marginTop: '10px' }}>
                              <Form.Item
                                  label={`Grading`}
                                  name={`thaw_d6/_${key.slice(3)}`}
                                  validateTrigger="onBlur"
                                  layout="vertical"
                              >
                                  <Select  style={{ width: "100%" }} placeholder={`Select grading details for egg ${key.slice(3)}`}>
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
                              </Form.Item>
                          </Col>
                          </Row>
                    </>
                ) : null
              ))}
          </Col>
            </Row>
          </Form>
          
          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d6')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d6")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    } else if (recordDay === "D7" || recordDay === "D7/") {

      const existingDataforShowingd7 = data && data.length > 0 ? data[12] : {};
      Object.entries(existingDataforShowingd7).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_d7: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_d7: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_d7: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d7_${key.slice(3)}`]: value });
          }
      });

      const existingDataforShowing_d7 = data && data.length > 0 ? data[13] : {};
      Object.entries(existingDataforShowing_d7).forEach(([key, value]) => {
          if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_d7/_${key.slice(3)}`]: value });
          }
      });
     
      const d6Row = data && data.length > 0 ? data[10] : {};
      const d6GradingRow = data && data.length > 0 ? data[11] : {};
      return (
        <>
          <Form name="d7_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_d7" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_d7" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_d7" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
            <Col span={16}>
              {Object.entries(d6Row).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest'  && value !== 'HB' && value !== 'HHB' ? (
                    <>
                    <Row gutter={8}>
                      <Col span={16} key={key} style={{ marginTop: '15px' }}>
                          <Title level={5}>{key.startsWith('day') ? `D6 EGG ${key.slice(3)}` : key}: {value}</Title>
                      </Col>
                      <Col span={8} style={{ marginTop: '10px' }}>
                            <Form.Item
                                // label={`Thawing Details for Egg ${key.slice(3)}`}
                                label='Thawing' 
                                name={`thaw_d7_${key.slice(3)}`}
                                validateTrigger="onBlur"
                                layout="vertical"
                            >
                                <Select style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
                                    <Option value="">Select</Option>
                                    <Option value="MC">MC</Option>
                                    <Option value="EB">EB</Option>
                                    <Option value="B">B</Option>
                                    <Option value="HB">HB</Option>
                                    <Option value="HHB">HHB</Option>
                                    <Option value="DEG">DEG</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                      </Row>
                    </>
                ) : null
              ))}

      </Col>
      <Col span={8}>
            {Object.entries(d6GradingRow).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' && value !== 'HB' && value !== 'HHB' ? (
                    <>
                      <Row gutter={8}>
                          <Col span={8} key={key} style={{ marginTop: '15px' }}>
                              <Title level={5}> {value}</Title>
                          </Col>
                          <Col span={16} style={{ marginTop: '10px' }}>
                              <Form.Item
                                  label={`Grading`}
                                  name={`thaw_d7/_${key.slice(3)}`}
                                  validateTrigger="onBlur"
                                  layout="vertical"
                              >
                                  <Select  style={{ width: "100%" }} placeholder={`Select grading details for egg ${key.slice(3)}`}>
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
                              </Form.Item>
                          </Col>
                          </Row>
                    </>
                ) : null
              ))}
          </Col>
            </Row>
          </Form>

          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('d7')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("d7")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
          
        </>
      );
    } else if (recordDay === "Final Disposition") {
      const existingDataforShowing = data && data.length > 0 ? data[14] : {};
      Object.entries(existingDataforShowing).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_final_disposition: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_final_disposition: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_final_disposition: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_final_disposition_${key.slice(3)}`]: value });
          }
      });
      const firstRowData = data && data.length > 0 ? data[12] : {};
      let isFirstSet = true; 
      const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        
        let firstFieldValue = '';
        for (let i = 1; i <= Object.keys(firstRowData).length; i++) {
            let fieldName = `thaw_final_disposition_${i}`;
            firstFieldValue = form.getFieldValue(fieldName);
            if (firstFieldValue) {
                break; 
            }
        }
        Object.entries(firstRowData).forEach(([key, value]) => {
              if (
                  value &&
                  typeof value !== 'object' &&
                  key !== 'key' &&
                  key !== 'date' &&
                  key !== 'time' &&
                  key !== 'emb' &&
                  key !== 'day' &&
                  value !== 'DEG'
              ) {
                  form.setFieldsValue({
                      [`thaw_final_disposition_${key.slice(3)}`]: isChecked ? firstFieldValue : '',
                  });
              }
          });
      };

      return (
        <>
          <Form name="final_disposition_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_final_disposition" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_final_disposition" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_final_disposition" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={24}>
              {Object.entries(firstRowData).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' ? (
                    <>
                    <Row gutter={10}>
                        <Col span={6} key={key} style={{ marginTop: '15px' }}>
                            <Title level={5}>{key.startsWith('day') ? `D7 EGG ${key.slice(3)}` : key}: {value}</Title>
                        </Col>
                        <Col span={10} style={{ marginTop: '10px' }}>
                                    <Form.Item
                                        label={`Final Disosition for Egg ${key.slice(3)}`}
                                        name={`thaw_final_disposition_${key.slice(3)}`}
                                        validateTrigger="onBlur"
                                        layout="vertical"
                                    >
                                        <Select  style={{ width: "100%" }} placeholder={`Select final disposition for egg ${key.slice(3)}`}>
                                            <Option value="">Select</Option>
                                            <Option value="-">-</Option>
                                            <Option value="Bx/Cryo">Bx/Cryo</Option>
                                            <Option value="Cryo">Cryo</Option>
                                            <Option value="Discard">Discard</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                        {isFirstSet || showAll ? (
                              <>
                                {isFirstSet && (
                                    <Col span={8} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'right', flexDirection: 'row', marginTop: '10px' }}>
                                        <Form.Item label={`Set this value for all`} name={`check_${key.slice(3)}`} validateTrigger="onBlur" layout="vertical" >
                                            <Checkbox onChange={handleCheckboxChange} style={{ marginLeft: '10px' }}></Checkbox>
                                        </Form.Item>
                                    </Col>
                                )}
                              </>
                        ) : null}
                        {isFirstSet && (isFirstSet = false)}

                        </Row>
                    </>
                ) : null
            ))}
            </Col>
            </Row>
          </Form>
          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('final_disposition')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("final disposition")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    } else if (recordDay === "AH") {

      const existingDataforShowing = data && data.length > 0 ? data[5] : {};
      Object.entries(existingDataforShowing).forEach(([key, value]) => {
          if (key === 'emb') {
              form.setFieldsValue({ emb_ah: value });
          } else if (key === 'time') {
              form.setFieldsValue({ time_ah: value });
          } else if (key === 'date') {
              form.setFieldsValue({ date_ah: value });
          } else if (key.startsWith('day')) {
              form.setFieldsValue({ [`thaw_ah_${key.slice(3)}`]: value });
          }
      });

      const firstRowData = data && data.length > 0 ? data[3] : {};
      let isFirstSet = true; 
      const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        let firstFieldValue = '';
        for (let i = 1; i <= Object.keys(firstRowData).length; i++) {
            let fieldName = `thaw_ah_${i}`;
            firstFieldValue = form.getFieldValue(fieldName);
            
            if (firstFieldValue) {
                break; 
            }
        }

      
        Object.entries(firstRowData).forEach(([key, value]) => {
          if (
              value &&
              typeof value !== 'object' &&
              key !== 'key' &&
              key !== 'date' &&
              key !== 'time' &&
              key !== 'emb' &&
              key !== 'day' &&
              value !== 'DEG' &&
              value !== 'Cell Arrest' 
          ) {
              form.setFieldsValue({
                  [`thaw_ah_${key.slice(3)}`]: isChecked  ? firstFieldValue : '',
              });
          }
      });
      };
      return (
        <>
          <Form name="ah_form" form={form} autoComplete="off" style={{ height:'500px' , overflowY:'scroll' , overflowX: 'hidden', width: "100%" , paddingRight: '10px'}}>
            <Row gutter={[16, 16]}>
            <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >EMB</span> } name="emb_ah" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >DATE</span> } name="date_ah" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={<span style={{ display: "inline-block", width: "50px", textAlign: "left", fontWeight:'800' , color:' rgb(138, 98, 165)' , fontSize: '16px' }} >TIME</span> } name="time_ah" validateTrigger="onBlur" layout="horizontal" >
                  <Input placeholder=""  style={inputfiled_style_table_modal}  readOnly />
                </Form.Item>
              </Col>


              <Col span={24}>
              {Object.entries(firstRowData).map(([key, value]) => (
                value && typeof value === 'object' ? null :
                value && key !== 'key' && key !== 'date' && key !== 'time' && key !== 'emb' && key !== 'day' && value !== 'DEG' && value !== 'Cell Arrest' ? (

                    <>
                    <Row gutter={10}>
                        <Col span={6} key={key} style={{ marginTop: '15px' }}>
                            <Title level={5}>{key.startsWith('day') ? `D3 EGG ${key.slice(3)}` : key}: {value}</Title>
                        </Col>
                        <Col span={10} style={{ marginTop: '10px' }}>
                                    <Form.Item
                                        label={`Thawing Details for Egg ${key.slice(3)}`}
                                        name={`thaw_ah_${key.slice(3)}`}
                                        validateTrigger="onBlur"
                                        layout="vertical"
                                    >
                                        <Select  style={{ width: "100%" }} placeholder={`Select thawing details for egg ${key.slice(3)}`}>
                                          <Option value="">Select</Option>
                                          <Option value="AH">AH</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                        {isFirstSet || showAll ? (
                              <>
                                {isFirstSet && (
                                    <Col span={8} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignContent: 'right', flexDirection: 'row', marginTop: '10px' }}>
                                        <Form.Item label={`Set this value for all`} name={`check_ah_${key.slice(3)}`} validateTrigger="onBlur" layout="vertical" >
                                            <Checkbox onChange={handleCheckboxChange} style={{ marginLeft: '10px' }}></Checkbox>
                                        </Form.Item>
                                    </Col>
                                )}
                              </>
                        ) : null}
                        {isFirstSet && (isFirstSet = false)}

                        </Row>
                    </>
                ) : null
            ))}
            </Col>
            </Row>
          </Form>
          <Row gutter={10}>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px" }} >
                    <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", border: "1px solid #FFE6F0", color: "#EF83B1", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px", background: "#FFE6F0" }}
                      onClick={()=>handleClearTableForm('ah')} 
                    >
                      <span style={{ fontSize: "18px" }}>Clear</span>
                    </Button>
              </Col>
              <Col span={12} style={{ color: "red", display: "flex", alignItems: "right", justifyContent: "flex-end", marginTop: "30px", }} >
                <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "bold", width: "100%", height: "40px", borderRadius: "10px" }}
                  onClick={()=>handleSubmitTableModal("ah")}
                >
                  <span style={{ fontSize: "18px" }}>Save</span>
                </Button>
              </Col>
            </Row>
        </>
      );
    }
  };

  const handleTableRowEdit = (record, columnKey, columnIndex) => {
    setRowModal(true);
    setCurrentField(record.day);
    setSelectedRecord(record);
  };

  // Table code 
  const handleCellClick = (record , columnKey, columnIndex) => {
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

  

  const columns = [
    {
      title: "Emb:",
      dataIndex: "emb",
      key: "emb",
      width: 40,
      align: "center",
      onCell: (record) => ({
        onClick: () => {
          // setSelectedRecord(record);
          // setRowModal(true)
           handleCellClick(record, 'emb', 1)
        },
      }),
      render: (text, record, index) => {
        
        if(record.day == 'D3'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D3/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D4'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D4/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D5'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D5/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 0,
              
            },
          };
        } else if(record.day == 'D6'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D6/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D7'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D7/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else{
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.emb}</span>,
          };
        }
      },
    },
    {
      title: "Date:",
      dataIndex: "date",
      key: "date",
      width: 80,
      align: "center",
      onCell: (record) => ({
        onClick: () => {
          // setSelectedRecord(record);
          // setRowModal(true)
          handleCellClick(record, 'date', 1)
        },
      }),
      render: (text, record, index) => {
        if(record.day == 'D3'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D3/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D4'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D4/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D5'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D5/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D6'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D6/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D7'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D7/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else{
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.date}</span>,
          };
        }
        
      },
    },
    {
      title: "Time:",
      dataIndex: "time",
      key: "time",
      width: 80,
      align: "center",
      onCell: (record) => ({
        onClick: () => {
          // setSelectedRecord(record);
          // setRowModal(true)
          handleCellClick(record, 'time', 1)
        },
      }),
      render: (text, record, index) => {
        if(record.day == 'D3'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D3/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D4'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D4/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D5'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D5/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D6'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D6/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else if(record.day == 'D7'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D7/'){
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
            props: {
              rowSpan: 0,
              style: { display: 'none' },
            },
          };
        } else{
          return {
            children: <span style={{ fontSize: '11px' , fontWeight: '800'}}>{record.time}</span>,
          };
        }
        
      },
    },
    {
      title: "",
      dataIndex: "day",
      key: "day",
      width: 80,
      align: "center",
      onCell: (record) => ({
        onClick: () => {
          setSelectedRecord(record);
          setRowModal(true)
        },
      }),
      render: (text, record, index) => {
        if (record.day === "D3") {
          return {
            children: <span style={{ fontWeight: "bold" }}>{text}</span>,
            props: {
              rowSpan: 2,
            },
          };
        }
        if (record.day === "D4") {
          return {
            children: <span style={{ fontWeight: "bold" }}>{text}</span>,
            props: {
              rowSpan: 2,
            },
          };
        }
        if (record.day === "D5") {
          return {
            children: <span style={{ fontWeight: "bold" }}>{text}</span>,
            props: {
              rowSpan: 2,
            },
          };
        }
        if (record.day === "D6") {
          return {
            children: <span style={{ fontWeight: "bold" }}>{text}</span>,
            props: {
              rowSpan: 2,
            },
          };
        }
        if (record.day === "D7") {
          return {
            children: <span style={{ fontWeight: "bold" }}>{text}</span>,
            props: {
              rowSpan: 2,
            },
          };
        }

        // For the next row after 'D3', set rowspan to 0 to skip rendering the cell
        if (index > 0 && data[index - 1].day === "D3") {
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        }
        if (index > 0 && data[index - 1].day === "D4") {
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        }
        if (index > 0 && data[index - 1].day === "D5") {
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        }
        if (index > 0 && data[index - 1].day === "D6") {
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        }
        if (index > 0 && data[index - 1].day === "D7") {
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        }

        return <span style={{ fontWeight: "bold" }}>{text}</span>;
      },
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      width: 40,
      align: "center",
      render: (text, record, index) => {
        if(record.day == 'D3'){
          return {
            children: <i className="ri-edit-line" style={{ cursor: "pointer", fontSize: "16px" }}/>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D3/'){
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        } else if(record.day == 'D4'){
          return {
            children: <i className="ri-edit-line" style={{ cursor: "pointer", fontSize: "16px" }}/>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D4/'){
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        } else if(record.day == 'D5'){
          return {
            children: <i className="ri-edit-line" style={{ cursor: "pointer", fontSize: "16px" }}/>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D5/'){
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        } else if(record.day == 'D6'){
          return {
            children: <i className="ri-edit-line" style={{ cursor: "pointer", fontSize: "16px" }}/>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D6/'){
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        } else if(record.day == 'D7'){
          return {
            children: <i className="ri-edit-line" style={{ cursor: "pointer", fontSize: "16px" }}/>,
            props: {
              rowSpan: 2,
            },
          };
        } else if(record.day == 'D7/'){
          return {
            children: null,
            props: {
              rowSpan: 0,
            },
          };
        } else {
          return  <i className="ri-edit-line" style={{ cursor: "pointer", fontSize: "16px" }}/>;
        }
      },
      onCell: (record) => ({
        onClick: () => handleTableRowEdit(record, "edit", 4),
      }),
    },

    ...Array.from({ length: 20 }, (_, i) => ({
      title: `${i + 1}`,
      dataIndex: `day${i + 1}`,
      key: `day${i + 1}`,
      width: 80,
      align: "center",
      onCell: (record, rowIndex) => ({
        onClick: () => {
          setSelectedRecord(record);
          setRowModal(true)
        },
      }),
      render: (text, record) => {
        const currentDayValue = record[`day${i + 1}`];

        console.log(currentDayValue);
        
        
        
        if (text === 'ICSI') {
          return <span style={{ fontSize: '11px', fontWeight: '800' , color: 'rgb(138, 98, 165)', transform: 'rotate(320deg)', display: 'inline-block' }}>{text}</span>;
        } else if (text === 'DEG' || text === 'Cell Arrest' || text === 'HB' || text === 'HHB') {
          return <span style={{ fontSize: '11px', fontWeight: '800', color: 'red' , transform: 'rotate(320deg)', display: 'inline-block'}}>{text}</span>;
        }  else {
          return <span style={{ fontSize: '11px', fontWeight: '800', color: 'rgb(138, 98, 165)' , transform: 'rotate(320deg)', display: 'inline-block' }}>{text}</span>; 
        } 
      },
    })),
  ];

  const renderSecondModalContent = () => {
    if (!selectedRowData) return null;
    
    
    if (currentFieldtable === "emb") {
      return (
        <>
          <Select style={{ width: "100%" }} value="" onChange={handleChange}>
            <Option value="">Select</Option>
            <Option value="AL">AL</Option>
          </Select>
        </>
      );
    } else if (currentFieldtable === "date") {
      return (
        <>
          <Calendar fullscreen={false} onSelect={handleDateSelect} />
        </>
      );
    } else if (currentFieldtable === "time") {
      return (
        <>
          <TimePicker
            defaultValue={dayjs(selectedRowData?.time || "00:00", timeFormat)}
            format={timeFormat}
            onChange={handleTimeChange}
            style={{ width: "100%" }}
          />
        </>
      );
    }
  };

  const renderModalContent = () => {
    if (!selectedRowData) return null;
    const { day } = selectedRowData;
    if (day === "D0") {
      return (
        <Select value="" onChange={handleChange} style={{ width: "100%" }}>
          <Option value="">Select</Option>
          <Option value="ICSI">ICSI</Option>
          <Option value="DEG">DEG</Option>
        </Select>
      );
    } else if (day === "D1") {
      return (
        <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D2") {
      return (
        <Select value="" onChange={handleChange} style={{ width: "100%" }}>
          <Option value="">Select</Option>
          <Option value="Continuing Culture">Continuing Culture</Option>
          <Option value="DEG">DEG</Option>
          <Option value="Cell Arrest">Cell Arrest</Option>
        </Select>
      );
    } else if (day === "D3") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D3/") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D4") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D4/") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D5") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D5/") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D6" || day === "D7") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "D6/" || day === "D7/") {
      return (
        <>
          <Select value="" onChange={handleChange} style={{ width: "100%" }}>
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
    } else if (day === "Final Disposition") {
      return (
        <Select value="" onChange={handleChange} style={{ width: "100%" }}>
          <Option value="">Select</Option>
          <Option value="-">-</Option>
          <Option value="Bx/Cryo">Bx/Cryo</Option>
          <Option value="Cryo">Cryo</Option>
          <Option value="Discard">Discard</Option>
        </Select>
      );
    } else if (day === "AH") {
      return (
        <Select value="" onChange={handleChange} style={{ width: "100%" }}>
          <Option value="">Select</Option>
          <Option value="AH">AH</Option>
        </Select>
      );
    }
  };

  const handleInputChangeandSetvalue= (e, targetField) => {
    const value = e.target.value;
    form.setFieldsValue({
      [targetField]: value, 
    });
  };

 


  const safeJsonParse = (str) => {
    if (!str) {
      return {};
    }
    try {
      return JSON.parse(str);
    } catch (e) {
      console.error("JSON parse error:", e);
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
        emb: dayData[0] || "",
        date: dayData[1] || "",
        time: dayData[2] || "",
        ...Array.from({ length: 20 }, (_, i) => ({
          [`day${i + 1}`]: dayData[i + 3] || "",
        })).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
      };
    });

    return transformed;
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleClose = () => {
    window.location.href = "https://marketing.ps-baby.com/dashboard";
  };

 
  return (
    <>
{/*  Navbar design */}
      <Row gutter={24} style={navbar_style}>
        <Col span={4} style={{ color: "red", display: "flex", alignItems: "center", paddingLeft: "50px", }} >
          <img src={logo} alt="" style={{ color: "blue", textAlign: "center", margin: "0" }} />
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title className="main-title" level={4} style={title_s_style_navbar}>
            ART WORKSHEET - EGG THAW
          </Title>
        </Col>

        <Col
          span={5}
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button type="primary" danger ghost style={{ textAlign: "center", margin: "0", background: "rgb(138, 98, 165)", border: "1px solid rgb(138, 98, 165)", color: "#fff", fontWeight: "600", fontSize: "20px", width: "360px", height: "50px", borderRadius: "10px", fontSize: "25px !important"}}>
            <span style={{ fontSize: "18px" }}>
              Print PDF{" "}
              <i
                class="ri-file-pdf-2-line"
                style={{ fontSize: "22px", marginLeft: "10px" }}
              ></i>
            </span>
          </Button>
        </Col>
        <Col
          span={5}
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="primary"
            danger
            ghost
            style={{
              textAlign: "center",
              margin: "0",
              background: "rgb(138, 98, 165)",
              border: "1px solid rgb(138, 98, 165)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "20px",
              width: "360px",
              height: "50px",
              borderRadius: "10px",
              fontSize: "25px !important",
            }}
            onClick={handleRefresh}
          >
            <span style={{ fontSize: "18px" }}>
              Add New Case{" "}
              <i
                class="ri-add-circle-line"
                style={{ fontSize: "22px", marginLeft: "10px" }}
              ></i>
            </span>
          </Button>
        </Col>
      </Row>


      <Form name="worksheet_form" id="pdfForm" style={{ margin: "5px", marginBottom: "100px" }} form={form} autoComplete="off" >
        {/* hearder row */}
        <Row gutter={8} className="first-main-con" style={{ marginTop: "10px" }} >
          {/* 1nd col  */}
          <Col span={14} className="header-form-col">
            <div style={innner_con_header_2}>
              <Row gutter={10} style={{ marginLeft: "0", marginRight: "0", borderRadius: "0px 0px 10px 10px", }} >
                <Col span={24} style={col_input_spaceing_header2}>
                  <Title level={4} style={{ width: "100%" , color: "#8A62A5", alignItems: 'center', alignSelf: 'center', marginTop: '0px' , fontWeight: '700', marginLeft: '-15px'}}>
                    Cycle Type:{" "}
                    <span style={{ fontSize: "18px", color: "#1F1F1F", fontWeight: '600' }}>
                      Egg Thawing, ICSI & Culture{" "}
                    </span>{" "}
                  </Title>
                </Col>
              </Row>
            </div>
          </Col>
          {/* 3rd col  */}
          <Col span={6} className="header-form-col">
            <div style={innner_con_header_2}>
              <Row
                gutter={10}
                style={{
                  marginLeft: "0",
                  marginRight: "0",
                  borderRadius: "0px 0px 10px 10px",
                }}
              >
                <Col span={24} style={col_input_spaceing_header2}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "90px",
                          textAlign: "left",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Primary Dr.
                      </span>
                    } 
                    name="primary_md"
                    validateTrigger="onBlur"
                    layout="horizontal"
                  >
                  

                         <Input
                            style={inputfiled_style}
                            // value={selectedValues.primary_md }
                            // onClick={() => showModal("primary_md")}
                            // readOnly
                            // placeholder="Select Primary Dr."
                          
                          />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
          {/* 4th col  */}
          <Col span={4} className="header-form-col">
            <div style={innner_con_header_2}>
              <Row
                gutter={10}
                style={{
                  marginLeft: "0",
                  marginRight: "0",
                  borderRadius: "0px 0px 10px 10px",
                }}
              >
                <Col span={24} style={col_input_spaceing_header2}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "95px",
                          textAlign: "left",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Incubator #
                      </span>
                    }
                    name="incubator"
                    validateTrigger="onBlur"
                    layout="horizontal"
                  >
                    <InputNumber style={inputfiled_style} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* 1st row  */}
        <Row gutter={8} className="first-main-con">
          {/* 1st col  */}
          <Col span={4} className="gutter-row">
            <div style={innner_con}>
              <Row >

                <Col span={24} style={headingbackgroundColor}>
                  <Title level={5} style={{ ...title_s_style_p }}>
                    Patient Details:
                  </Title>
                </Col>

                <Col span={24} style={conBodystyle}>
                  <Row gutter={10}>
                    <Col span={24}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "100px",
                              textAlign: "left",
                            }}
                          >
                            Patient Name:

                          </span>
                        }
                        name="patient_name"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}

                      >
                        <Input style={{ ...inputfiled_style, cursor: 'no-drop'}} readOnly/>
                      </Form.Item>
                    </Col>
                    <Col span={24} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "100px",
                              textAlign: "left",
                            }}
                          >
                            Patient DOB:
                          </span>
                        }
                        name="patient_dob"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                        
                      >
                        <Input
                          style={{ ...inputfiled_style, cursor: 'no-drop'}}
                          // onClick={() => handleOpenCalendar("patient_dob")}
                          readOnly
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "30px",
                              textAlign: "left",
                            }}
                          >
                            ART:
                          </span>
                        }
                        name="art"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={col_input_spaceing}>
                      <Form.Item
                        // label={<span style={{ display: 'inline-block', width: '40px', textAlign: 'left' }}>Age</span>}
                        label="Age:"
                        name="age"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={{ ...inputfiled_style, cursor: 'no-drop'}} readOnly/>
                      </Form.Item>
                    </Col>
                    <Col span={12} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                            }}
                          >
                            Cycle:
                          </span>
                        }
                        name="cycle"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                {/* <Col span={24} style={{...headingbackgroundColor , marginTop: '-25px' }}>
                  <Title level={5} style={{ ...title_s_style_p }}>
                    Partner Details:
                  </Title>
                </Col>

                <Col span={24} style={conBodystyle}>
                    <Row gutter={10}>
                      <Col span={24}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "100px",
                                textAlign: "left",
                              }}
                            >
                              Partner Name:
                            </span>
                          }
                          name="partner_name"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                          <Input style={inputfiled_style} readOnly/>
                        </Form.Item>
                      </Col>

                      <Col span={24} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "100px",
                                textAlign: "left",
                              }}
                            >
                              Partner DOB:
                            </span>
                          }
                          name="partner_dob"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                          
                        >
                         
                          <Input
                            style={inputfiled_style}
                            readOnly
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                </Col> */}
                
              </Row>
            </div>
          </Col>
          {/* 2nd col  */}
          <Col span={4} className="gutter-row">
            <div style={innner_con}>
              <Row >
                <Col span={24} style={headingbackgroundColor}>
                  <Title level={5} style={{ ...title_s_style_p }}>
                    Partner Details:
                  </Title>
                </Col>

                <Col span={24} style={conBodystyle}>
                    <Row gutter={10}>
                      <Col span={24}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "100px",
                                textAlign: "left",
                              }}
                            >
                              Partner Name:
                            </span>
                          }
                          name="partner_name"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                          <Input style={{ ...inputfiled_style, cursor: 'no-drop'}} readOnly/>
                        </Form.Item>
                      </Col>

                      <Col span={24} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "100px",
                                textAlign: "left",
                              }}
                            >
                              Partner DOB:
                            </span>
                          }
                          name="partner_dob"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                          
                        >
                         
                          <Input
                            style={{ ...inputfiled_style, cursor: 'no-drop'}}
                            readOnly
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                </Col>

                
              </Row>
            </div>
          </Col>
          {/* 3rd col  */}
          <Col span={6} className="gutter-row">
            <div style={innner_con}>
              <Row >
                      <Col span={24} style={headingbackgroundColor}>
                        <Title level={5} style={{ ...title_s_style_p }} >
                          Oocyte Source:
                        </Title>
                      </Col>

                      <Col span={24} style={conBodystyle}>
                        <Row gutter={10}>
                              <Col span={14} style={{}}>
                              <Form.Item label={ <span style={{ display: "inline-block", width: "55px", textAlign: "left", }} > Donor ID: </span> } name="dnr" validateTrigger="onBlur" layout="horizontal" colon={false}>
                                <Input style={{ ...inputfiled_style, cursor: 'no-drop'}} readOnly/>
                              </Form.Item>
                            </Col>
                            <Col span={10} >
                              <Form.Item
                                label={
                                  <span
                                    style={{
                                      display: "inline-block",
                                      width: "28px",
                                      textAlign: "left",
                                    }}
                                  >
                                    Age:
                                  </span>
                                }
                                name="age_oocyte"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                colon={false}
                              >
                                <Input style={{ ...inputfiled_style, cursor: 'no-drop'}} readOnly/>
                              </Form.Item>
                            </Col>
                            <Col span={12} style={{ marginTop: "-25px" }}>
                              <Form.Item 
                              label={
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "55px",
                                    textAlign: "left",
                                  }}
                                >
                                  Source:
                                </span>
                              }
                              name="oocyte_source" initialValue={"Donor"} colon={false}>
                                  <Input
                                    style={inputfiled_style}
                                    value={selectedValues.oocyte_source || "Donor"}
                                    onClick={() => showModal("oocyte_source")}
                                    readOnly
                                    placeholder="Select Option"
                                  />
                              </Form.Item>
                            </Col>


                              <Col span={12} style={{ marginTop: "-25px" }}>
                                  <Form.Item 
                                  label={
                                    <span
                                      style={{
                                        
                                        display: "inline-block",
                                        width: "65px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Serology:
                                    </span>
                                  }
                                  name="serology"
                                  colon={false}
                                  initialValue={"N/A"}
                                  
                                  >
                                    <Input
                                      style={inputfiled_style}
                                      value={selectedValues.serology}
                                      onClick={() => showModal("serology")}
                                      readOnly
                                      placeholder="Select Option"
                                   
                                    />
                                  </Form.Item>
                            </Col>
                            {
                              form.getFieldValue('serology') == 'Biohazard' &&
                              <Col span={24} style={{ marginTop: "-25px" }}>
                                  <Form.Item 
                                  label={
                                    <span
                                      style={{
                                        
                                        display: "inline-block",
                                        width: "120px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Serology Positive
                                    </span>
                                  }
                                  name="serology_positive"
                                  
                                  >
                                    <Input
                                      style={inputfiled_style}
                                      value={selectedValues.serology_positive}
                                      onClick={() => showModal("serology_positive")}
                                      readOnly
                                      placeholder="Select Option"
                                    />
                                  </Form.Item>
                            </Col>
                            }

                            {
                              form.getFieldValue('serology_positive') == 'Other' &&
                              form.getFieldValue('serology') === 'Biohazard' &&
                              <Col span={24} style={{ marginTop: "-25px" }}>
                                  <Form.Item 
                                  label={
                                    <span
                                      style={{
                                        display: "inline-block",
                                        width: "100%",
                                        textAlign: "left",
                                      }}
                                    >
                                      Add a Note:
                                    </span>
                                  }
                                  name="oocyte_note"
                                  layout="horizontal" 
                                  colon={false}
                                  >
                                    {/* <TextArea
                                      style={{
                                        ...inputfiled_style_text_box,
                                        
                                      }}
                                    /> */}
                                    <Input style={inputfiled_style}/>
                                  </Form.Item>
                            </Col>
                            }
                        </Row>
                      </Col>
              </Row>
            </div>
          </Col>
          {/* 4th col  */}
          <Col span={6} className="gutter-row">
            <div style={innner_con}>
            <Row >
                    <Col span={24} style={headingbackgroundColor}>
                      <Title level={5} style={{ ...title_s_style_p }}>
                        Sperm Source:
                      </Title>
                    </Col>

                    <Col span={24} style={conBodystyle}>
                      <Row gutter={10}>
                      <Col span={24} style={{ marginTop: "0px" }}>
                        <Form.Item 
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "100px",
                              textAlign: "left",
                            }}
                          >
                           Sperm Source:
                          </span>

                        }
                        colon={false}
                        name="sperm_source" initialValue={"Donor"}>
                            <Input
                              style={inputfiled_style}
                              value={selectedValues.sperm_source || "Donor"}
                              onClick={() => showModal("sperm_source")}
                              readOnly
                              placeholder="Select Option"
                            
                            />
                        </Form.Item>
                      </Col>

                      {
                         form.getFieldValue('sperm_source') == 'Donor' &&
                         <>
                          <Col span={14} style={{ marginTop: "-25px" }}>
                          <Form.Item
                            label={
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "80px",
                                  textAlign: "left",
                                }}
                              >
                                Sperm Bank:
                              </span>
                            }
                            name="sperm_bank"
                            validateTrigger="onBlur"
                            layout="horizontal"
                            colon={false}
                          >
                            <Input style={inputfiled_style} />
                          </Form.Item>
                        </Col>
                        <Col span={10} style={{ marginTop: "-25px" }}>
                          <Form.Item
                            label={
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "30px",
                                  textAlign: "left",
                                }}
                              >
                                Vial #:
                              </span>
                            }
                            name="sperm_visit"
                            validateTrigger="onBlur"
                            layout="horizontal"
                            colon={false}
                          >
                            <Input style={inputfiled_style} />
                          </Form.Item>
                        </Col>
                       </>
                      }
                      {

                        form.getFieldValue('sperm_source') == 'Patient' && 
                        <>
                          <Col span={12} style={{ marginTop: "-25px" }}>
                              <Form.Item 
                              label={
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "80px",
                                    textAlign: "left",
                                  }}
                                >
                                  Sperm Type:
                                </span>
                              }
                              colon={false}
                              name="sperm_type" initialValue={"Fresh"}>
                                  <Input
                                    style={inputfiled_style}
                                    value={selectedValues.sperm_source || "Fresh"}
                                    onClick={() => showModal("sperm_type")}
                                    readOnly
                                    placeholder="Select Option"
                                  
                                  />
                              </Form.Item>
                            </Col>
                        </>
                      }

                      {
                         (form.getFieldValue('sperm_type') === 'Frozen' && form.getFieldValue('sperm_source') === 'Patient') &&
                         ( <Col span={12} style={{ marginTop: "-35px" }}>
                            <Form.Item
                                label={
                                  <span
                                    style={{
                                      display: "inline-block",
                                      width: "80px",
                                      textAlign: "left",
                                    }}
                                  >
                                    Frozen Date:
                                  </span>
                                }
                                name="frozen_date"
                                validateTrigger="onBlur"
                                layout="horizontal"
                                style={{
                                  margin: "0",
                                  marginBottom: "10px",
                                  position: "relative",
                                  top: "8px",
                                }}
                                colon={false}
                              
                              >
                                {/* <DatePicker  style={inputfiled_style}/> */}
                                {/* <Input
                                  style={inputfiled_style}
                                  onClick={() => handleOpenCalendar("frozen_date")}
                                  readOnly
                                /> */}

                                <DatePicker
                                  format={{
                                    format: 'MM/DD/YYYY',
                                    type: 'mask',
                                  }}
                                  onChange={(dateString) => onDateChangeFields('frozen_date',  dateString)}
                                  style={{ 
                                    width: '100%', 
                                    padding: '5px 20px',
                                    borderRadius: '0px',
                                    border: "none",
                                    background: "transparent",
                                    borderBottom: "1px solid #CACACA",
                                    outline: "none",
                                    position: "relative",
                                    top: "-4px",
                                    fontWeight: '700',
                                    fontSize: '12.5px',
                                    textAlign: 'center',
                                    
                                  }}
                                />
                              </Form.Item>
                            </Col>
                         )
                      }


                          <Col span={24} style={{ marginTop: '-25px'}}>
                            <Row gutter={10}>
                                <Col span={10} style={{ marginTop: "0px" }}>
                                      <Form.Item 
                                      label={
                                        <span
                                          style={{
                                            
                                            display: "inline-block",
                                            width: "55px",
                                            textAlign: "left",
                                          }}
                                        >
                                          Serology:
                                        </span>
                                      }
                                      name="sperm_serology"
                                      colon={false}
                                      initialValue={"N/A"}
                                      
                                      >
                                        <Input
                                          style={inputfiled_style}
                                          value={selectedValues.sperm_serology}
                                          onClick={() => showModal("sperm_serology")}
                                          readOnly
                                          placeholder="Select Option"
                                      
                                        />
                                      </Form.Item>
                                </Col>
                                {
                                  form.getFieldValue('sperm_serology') == 'Biohazard' &&
                                  <Col span={14} style={{ marginTop: "0px" }}>
                                      <Form.Item 
                                      label={
                                        <span
                                          style={{
                                            
                                            display: "inline-block",
                                            width: "110px",
                                            textAlign: "left",
                                          }}
                                        >
                                          Serology Positive:
                                        </span>
                                      }
                                      name="sperm_serology_positive"
                                      colon={false}
                                      
                                      >
                                        <Input
                                          style={inputfiled_style}
                                          value={selectedValues.sperm_serology_positive}
                                          onClick={() => showModal("sperm_serology_positive")}
                                          readOnly
                                          placeholder="Select Option"
                                        />
                                      </Form.Item>
                                </Col>
                                }
                            </Row>
                          </Col>
                           

                            {
                              form.getFieldValue('sperm_serology_positive') == 'Other' &&
                              form.getFieldValue('sperm_serology') === 'Biohazard' &&
                              <Col span={24} style={{ marginTop: "-25px" }}>
                                  <Form.Item 
                                  label={
                                    <span
                                      style={{
                                        display: "inline-block",
                                        width: "100%",
                                        textAlign: "left",
                                      }}
                                    >
                                      Add a Note:
                                    </span>
                                  }
                                  name="sperm_note"
                                  layout="horizontal" 
                                  colon={false}
                                  >
                                    {/* <TextArea
                                      style={{
                                        ...inputfiled_style_text_box,
                                        
                                      }}
                                    /> */}
                                    <Input style={inputfiled_style} />
                                  </Form.Item>
                            </Col>
                            }
                      </Row>
                    </Col>
            </Row>
            </div>
          </Col>
          {/* 5th col  */}
          <Col span={4} className="gutter-row">
            <div style={innner_con}>
            <Row >
                <Col span={24} style={headingbackgroundColor}>
                  <Title level={5} style={{ ...title_s_style_p }} >
                    Thaw & Fert:
                  </Title>
                </Col>

                <Col span={24} style={conBodystyle}>
                  <Row gutter={10}>
                    <Col span={24} style={{...col_input_spaceing, marginTop: '0px'}}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "70px",
                              textAlign: "left",
                            }}
                          >
                            Thaw Date:
                          </span>
                        }
                        name="thaw_date"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                        
                      >
                      { /* <Input
                          style={inputfiled_style}
                          onClick={() => handleOpenCalendar("thaw_date")}
                          readOnly
                        />
                        */}

                      <DatePicker
                            format={{
                              format: 'MM/DD/YYYY',
                              type: 'mask',
                            }}
                            onChange={(dateString) => onDateChangeFields('thaw_date',  dateString)}
                            style={{ 
                              width: '100%', 
                              padding: '5px 20px',
                              borderRadius: '0px',
                              border: "none",
                              background: "transparent",
                              borderBottom: "1px solid #CACACA",
                              outline: "none",
                              position: "relative",
                              top: "-4px",
                              fontWeight: '700',
                              fontSize: '12.5px',
                              textAlign: 'center',
                              
                            }}
                          />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={{ ...col_input_spaceing }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "52px",
                              textAlign: "left",
                            }}
                          >
                            Thawed:
                          </span>
                        }
                        name="total_thawed_eggs"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={{ ...col_input_spaceing }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "52px",
                              textAlign: "left",
                            
                            }}
                          >
                            Survived:
                          </span>
                        }
                        name="survived"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={{ ...col_input_spaceing }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "30px",
                              textAlign: "left",
                              fontWeight: "bold",
                              margin: "0",
                              padding: "0",
                            }}
                          >
                            #MII:
                          </span>
                        }
                        name="mii"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={{ ...col_input_spaceing }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "30px",
                              fontWeight: "bold",
                              textAlign: "left",
                            }}
                          >
                            ICSI:
                          </span>
                        }
                        name="icsi"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={{ ...col_input_spaceing }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "30px",
                              textAlign: "left",
                              fontWeight: "bold",
                              margin: "0",
                              padding: "0",
                            }}
                          >
                            2PN:
                          </span>
                        }
                        name="two_pn"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={{ ...col_input_spaceing }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "30px",
                              textAlign: "left",
                              fontWeight: "bold",
                              margin: "0",
                              padding: "0",
                            }}
                          >
                            1PN:
                          </span>
                        }
                        name="one_pn"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
            </Row>
            </div>
          </Col>
        </Row>

        {/* 2nd row  */}
        <Row gutter={8} className="first-main-con" style={{ marginTop: "10px" }} >
          {/* 1st col  */}
          <Col span={3} className="gutter-row">
            <div style={innner_con_3_row_2}>
              <Row>
                <Col span={24} style={{ marginTop: "5px" }}>
                  <Form.Item name="bx_check_box">
                    <Radio.Group onChange={handleBxChange} value={selectedBxOption} style={{ width: "100%" , display: 'flex', flexWrap: 'wrap',  justifyContent: 'flex-start' , gap: '10px 10px' }}>
                      <Radio value="BX ALL" style={{ fontWeight: 'bold'}}>BX ALL</Radio>
                      <Radio value="BX up to" style={{ fontWeight: 'bold'}}>BX up to</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                {selectedBxOption === "BX up to" && (
                <>
                  <Col span={24} style={{ marginTop: "-10px" }}>
                    <Form.Item
                      name="bx_up_to"
                      validateTrigger="onBlur"
                      layout="horizontal"
                    >
                      <Input style={inputfiled_style} />
                    </Form.Item>
                  </Col>
                  <Col span={24} style={{ marginTop: "-40px" }}>
                    <Title
                      level={5}
                      style={{ fontWeight: "400", fontSize: "14px" }}
                    >
                      & Cryo remaining embroyos w/o biopsy
                    </Title>
                  </Col>
                  <Col span={24} style={{ marginTop: "0px" }}>
                    <Form.Item name="bx_yes_no">
                    <Radio.Group className="radio-button-bx-yes-no" style={{ width: "100%" , display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-around' , gap: '0px 10px' }}>
                        <Radio value="Yes" style={{ fontWeight: 'bold'}}>Yes</Radio>
                        <Radio value="No" style={{ fontWeight: 'bold'}}>No</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </>

                )}
              </Row>
            </div>
          </Col>

          {/* 2nd col  */}
          <Col span={7} className="gutter-row">
            <div style={innner_con_new_2}>
              <Row >
                <Col span={24} style={headingbackgroundColor}>
                  <Title level={5} style={{ ...title_s_style_p }}>
                    PGS / PGD:
                  </Title>
                </Col>

                <Col span={24} style={conBodystyle}>
                  <Row gutter={10}> 
                    <Col span={13} style={{ marginTop: '5px' }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "62px",
                              textAlign: "left",
                            }}
                          >
                            PGD Lab:
                          </span>
                        }
                        name="pgd_lab"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input
                          style={inputfiled_style}
                          value={selectedValues.pgd_lab}
                          onClick={() => showModal("pgd_lab")}
                          readOnly
                          placeholder="Select Option"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={11} style={{ marginTop: '5px' }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "28px",
                              textAlign: "left",
                            }}
                          >
                            Test:
                          </span>
                        }
                        name="pgs_test"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input
                          style={inputfiled_style}
                          value={selectedValues.pgs_test}
                          onClick={() => showModal("pgs_test")}
                          readOnly
                          placeholder="Select Option"
                        />
                      </Form.Item>
                    </Col>

                    {
                      form.getFieldValue('pgd_lab') == 'Other' &&
                      <Col span={24} style={{ marginTop: "-30px" }}>
                            <Form.Item 
                            label={
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "75px",
                                  textAlign: "left",
                                }}
                              >
                                Add a Note:
                              </span>
                            }
                            name="pgs_note"
                            layout="horizontal" 
                            colon={false}
                            >
                              
                              <Input style={inputfiled_style}/>
                            </Form.Item>
                      </Col>
                    }



                    <Col span={9} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "58px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Day 5 Bx:
                          </span>
                        }
                        name="day_5_bx"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={9} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "50px",
                              textAlign: "left",
                            }}
                          >
                            Bx Emb:
                          </span>
                        }
                        name="day_5_bx_emb"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                        onChange={(e) => handleInputChangeandSetvalue(e, 'icsi_emb')}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={6} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "22px",
                                textAlign: "left",
                              }}
                            >
                              Obs:
                            </span>
                          }
                          name="day_5_bx_obs"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                          onChange={(e) => handleInputChangeandSetvalue(e, 'icsi_obs')}
                        >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>


                    <Col span={9} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "58px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Day 6 Bx:
                          </span>
                        }
                        name="day_6_bx"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={9} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "50px",
                              textAlign: "left",
                            }}
                          >
                            Bx Emb:
                          </span>
                        }
                        name="day_6_bx_emb"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                        onChange={(e) => handleInputChangeandSetvalue(e, 'icsi_emb')}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={6} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "22px",
                                textAlign: "left",
                              }}
                            >
                              Obs:
                            </span>
                          }
                          name="day_6_bx_obs"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                          onChange={(e) => handleInputChangeandSetvalue(e, 'icsi_obs')}
                        >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>


                    <Col span={9} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "58px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Day 7 Bx:
                          </span>
                        }
                        name="day_7_bx"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={9} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "50px",
                              textAlign: "left",
                            }}
                          >
                            Bx Emb:
                          </span>
                        }
                        name="day_7_bx_emb"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                        onChange={(e) => handleInputChangeandSetvalue(e, 'icsi_emb')}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={6} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "22px",
                                textAlign: "left",
                              }}
                            >
                              Obs:
                            </span>
                          }
                          name="day_7_bx_obs"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                          onChange={(e) => handleInputChangeandSetvalue(e, 'icsi_obs')}
                        >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    
                    <Col span={24} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "58px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Total Bx:
                          </span>
                        }
                        name="pgs_total_bx"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                
              </Row>
            </div>
          </Col>

          {/* 3rd col  */}
          <Col span={3} className="gutter-row">
            <div style={innner_con_new_2}>
                  <Row >

                    <Col span={24} style={headingbackgroundColor}>
                      <Title level={5} style={{ ...title_s_style_p }}>
                        Sperm Prep:
                      </Title>
                    </Col>

                    <Col span={24} style={conBodystyle}>
                      <Row>
                      <Col span={24} style={{ marginTop: '5px' }}>
                      <Form.Item name="sperm_prep">
                        {/* <Radio.Group className="radio-button-sperm-prep" style={{ width: "100%" , display: 'flex', flexWrap: 'wrap',  justifyContent: 'flex-start' , gap: '5px 4rem' }}>
                          <Radio value="Wash" style={{ minWidth: '104px' , fontWeight: 'bold' }}>Wash</Radio>
                          <Radio value="Gradient" style={{ minWidth: '104px'  , fontWeight: 'bold'}}>Gradient</Radio>
                          <Radio value="Swim up" style={{ minWidth: '104px'  , fontWeight: 'bold' }}>Swim up</Radio>
                          <Radio value="TESE prep" style={{ minWidth: '104px'  , fontWeight: 'bold' }}>TESE prep</Radio>
                        </Radio.Group> */}
                        <Input
                          style={inputfiled_style}
                          value={selectedValues.sperm_prep}
                          onClick={() => showModal("sperm_prep")}
                          readOnly
                          placeholder="Select Option"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24} className="spermprem-tabview" style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                            }}
                          >
                            By:
                          </span>
                        }
                        name="sperm_prep_by"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={24} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                            }}
                          >
                            Time:
                          </span>
                        }
                        name="sperm_prep_time"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input
                          style={inputfiled_style}
                          onClick={() =>
                            handleOpenTimePicker("sperm_prep_time")
                          }
                          readOnly
                        />
                      </Form.Item>
                    </Col>
                      </Row>
                    </Col>


                    
                  </Row>
            </div>
          </Col>
       
          {/* 4th col  */}
          <Col span={11} className="gutter-row">
            <div style={innner_con_3_row_2}>

                  <Row gutter={20}>
                    <Col span={6} style={{ marginTop: "10px" }}>
                      <Title level={5} style={{...title_xs_style}}>
                        Volume:
                      </Title>
                      <Title level={5} style={{...title_xs_style, ...title_xs_style_spaceing}}>
                        Count:
                      </Title>
                      <Title level={5} style={{...title_xs_style, ...title_xs_style_spaceing}}>
                        Motility:
                      </Title>
                      <Title level={5} style={{...title_xs_style, ...title_xs_style_spaceing}}>
                        Progressive:
                      </Title>
                    </Col>

                    <Col span={6}>
                      <Row gutter={10}>
                        <Col span={24}>
                          <Title
                            level={5}
                            style={{
                              ...title_s_style,
                              position: "relative",
                              left: "-3rem",
                              width: "242px",
                            }}

                            className="title-semen"
                          >
                            Fresh Semen or before Freezing
                          </Title>
                        </Col>

                        <Col span={24} style={{ }}>
                          <Form.Item
                            name="fs_ml"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                    
                                  }}
                                >
                                  ml
                                </span>
                              }

                              
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ marginTop: '-16px' }}>
                          <Form.Item
                            name="fs_ml_10"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  x10¹ ml
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ marginTop: '-16px' }}>
                          <Form.Item
                            name="fs_percentage"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  %
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={24} style={{ marginTop: "-25px" }}>
                          <Form.Item name="fs_progressive">
                            <Radio.Group className="ration-button-sperm-details" style={{ width: "100%", display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                              <Radio value="PR" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>PR</span></Radio>
                              <Radio value="NP" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>NP</span></Radio>
                              <Radio value="IM" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>IM</span></Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={6}>
                      <Row gutter={10}>
                        <Col span={24}>
                          <Title
                            level={5}
                            style={{ ...title_s_style, textAlign: "right" }}
                          >
                            After Thawing
                          </Title>
                        </Col>
                        <Col span={24} style={{ }}>
                          <Form.Item
                            name="at_ml"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  ml
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ marginTop: '-16px'}}>
                          <Form.Item
                            name="at_ml_10"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  x10¹ ml
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ marginTop: '-16px'}}>
                          <Form.Item
                            name="at_percentage"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  %
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={24} style={{ marginTop: "-25px" }}>
                          <Form.Item name="at_progressive">
                            <Radio.Group className="ration-button-sperm-details" style={{ width: "100%", display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                              <Radio value="PR" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>PR</span></Radio>
                              <Radio value="NP" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>NP</span></Radio>
                              <Radio value="IM" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>IM</span></Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={6}>
                      <Row gutter={10}>
                        <Col span={24}>
                          <Title
                            level={5}
                            style={{ ...title_s_style, textAlign: "right" }}
                          >
                            Final
                          </Title>
                        </Col>

                        <Col span={24} style={{}}>
                          <Form.Item
                            name="f_ml"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  ml
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ marginTop: '-16px'}}>
                          <Form.Item
                            name="f_ml_10"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  x10¹ ml
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ marginTop: '-16px'}}>
                          <Form.Item
                            name="f_percentage"
                            validateTrigger="onBlur"
                            layout="horizontal"
                          >
                            <Input
                              addonAfter={
                                <span
                                  style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                  }}
                                >
                                  %
                                </span>
                              }
                            />
                          </Form.Item>
                        </Col>

                        <Col span={24} style={{ marginTop: "-25px" }}>
                          <Form.Item name="f_progressive">
                            <Radio.Group className="ration-button-sperm-details" style={{ width: "100%", display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                              <Radio value="PR" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>PR</span></Radio>
                              <Radio value="NP" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>NP</span></Radio>
                              <Radio value="IM" style={{ minWidth: '39px'  }}><span style={{ marginLeft: '-5px'}}>IM</span></Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
            </div>
          </Col>
        </Row>

        {/* 3rd row  */}
        <Row
          gutter={8}
          className="first-main-con"
          style={{ marginTop: "10px" }}
        >
          {/* 1st col  */}
          <Col span={10} className="gutter-row">
            <div style={innner_con_new_3}>
              <Row >
                <Col span={24} style={headingbackgroundColor}>
                  <Title level={5} style={{...title_s_style_p}}>
                    Cryopreservation:
                  </Title>
                </Col>
                


                <Col span={24} style={conBodystyle}>
                  <Row gutter={10}>
                      <Col span={14} style={{ marginTop: '2px' }}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "110px",
                              textAlign: "left",
                            }}
                          >
                            Consent Date:
                          </span>
                        }
                        name="consent_date"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        {/* <Input
                          style={inputfiled_style}
                          onClick={() => handleOpenCalendar("consent_date")}
                          readOnly
                        /> */}

                            <DatePicker
                                format={{
                                  format: 'MM/DD/YYYY',
                                  type: 'mask',
                                }}
                                onChange={(dateString) => onDateChangeFields('consent_date',  dateString)}
                                style={{ 
                                  width: '100%', 
                                  padding: '5px 20px',
                                  borderRadius: '0px',
                                  border: "none",
                                  background: "transparent",
                                  borderBottom: "1px solid #CACACA",
                                  outline: "none",
                                  position: "relative",
                                  top: "-6px",
                                  fontWeight: '700',
                                  fontSize: '12.5px',
                                  textAlign: 'center',
                                  
                                }}
                              />
                      </Form.Item>
                      </Col>
                      <Col span={10} style={{ marginTop: '2px' }}>
                        <Form.Item name="cryo_status">
                          <Radio.Group style={{ width: "100%", justifyContent: "space-evenly",  display: "flex", gap: '20px'}}>
                            <Radio value="Accept" style={{ fontWeight: 'bold'}}>Accept</Radio>
                            <Radio value="Decline" style={{ fontWeight: 'bold'}}>Decline</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>

                      <Col span={24} style={col_input_spaceing}>
                        <Title level={5} style={{...title_s_style_p}}>
                          Cell Stage:
                        </Title>
                      </Col>



                      <Col span={8} style={{ marginTop: '-5px'}}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "50px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                            Others:
                            </span>
                          }
                          name="cell_stage"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                                <Input
                                    style={inputfiled_style}
                                    value={selectedValues.cell_stage}
                                    onClick={() => showModal("cell_stage")}
                                    readOnly
                                    placeholder="Select Option"
                                  />
                        </Form.Item>
                      </Col>
                      <Col span={8} style={{ marginTop: '-5px'}}>
                      {
                        form.getFieldValue('cell_stage') != '' &&
                        <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "80px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Enter Value:
                          </span>
                        }
                        name="others_value"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                      }
                        
                      </Col>
                     
                     
                      <Col span={8} style={{ marginTop: '-5px'}}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "40px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              Total:
                            </span>
                          }
                          name="cryo_total"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                          <Input style={inputfiled_style} />
                        </Form.Item>
                      </Col>
                      <Col span={8} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "25px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              D5:
                            </span>
                          }
                          name="cryo_d5"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                          <Input style={inputfiled_style} />
                        </Form.Item>
                      </Col>
                      <Col span={8} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "25px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              D6:
                            </span>
                          }
                          name="cryo_d6"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                          <Input style={inputfiled_style} />
                        </Form.Item>
                      </Col>
                      <Col span={8} style={col_input_spaceing}>
                        <Form.Item
                          label={
                            <span
                              style={{
                                display: "inline-block",
                                width: "25px",
                                textAlign: "left",
                                fontWeight: "bold",
                              }}
                            >
                              D7:
                            </span>
                          }
                          name="cryo_d7"
                          validateTrigger="onBlur"
                          layout="horizontal"
                          colon={false}
                        >
                          <Input style={inputfiled_style} />
                        </Form.Item>
                      </Col>
                  </Row>
                </Col>


                
                
                
              </Row>
            </div>
          </Col>

          {/* 2nd col  */}
          <Col span={9} className="gutter-row">
            <div style={innner_con_3_row_3}>
              <Row gutter={10} >
                <Col span={12}>
                  <Title level={5} style={{...title_s_style, marginTop: "5px"}}>
                    ET Day:
                  </Title>
                </Col>
                <Col span={12} style={{ marginTop: "2px" }}>
                  <Form.Item name="et_day">
                    <Radio.Group style={{ 
                        width: "100%",
                        justifyContent: "space-evenly",
                        display: "flex",
                        }}>
                      <Radio value="D3" style={{ fontWeight: 'bold'}}>D3</Radio>
                      <Radio value="D5" style={{ fontWeight: 'bold'}}>D5</Radio>
                      <Radio value="D6" style={{ fontWeight: 'bold'}}>D6</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>

                <Col span={12} style={{ marginTop: "-25px" }}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "65px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        #ET:
                      </span>
                    }
                    name="et"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ marginTop: "-22px" }}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "65px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        #ET MD:
                      </span>
                    }
                    name="et_md"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={24} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "65px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        Catheter:
                      </span>
                    }
                    name="et_catheter"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ marginTop: '-25px'}}>
                  <Title level={5} style={title_s_style_center}>
                    Embryo Retaining:
                  </Title>
                </Col>
                <Col
                  span={12}
                  style={{
                    marginTop: "-25px",
                    
                  }}
                >
                  <Form.Item name="emb_retaining">
                    <Radio.Group
                      className="radio-emb-retain"
                      style={{
                        width: "100%",
                        justifyContent: "space-evenly",
                        display: "flex",
                        marginLeft: '-30px'
                        
                      }}
                    >
                      <Radio value="Yes" style={{ fontWeight: 'bold'}}>Yes</Radio>
                      <Radio value="No" style={{ fontWeight: 'bold'}}>No</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>

          {/* 3rd col  */}
          <Col span={5} className="gutter-row">
            <div style={innner_con_3_row_3}>
              <Row gutter={10}>
                <Col span={24}>
                  <Title level={5} style={{...title_s_style, marginTop: "5px"}}>
                    Embryo Transfer ID Check:
                  </Title>
                </Col>
                <Col span={24} style={{...col_input_top_spaceing, marginTop: '-6px'}}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        Date:
                      </span>
                    }
                    name="emb_date"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                    
                  >
                    {/* <DatePicker  style={inputfiled_style}/> */}
                    {/* <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("emb_date")}
                      readOnly
                    /> */}

                      <DatePicker
                        format={{
                          format: 'MM/DD/YYYY',
                          type: 'mask',
                        }}
                        onChange={(dateString) => onDateChangeFields('emb_date',  dateString)}
                        style={{ 
                          width: '100%', 
                          padding: '5px 20px',
                          borderRadius: '0px',
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #CACACA",
                          outline: "none",
                          position: "relative",
                          top: "-4px",
                          fontWeight: '700',
                          fontSize: '12.5px',
                          textAlign: 'center',
                          
                        }}
                      />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ ...col_input_top_spaceing, marginTop: '-20px' }}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        Time:
                      </span>
                    }
                    name="emb_time"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenTimePicker("emb_time")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        Emb:
                      </span>
                    }
                    name="emb_emb"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={12} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        Obs:
                      </span>
                    }
                    name="emb_obs"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* table Container  */}
        <Row
          gutter={8}
          className="first-main-con"
          style={{ marginTop: "10px" }}
        >
          <Col span={24} className="gutter-row">
            <div style={table_container_header}>
              <Row gutter={15}>
                <Col span={7} style={{ padding: "5px" }}>
                  <Row>
                    <Col span={24} style={col_input_top_spaceing}>
                      <Title level={5} style={title_s_style}>
                        INSEM / ICSI ID Check:
                      </Title>
                    </Col>
                  </Row>
                </Col>

                <Col span={17} style={{ padding: "5px" }}>
                  <Row gutter={15}>
                    <Col span={6} style={col_input_top_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Emb:
                          </span>
                        }
                        name="icsi_emb"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={6} style={col_input_top_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Obs:
                          </span>
                        }
                        name="icsi_obs"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={6} style={col_input_top_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Date:
                          </span>
                        }
                        name="icsi_date"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        {/* <DatePicker  style={inputfiled_style}/> */}
                        <Input
                          style={inputfiled_style}
                          onClick={() => handleOpenCalendar("icsi_date")}
                          readOnly
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6} style={col_input_top_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "35px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Time:
                          </span>
                        }
                        name="icsi_time"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input
                          style={inputfiled_style}
                          onClick={() => handleOpenTimePicker("icsi_time")}
                          readOnly
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "170px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Insemination Sperm #:
                          </span>
                        }
                        name="insemination_sperm"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
                      </Form.Item>
                    </Col>
                    <Col span={12} style={col_input_spaceing}>
                      <Form.Item
                        label={
                          <span
                            style={{
                              display: "inline-block",
                              width: "170px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            Medium Volume #:
                          </span>
                        }
                        name="medium_volume"
                        validateTrigger="onBlur"
                        layout="horizontal"
                        colon={false}
                      >
                        <Input style={inputfiled_style} />
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
                          borderColor: "#CACACA",
                        },
                      },
                    }}
                  >
                    <Space>
                      <Table
                        className="custom-table-daily-report"
                        columns={columns}
                        dataSource={data}
                        bordered
                        size="middle"
                        pagination={false}
                        components={{
                          body: {
                            cell: (props) => <td {...props} />,
                          },
                        }}
                      />
                      {/* <TableCom tableData = {patient}/> */}
                    </Space>
                  </ConfigProvider>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* 4th row  */}
        <Row
          gutter={8}
          className="first-main-con"
          style={{ marginTop: "10px" }}
        >
          {/* 1st col  */}
          <Col span={5} className="gutter-row">
            <div style={innner_con_4_row_4}>
              <Row gutter={10}>
                <Col span={24} style={{ marginTop: '-8px'}}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        Egg frozen date:
                      </span>
                    }
                    name="egg_frozen_date"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("egg_frozen_date")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ marginTop: '-24px' }}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        Egg frozen by (Donor Bank):
                      </span>
                    }
                    name="egg_frozen_by"
                    validateTrigger="onBlur"
                    layout="vertical"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ ...col_input_spaceing , marginTop: '10px'}}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Date:
                      </span>
                    }
                    name="thaw_date_insert"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                   
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("thaw_date_insert")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ ...col_input_spaceing , marginTop: '10px'}}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Time:
                      </span>
                    }
                    name="thaw_date_time"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenTimePicker("thaw_date_time")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ ...col_input_spaceing }}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Emb:
                      </span>
                    }
                    name="thaw_emb"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ ...col_input_spaceing }}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Obs:
                      </span>
                    }
                    name="obs"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                
              </Row>
            </div>
          </Col>

          {/* 2nd col  */}
          <Col span={5} className="gutter-row">
            <div style={innner_con_4_row_4}>
              <Row gutter={10}>
                <Col span={24} style={col_input_top_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "100px",
                          textAlign: "left",
                        }}
                      >
                        Thaw Medium:
                      </span>
                    }
                    name="thaw_medium"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    initialValue={"Kitazato"}
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={24} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "100px",
                          textAlign: "left",
                        }}
                      >
                        Lot:
                      </span>
                    }
                    name="lot"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={24} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "100px",
                          textAlign: "left",
                        }}
                      >
                        Exp Date:
                      </span>
                    }
                    name="exp_date"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("exp_date")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "-25px", marginBottom: "50px" }}
                >
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "90px",
                          textAlign: "left",
                        }}
                      >
                        Comment:
                      </span>
                    }
                    name="comment"
                    validateTrigger="onBlur"
                    layout="vertical"
                    colon={false}
                  >
                    <TextArea
                      style={{
                        ...inputfiled_style_text_box,
                        
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>

          {/* 3rd col  */}
          <Col span={6} className="gutter-row">
            <div style={innner_con_4_row_4}>
              <Row gutter={10}>
                <Col span={24}>
                  <Title level={5} style={title_s_style}>
                    Ver 122921
                  </Title>
                </Col>

                {/* <Col span={16} style={col_input_top_spaceing2}>
                  <Form.Item name="d1_medium_change">
                    <Radio.Group style={{ width: "400px" }}>
                      <Radio value="D1 Medium Change">D1 Medium Change</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col> */}
                <Col span={24} style={col_input_top_spaceing2}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "230px",
                          textAlign: "left",
                        }}
                      >
                       D1 Medium Change Initial:
                      </span>
                    }
                    name="d1_medium_change_initial"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>

                {/* <Col span={16} style={col_input_checkbox3_spaceing}>
                  <Form.Item name="d3_medium_change">
                    <Radio.Group style={{ width: "400px" }}>
                      <Radio value="D3 Medium Change">D3 Medium Change</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col> */}
                <Col span={24} style={col_input_spaceing_3}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "230px",
                          textAlign: "left",
                        }}
                      >
                      D3/D4 Medium Change Initial:
                      </span>
                    }
                    name="d3_medium_change_initial"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>

                {/* <Col span={16} style={col_input_checkbox3_spaceing}>
                  <Form.Item name="worksheet_final_checking">
                    <Radio.Group style={{ width: "400px" }}>
                      <Radio value="Worksheet Final Checking">
                        Worksheet Final Checking
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col> */}
                <Col span={24} style={col_input_spaceing_3}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "230px",
                          textAlign: "left",
                        }}
                      >
                      Worksheet Final Checking Initial:
                      </span>
                    }
                    name="worksheet_final_checking_initial"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
{/* 
                <Col span={16} style={col_input_checkbox3_spaceing}>
                  <Form.Item name="scan">
                    <Radio.Group style={{ width: "400px" }}>
                      <Radio value="Scan">Scan</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col> */}
                <Col span={24} style={col_input_spaceing_3}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "230px",
                          textAlign: "left",
                        }}
                      >
                      Scan Initial:
                      </span>
                    }
                    name="scan_initial"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>

          {/* 4th col  */}
          <Col span={8} className="gutter-row">
            <div style={innner_con_4_row_4}>
              <Row
                gutter={10}>
                <Col span={24}>
                  <Title level={5} style={title_s_style}>
                    Kevin Oum, PhD, HCLD, CC/EMB Laboratory Director
                  </Title>
                </Col>

                <Col span={10} style={col_input_top_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "110px",
                          textAlign: "left",
                        }}
                      >
                        Sperm Disc By:
                      </span>
                    }
                    name="sperm_disc_by"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_top_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Date:
                      </span>
                    }
                    name="sperm_disc_by_date"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("sperm_disc_by_date")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_top_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Time:
                      </span>
                    }
                    name="sperm_disc_by_time"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenTimePicker("sperm_disc_by_time")}
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col span={10} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "110px",
                          textAlign: "left",
                        }}
                      >
                        Oocyte Disc By:
                      </span>
                    }
                    name="oocyte_disc_by"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Date:
                      </span>
                    }
                    name="oocyte_disc_by_date"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    {/* <DatePicker  style={inputfiled_style}/> */}
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("oocyte_disc_by_date")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Time:
                      </span>
                    }
                    name="oocyte_disc_by_time"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() =>
                        handleOpenTimePicker("oocyte_disc_by_time")
                      }
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col span={10} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "110px",
                          textAlign: "left",
                        }}
                      >
                        Embryo Disc By:
                      </span>
                    }
                    name="embryo_disc_by"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Date:
                      </span>
                    }
                    name="embryo_disc_by_date"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    {/* <DatePicker  style={inputfiled_style}/> */}
                    <Input
                      style={inputfiled_style}
                      onClick={() => handleOpenCalendar("embryo_disc_by_date")}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        Time:
                      </span>
                    }
                    name="embryo_disc_by_time"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input
                      style={inputfiled_style}
                      onClick={() =>
                        handleOpenTimePicker("embryo_disc_by_time")
                      }
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col span={10} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "110px",
                          textAlign: "left",
                        }}
                      >
                        Dish Prep By:
                      </span>
                    }
                    name="dish_prep_by"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        D1:
                      </span>
                    }
                    name="dish_prep_by_d1"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    {/* <DatePicker  style={inputfiled_style}/> */}
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
                <Col span={7} style={col_input_spaceing}>
                  <Form.Item
                    label={
                      <span
                        style={{
                          display: "inline-block",
                          width: "35px",
                          textAlign: "left",
                        }}
                      >
                        D3/4:
                      </span>
                    }
                    name="dish_prep_by_d3/4"
                    validateTrigger="onBlur"
                    layout="horizontal"
                    colon={false}
                  >
                    <Input style={inputfiled_style} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Form>

{/*  Footer design */}
      <Row gutter={24} style={footer_style}>
        <Col
          span={14}
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        ></Col>
        <Col
          span={5}
          style={{
            color: "red",
            display: "flex",
            alignItems: "right",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="primary"
            danger
            ghost
            style={{
              textAlign: "center",
              margin: "0",
              border: "1px solid #FFE6F0",
              color: "#EF83B1",
              fontWeight: "bold",
              width: "360px",
              height: "50px",
              borderRadius: "10px",
              background: "#FFE6F0",
            }}
            onClick={handleClose}
          >
            <span style={{ fontSize: "18px" }}>Close</span>
          </Button>
        </Col>
        <Col
          span={5}
          style={{
            color: "red",
            display: "flex",
            alignItems: "right",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="primary"
            danger
            ghost
            style={{
              textAlign: "center",
              margin: "0",
              background: "rgb(138, 98, 165)",
              border: "1px solid rgb(138, 98, 165)",
              color: "#fff",
              fontWeight: "bold",
              width: "360px",
              height: "50px",
              borderRadius: "10px",
            }}
            onClick={handleSubmit}
          >
            <span style={{ fontSize: "18px" }}>Save</span>
          </Button>
        </Col>
      </Row>
{/* All Modal */}
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#8a62a5",
              borderRadius: 8,
              colorBorder: "#8a62a5",
              fontSize: 16,
              controlHeight: 50,
              fontWeightStrong: 700,
            },
            components: {
              Button: {
                colorPrimary: "#8a62a5",
                borderRadius: 18,
                controlHeight: 30,
              },
              Input: {
                borderRadius: 30,
                controlHeight: 50,
                fontSize: 20,
                paddingInline: 40,
              },
              List: {
                colorBorder: "#8a62a5",
              },
              Modal: {
                borderRadius: 10,
              },
              Table: {
                headerBg: "#fcf8ff",
                headerColor: "#545454",
                footerColor: "#545454",
                borderColor: "#e8e8e8",
              },
            },
          }}
        >
          {/* popup calender */}
          <Modal
            title={
              <Title level={5} style={{ color: "#8a62a5", margin: 0 }}>
                Select a Date
              </Title>
            }
            centered
            open={openCalender}
            onOk={() => setOpenCalender(false)}
            onCancel={() => setOpenCalender(false)}
            width={1000}
            footer={null}
          >
            <Calendar fullscreen={false} onSelect={onCalenderSelect} />
          </Modal>
          {/* popup time */}
          <Modal
            title={
              <Title level={5} style={{ color: "#8a62a5", margin: 0 }}>
                Select a Time
              </Title>
            }
            centered
            open={openTime}
            onOk={() => setOpenTime(false)}
            onCancel={() => setOpenTime(false)}
            width={500}
            footer={null}
          >
            <TimePicker
              defaultValue={dayjs(selectedRowData?.time || "00:00", timeFormat)}
              format={timeFormat}
              onChange={onTimeSelect}
              style={{ width: "100%" }}
            />
          </Modal>
          {/* popup for table */}
          <Modal
            title={
              <Title level={5} style={{ color: "#8a62a5", margin: 0 }}>
                Select {dayname} - {cellname}
              </Title>
            }
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
            title={
              <Title
                level={5}
                style={{ color: "#8a62a5", margin: 0 }}
              >{`Select ${
                currentFieldtable
                  ? currentFieldtable.charAt(0).toUpperCase() +
                    currentFieldtable.slice(1)
                  : ""
              }`}</Title>
            }
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
            title={
              <Title level={5} style={{ color: "#8a62a5", margin: 0 , fontSize: '25px'}}>
                {modalTitle}
              </Title>
            }
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
            width={600}
            className='selectoptionmodal'
            
           
          >

            <Row gutter={[15, 10]} style={{   padding: '60px 40px 50px 40px'  }}>

              <Col span={24}>
                <Title level={5} style={{ color: "rgb(0 0 0 / 49%)", margin: 0 , fontSize: '18px' , }}>
                  Choose an option
                </Title>
              </Col>
              <Col span={24}>

                  <Select
                  style={{ width: "100%" }}
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
              </Col>
            </Row>

            
          </Modal>
          
      </ConfigProvider>
      {/* Row modal------------>>>>> */}
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#8a62a5",
              borderRadius: 8,
              colorBorder: "#8a62a5",
              fontSize: 14,
              controlHeight: 35,
              fontWeightStrong: 700,
            },
            components: {
              Input: {
                borderRadius: 8,
                controlHeight: 35,
                fontSize: 14,
                paddingInline: 20,
                fontWeightStrong: 700,
              },
              Modal: {
                borderRadius: 10,
              },
            },
          }}
        >
          <Modal
            title={
              <Title
                level={5}
                style={{ color: "#8a62a5", margin: 0 }}
              >{`Edit Egg Thaw Result for ${selectedRecord?.day}`}</Title>
            }
            centered
            open={rowModal}
            onCancel={() => setRowModal(!rowModal)}
            footer={null}
            width={700}
          >
            {rendertableModalContents()}
          
          </Modal>

      </ConfigProvider>

    </>
  );
}

export default FormCom;
