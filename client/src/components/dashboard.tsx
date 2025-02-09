import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ElectricityConsumption } from '@/components/electricity-consumption';
import { CostDistribution } from '@/components/cost-distribution';

export function Dashboard() {
	const maintenanceCost = 100; // todo: fetch from backend
	const loanCost = 150; // todo: fetch from backend
	const electricityCost = 100; // todo: fetch from backend
	const totalCost = maintenanceCost + loanCost + electricityCost; // todo: fetch from backend

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Maintenance Costs</CardTitle>
						<CardDescription>
							From object description
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{maintenanceCost} SEK
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Electricity Costs</CardTitle>
						<CardDescription>
							From object description
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{electricityCost} SEK
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Loan Costs</CardTitle>
						<CardDescription>
							Interest and amortization
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{loanCost} SEK</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Total cost</CardTitle>
						<CardDescription>Maintenance + Loan</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{totalCost} SEK
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<CostDistribution />
				<ElectricityConsumption />
			</div>
		</div>
	);
}
