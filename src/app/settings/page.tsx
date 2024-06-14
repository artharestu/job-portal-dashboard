import OverviewForm from "@/components/forms/OverviewForm";
import SocialLinksForm from "@/components/forms/SocialLinksForm";
import TeamsForm from "@/components/forms/TeamsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { FC } from "react";

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-5">Settings</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sociallinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="sociallinks">
          <SocialLinksForm />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
