import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, notification } from "antd";
import DateAndTimeSelect from "./DateAndTimeSelect";
import {
  CarOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  FolderOpenOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import DetailsBox from "./DetailsBox";
import TripDetails from "./TripDetails";

const Home = () => {
  const [selectedFromTime, setSelectedFromTime] = useState("");
  const [selectedToTime, setSelectedToTime] = useState("");

  const onExportClick = () => {
    openNotification("Data Export Succesfully");
  };

  const onTimeSearchIconClick = () => {
    if (
      selectedFromTime === "" ||
      selectedFromTime === null ||
      selectedFromTime === undefined
    ) {
      openNotification("Please Select Time From");
      return;
    }
    if (
      selectedToTime === "" ||
      selectedToTime === null ||
      selectedToTime === undefined
    ) {
      openNotification("Please Select Time To");
      return;
    }
    openNotification(
      `selected time from ${selectedFromTime} to ${selectedToTime} `
    );
  };

  const openNotification = (msg) => {
    notification.success({
      message: msg,

      placement: "topRight",
      top: 150,
    });
  };

  return (
    <>
      <div>
        {/**....................................... Top Laayout 1 Starts...............................................*/}
        <div className="topLayoutOne">
          <div className="topLayoutOne__left">
            Trip Summary
            <Breadcrumb>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

              <Breadcrumb.Item>Trip Summary</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="topLayoutOne__right">
            <div style={{ display: "flex" }}>
              <div>
                <DateAndTimeSelect
                  setSelectedToTime={setSelectedToTime}
                  setSelectedFromTime={setSelectedFromTime}
                />
              </div>
              <div
                style={{
                  padding: "6px",
                  background: "#B8EFF1",
                  borderRadius: "5px",
                }}
                onClick={onTimeSearchIconClick}
              >
                <SearchOutlined
                  style={{ color: "#fff", fontSize: "17px", cursor: "pointer" }}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <Button onClick={onExportClick} type="primary">
                  <UploadOutlined /> Export
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/**....................................... Top Laayout 1 ends...............................................*/}

        {/**...............................LAYOUT 2 STARTS.................................................... */}
        <div className="layoutTwo">
          <div className="layoutTwo__left">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ width: "30%" }}>
                <DetailsBox
                  color="#29BDC2"
                  logo={<CarOutlined style={{ fontSize: "25px" }} />}
                  text="DLL1W 6461 (TATA ACE)"
                />
              </div>
              <div style={{ width: "30%" }}>
                <DetailsBox
                  color="#C2993B"
                  logo={<CarOutlined style={{ fontSize: "25px" }} />}
                  text="DLL1W 6461 (TATA ACE)"
                />
              </div>
              <div style={{ width: "30%" }}>
                <DetailsBox
                  color="#005A93"
                  logo={<DashboardOutlined style={{ fontSize: "25px" }} />}
                  text="DLL1W 6461 (TATA ACE)"
                />
              </div>
              <div style={{ width: "30%" }}>
                <DetailsBox
                  color="#005A93"
                  logo={<ClockCircleOutlined style={{ fontSize: "25px" }} />}
                  text="DLL1W 6461 (TATA ACE)"
                />
              </div>
              <div style={{ width: "30%" }}>
                <DetailsBox
                  color="#962297"
                  logo={<ClockCircleOutlined style={{ fontSize: "25px" }} />}
                  text="DLL1W 6461 (TATA ACE)"
                />
              </div>
              <div style={{ width: "30%" }}>
                <DetailsBox
                  color="#6A5718"
                  logo={<FolderOpenOutlined style={{ fontSize: "25px" }} />}
                  text="DLL1W 6461 (TATA ACE)"
                />
              </div>
            </div>
          </div>
          <div className="layoutTwo__right">
            <div
              style={{
                width: "300px",
                padding: "27px 6px",
                background: "#2F2F2F",
                color: "#fff",
                float: "right",
              }}
            >
              <FolderOpenOutlined style={{ fontSize: "35px" }} />
              other Expense : 0.00
            </div>
          </div>
        </div>

        {/**...............................LAYOUT 2 ENDS.................................................... */}

        <div style={{ marginTop: "30px" }}>
          <TripDetails />
        </div>
      </div>
    </>
  );
};

export default Home;
