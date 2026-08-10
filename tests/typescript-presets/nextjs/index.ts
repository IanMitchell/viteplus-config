import { prefix } from "@/value";

export function readElementId(element: HTMLElement): string {
	return `${prefix}${element.id}`;
}
