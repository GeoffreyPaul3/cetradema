import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export function ServiceCard() {
  return (
    <>
      <Card className="w-full rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle>Capacity Building</CardTitle>
          <CardDescription>
            We equip individuals and organizations with the skills and knowledge
            necessary to achieve their development goals. This can include
            training workshops, mentorship programs, and the development of
            training manuals.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Project Evaluations</CardTitle>
          <CardDescription>
            CETRADEMA offers comprehensive evaluations to assess the
            effectiveness, efficiency, and impact of development projects. We
            employ various methodologies to ensure data-driven and insightful
            recommendations.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Research</CardTitle>
          <CardDescription>
            Our team conducts social research studies using both qualitative and
            quantitative methods. We tailor our research approach to meet the
            specific needs of each project, ensuring valuable data collection
            and analysis.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Carbon Development and Implementation</CardTitle>
          <CardDescription>
            CETRADEMA assists communities and organizations in developing and
            implementing carbon projects that contribute to climate change
            mitigation while promoting sustainable development.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Transformative Community Development</CardTitle>
          <CardDescription>
            We work collaboratively with communities to identify their needs and
            develop strategies for sustainable development. This may involve
            livelihood interventions, social mobilization, and capacity building
            initiatives.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Monitoring, Evaluation, and Learning (MEL)</CardTitle>
          <CardDescription>
            CETRADEMA designs and implements MEL systems to track progress,
            measure impact, and inform decision-making throughout the project
            cycle.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Project Cycle Management</CardTitle>
          <CardDescription>
            We guide clients through all stages of the project cycle, from
            planning and design to implementation, monitoring, and evaluation.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Income Generating Projects (IGPs)</CardTitle>
          <CardDescription>
            CETRADEMA assists communities and organizations in developing and
            implementing carbon projects that contribute to climate change
            mitigation while promoting sustainable development.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            Accumulated Savings and Credit Associations (ASCAs) including
            Village Savings and Loan Associations (VSLAs)
          </CardTitle>
          <CardDescription>
            We assist communities in forming and managing ASCAs/VSLAs, which
            provide access to financial services and promote financial
            inclusion.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button className="w-full button">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
