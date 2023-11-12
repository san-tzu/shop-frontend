'use client'
import React from "react";
import {Tabs, Tab} from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import ProductCard from "./ProductCard";

export default function Categories() {
  return (
    <div className="flex w-full flex-col items-center p-8">
      <Tabs aria-label="Options" variant="light"  classNames={{
          cursor: "w-full border border-rose-500",
          tabContent: "group-data-[selected=true]:text-rose-500 text-lg",
        }}>
        <Tab key="Cakes" title="Cakes"> 
          {/* <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>   */}
          <div className="grid grid-cols-4 gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div>
        </Tab>
        <Tab key="Cup Cakes" title="Cup Cakes">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Desserts" title="Desserts">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
