import "./App.css";
import { supabase } from "./supabase";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function App() {
	return (
		<div className="h-screen flex justify-center items-center bg-stone-900">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>🔥 Shadcn Boilerplate</CardTitle>
					<CardDescription>This React boilerplate features:</CardDescription>
				</CardHeader>
				<CardContent>
					<ul>
						<li>React Router</li>
						<li>Shadcn UI Library</li>
						<li>Supabase configuration</li>
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
