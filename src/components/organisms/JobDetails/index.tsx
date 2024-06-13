import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

interface JobDetailsProps {}

const JobDetails: FC<JobDetailsProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 w-full">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                eum saepe porro veritatis tenetur. Maiores libero laudantium
                impedit perspiciatis magnam?
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                eum saepe porro veritatis tenetur. Maiores libero laudantium
                impedit perspiciatis magnam?
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                eum saepe porro veritatis tenetur. Maiores libero laudantium
                impedit perspiciatis magnam?
              </p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                eum saepe porro veritatis tenetur. Maiores libero laudantium
                impedit perspiciatis magnam?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold">About this role</div>

          <div className="shadow p-3 text-center my-6">
            1 <span className="text-gray-500">of 10 capacity</span>
            <Progress className="mt-3" value={10} />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">13 Aug 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">13 Aug 2024</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">100 - 200 USD</div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Category</div>

            <div className="space-x-5">
              <Badge>Design</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>

            <div className="space-x-5">
              {["HTML", "CSS", "Javascript"].map((item: string, i: number) => (
                <Badge variant="outline" key={i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <div className="text-3xl font-semibold">Perks & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {[1, 2, 3].map((item: any) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

              <div className="text-lg font-semibold mb-3">
                Full Health Insurance
              </div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus laborum cumque veniam beatae ullam officia.
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
