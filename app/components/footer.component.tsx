import Image from "next/image";
import React from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="flex w-full justify-between items-center h-[500px]">
      <div className="flex flex-col gap-7">
        <Image alt="logo-name" src="/logo-name.png" width={200} height={200} />
        <ul className="flex flex-col flex-wrap max-h-36 gap-6 font-semibold mt-7">
          <li>
            <Link href="#"  className="menu__link">Contact</Link>
            </li>
          <li>
            <Link href="#"  className="menu__link">Projects</Link>
            </li>
          <li>
            <Link href="#"  className="menu__link">Interviews</Link>
            </li>
          <li>
            <Link href="#"  className="menu__link">About Us</Link>
            </li>
        </ul>
      </div>
      <div>
        <button>Receive Offer</button>
        <div className="mt-4">
          <Input
            className="rounded-none"
            placeholder="Enter your username"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </div>
      </div>
    </footer>
  );
}
