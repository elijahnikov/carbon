"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon, Info, InfoIcon } from "lucide-react";
import { toast } from "sonner";

export default function ToastPage() {
	return (
		<div className="min-h-screen gap-4 min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<Switch />
			<Checkbox />
			<div className="w-[200px]">
				<Slider defaultValue={[50]} max={100} step={10} />
			</div>
			{/* <Input placeholder="Search" /> */}
			<Select>
				<SelectTrigger className="w-[280px]">
					<SelectValue placeholder="Select a timezone" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>North America</SelectLabel>
						<SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
						<SelectItem value="cst">Central Standard Time (CST)</SelectItem>
						<SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
						<SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
						<SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
						<SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Europe & Africa</SelectLabel>
						<SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
						<SelectItem value="cet">Central European Time (CET)</SelectItem>
						<SelectItem value="eet">Eastern European Time (EET)</SelectItem>
						<SelectItem value="west">
							Western European Summer Time (WEST)
						</SelectItem>
						<SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
						<SelectItem value="eat">East Africa Time (EAT)</SelectItem>
					</SelectGroup>
					<SelectSeparator />
					<SelectGroup>
						<SelectLabel>Asia</SelectLabel>
						<SelectItem value="msk">Moscow Time (MSK)</SelectItem>
						<SelectItem value="ist">India Standard Time (IST)</SelectItem>
						<SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
						<SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
						<SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
						<SelectItem value="ist_indonesia">
							Indonesia Central Standard Time (WITA)
						</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Australia & Pacific</SelectLabel>
						<SelectItem value="awst">
							Australian Western Standard Time (AWST)
						</SelectItem>
						<SelectItem value="acst">
							Australian Central Standard Time (ACST)
						</SelectItem>
						<SelectItem value="aest">
							Australian Eastern Standard Time (AEST)
						</SelectItem>
						<SelectItem value="nzst">
							New Zealand Standard Time (NZST)
						</SelectItem>
						<SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>South America</SelectLabel>
						<SelectItem value="art">Argentina Time (ART)</SelectItem>
						<SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
						<SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
						<SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			Copy
			<DropdownMenu>
				<DropdownMenuTrigger>Open</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
