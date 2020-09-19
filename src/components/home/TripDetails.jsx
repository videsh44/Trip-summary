import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import TripDataTable from "./TripDataTable";

const { Panel } = Collapse;

const TripDetails = () => {
  let tripData = [
    {
      key: 1,
      from: "04/19/20 at 5:20 AM",
      to: "04/19/20 at 5:20 AM",
      totTime: "5 HR 0 Min",
    },
    {
      key: 2,
      from: "04/14/20 at 2:25 AM",
      to: "04/16/20 at 7:30 AM",
      totTime: "48 HR 0 Min",
    },
    {
      key: 3,
      from: "04/11/20 at 12:20 AM",
      to: "04/13/20 at 9:40 AM",
      totTime: "32 HR 0 Min",
    },
  ];

  return (
    <div>
      <Collapse
        bordered={false}
        style={{ background: "#F4F4F4" }}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        {tripData.map((trip, i) => (
          <Panel
            header={
              <div
              // style={{ background: "#00bddc" }}
              >
                {` Date ${trip.from} - ${trip.to} (${trip.totTime}) `}
              </div>
            }
            key={trip.key}
            className="site-collapse-custom-panel"
          >
            <div style={{ padding: "30px" }}>
              <TripDataTable />
            </div>
          </Panel>
        ))}

        {/**
        <Panel
          header={
            <div
            // style={{ background: "#00bddc" }}
            >
              Date 04/19/20 at 5:20 AM - 04/19/20 at 5:20 AM (5 HR 0 Min)
            </div>
          }
          key="2"
          className="site-collapse-custom-panel"
        >
          <div style={{ padding: "30px" }}>
            <TripDataTable />
          </div>
        </Panel>
        <Panel
          header={
            <div
            // style={{ background: "#00bddc" }}
            >
              Date 04/19/20 at 5:20 AM - 04/19/20 at 5:20 AM (5 HR 0 Min)
            </div>
          }
          key="3"
          className="site-collapse-custom-panel"
        >
          <div style={{ padding: "30px" }}>
            <TripDataTable />
          </div>
        </Panel>
         */}
      </Collapse>
    </div>
  );
};

export default TripDetails;
