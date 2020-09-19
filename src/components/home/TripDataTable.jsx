import React from "react";
import { Button, message, notification, Table } from "antd";
import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";

const TripDataTable = () => {
  const data = [
    {
      sno: "1",
      driver: "John Brown",
      tripStart: "IFFCO Chowk",
      tripEnd: "Dwarka",
      expense: 60,
      tripKm: 70,
      gpsKm: 70,
      tripTime: 70,
    },
    {
      sno: "2",
      driver: "Jim Green",
      tripStart: "IFFCO Chowk",
      tripEnd: "Dwarka",
      expense: 66,
      tripKm: 89,
      gpsKm: 89,
      tripTime: 89,
    },
    {
      sno: "3",
      driver: "Joe Black",
      tripStart: "IFFCO Chowk",
      tripEnd: "Dwarka",
      expense: 90,
      tripKm: 70,
      gpsKm: 70,
      tripTime: 70,
    },
    {
      sno: "4",
      driver: "Jim Red",
      tripStart: "IFFCO Chowk",
      tripEnd: "Dwarka",
      expense: 99,
      tripKm: 89,
      gpsKm: 89,
      tripTime: 89,
    },
    {
      sno: "5",
      driver: "Jim Red",
      tripStart: "IFFCO Chowk",
      tripEnd: "Dwarka",
      expense: 99,
      tripKm: 89,
      gpsKm: 89,
      tripTime: 89,
    },
    {
      sno: "6",
      driver: "Jim Red",
      tripStart: "IFFCO Chowk",
      tripEnd: "Dwarka",
      expense: 99,
      tripKm: 89,
      gpsKm: 89,
      tripTime: 89,
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Trip start to Trip End",
      // dataIndex: "tripStart",
      key: "tripStart",
      render: (record) => (
        <span>
          <span>{record.tripStart}</span>
          <ArrowRightOutlined
            style={{ color: "#00BDDD", margin: "0px 10px" }}
          />
          <span>{record.tripEnd}</span>
        </span>
      ),
    },
    {
      title: "Driver Name",
      dataIndex: "driver",
      key: "driver",
    },
    {
      title: "Trip Expenses",
      dataIndex: "expense",
      key: "expense",
      render: (record) => (
        <span>
          <span>{record}</span>

          <InfoCircleOutlined
            onClick={() => onInfoExpenseClick(record)}
            style={{
              color: "#00BDDD",
              margin: "0px 10px",
              float: "right",
              cursor: "pointer",
            }}
          />
        </span>
      ),
    },
    {
      title: "Trip KM",
      dataIndex: "tripKm",
      key: "tripKm",
    },
    {
      title: "Gps KM",
      dataIndex: "gpsKm",
      key: "gpsKm",
    },
    {
      title: "Trip Time",
      dataIndex: "tripTime",
      key: "tripTime",
    },
    {
      title: "action",
      // dataIndex: "action",
      key: "action",
      render: (record) => (
        <span>
          <span>
            <Button
              onClick={() => onMovementReportClick(record)}
              className="table__button"
            >
              Movement Report
            </Button>
            <Button
              onClick={() => onStopageReportClick(record)}
              className="table__button"
            >
              Stopage Report
            </Button>
          </span>
        </span>
      ),
    },
  ];

  const onMovementReportClick = (data) => {
    openNotification(`Movement Report of Sno. - ${data.sno} Clicked`);
  };

  const onStopageReportClick = (data) => {
    openNotification(`Stopage Report of Sno. - ${data.sno} Clicked`);
  };

  const onInfoExpenseClick = (data) => {
    openNotification(data);
  };

  const openNotification = (msg) => {
    notification.success({
      message: msg,

      placement: "topRight",
      top: 150,
    });
  };

  return (
    <div>
      <Table
        className="theadDark"
        bordered
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: 4,
        }}
        rowKey={(record) => record.sno}
      />
    </div>
  );
};

export default TripDataTable;
