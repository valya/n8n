// import { Duration } from 'luxon';

// export type ExtensionMethodHandler<K> = (
// 	value: K,
// 	args?: K | K[] | number[] | string[] | boolean[] | undefined,
// ) => K | string | boolean | number | Date | Duration;

// export abstract class BaseExtension<T> {
// 	methodMapping: Map<string, ExtensionMethodHandler<T>>;

// 	constructor() {
// 		this.methodMapping = new Map<string, ExtensionMethodHandler<T>>();
// 	}

// 	hasMethod(methodName: string): boolean {
// 		return this.methodMapping.has(methodName);
// 	}

// 	listMethods(): string[] {
// 		return Array.from(this.methodMapping.keys());
// 	}

// 	methods() {
// 		return Object.fromEntries(this.methodMapping.entries());
// 	}
// }

export interface ExtensionMap {
	typeName: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	functions: Record<string, Function>;
}
