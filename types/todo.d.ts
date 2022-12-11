// type script의 추론을 돕는 d.ts 파일

export type TodoType = {
	id: number;
	text: string;
	color: "red" | "orange" | "yellow" | "green" | "blue" | "navy";
	checked: boolean;
};
