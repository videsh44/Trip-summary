import React, { useState, useEffect } from "react";

//import history from "../history";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withCookies } from "react-cookie";
import { Layout, Button, Popconfirm, notification } from "antd";
import { LogoutOutlined, UnorderedListOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const MenuIndex = (props) => {
  // console.log("props.userAuth", props.user);

  /**
  const onLogOutUser = () => {
    const { cookies } = props;
    cookies.remove("Authorization", { path: "/" });
    cookies.remove("isSignedIn", { path: "/" });
    cookies.remove("userId", { path: "/" });
    cookies.remove("userType", { path: "/" });
    cookies.remove("userName", { path: "/" });
    localStorage.removeItem("user_type");

    // dispatch(logoutUser());
    props.logoutUser();
  };
   */

  const onLogOutClick = () => {
    openNotification("LogOut Successfully");
  };

  const onTopHomeBarClick = () => {
    openNotification("Navigated to Home  Successfully");
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
      <Layout style={{ background: "#F4F4F4", height: "100vh" }}>
        <Header
          className="header"
          style={{ position: "fixed", zIndex: 12345, width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "48%", marginTop: "8px" }}>
              <span>
                <UnorderedListOutlined
                  onClick={onTopHomeBarClick}
                  className="menu-accordian-icon"
                />
              </span>
              <span
                style={{ marginLeft: "15px", color: "#fff", fontSize: "23px" }}
              >
                LOGO
              </span>
            </div>
            <div style={{ width: "48%" }}>
              <Popconfirm
                title="Are you sure you want log out ?"
                okText="Yes"
                cancelText="No"
                onConfirm={onLogOutClick}
              >
                <Button style={{ float: "right" }}>
                  <LogoutOutlined className="menu-item-icon" /> Log Out
                </Button>
              </Popconfirm>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: 65,
            background: "#F4F4F4",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <div
            style={
              {
                // height: "100vh",
                // overflowY: "auto",
                //  border: "1px solid red"
              }
            }
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userAuth,
  };
};

export default withCookies(connect(mapStateToProps, { logoutUser })(MenuIndex));
