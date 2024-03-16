import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";

const Team = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid w-full grid-cols-2 gap-5 xl:gap-10">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">Clement Silungwe</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="assets/images/cetradema.png" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Clement Silungwe</h4>
                <p className="text-sm">
                  Our Development and Policy Specialist in programming, policy
                  analysis, and research design.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Over 17 years of experience
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">Arnold Kadziponye</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/assets/images/cetradema.png" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Arnold Kadziponye</h4>
                <p className="text-sm">
                  Our Agriculture and Economic Specialist in managing
                  multi-sectoral programs.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Over 18 years of progressive work experience
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Team;
