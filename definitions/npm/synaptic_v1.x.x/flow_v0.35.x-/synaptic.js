

declare module 'synaptic' {
					declare module.exports: undefined


}

declare module 'Neuron' {
	declare type SquashingFunction = (x: number, derivate: boolean) => number;

			declare class Connection  {
		ID: number;
		from: number;
		to: number;
		weight: number;
		gain: number;
		gater: Neuron;
		constructor(from: number, to: number, weight?: number): this;
		uid(): number
	}

	
}

declare module 'squash' {
					
}

declare module 'npm$namespace$Synaptic' {
				declare class Neuron  {
		squash: Neuron.SquashingFunction;
		bias: number;
		constructor(): this;
		project(neuron: Neuron, weight?: number): Neuron.Connection;
		gate(connection: Neuron.Connection): void;
		activate(activation?: number): number;
		propagate(learningRate: number, targetValue: number): void;
		selfconnected(): boolean;
		connected(neuron?: any): {
		result: any,
		connection: any
	} | boolean;
		clear(): void;
		reset(): void;
		optimize(
		optimized?: any, layer?: any
	): {
		memory: any,
		neurons: any,
		inputs: any,
		outputs: any,
		targets: any,
		variables: any,
		activation_sentences: any,
		trace_sentences: any,
		propagation_sentences: any,
		layers: any
	};
		uid(): number;
		quantity(): {
		neurons: number,
		connections: number
	}
	}

	declare class Layer  {
		size: number;
		list: Neuron[];
		label: any;
		connectedTo: any;
		constructor(numberOfNeurons: number): this;
		project(
		layer: Layer | Network, connectionType?: Layer.connectionType, weights?: any
	): Layer.LayerConnection;
		gate(connection: Layer.LayerConnection, gateType: Layer.gateType): void;
		activate(activation?: number[]): number[];
		propagate(learningRate: number, targetValue: number[]): void;
		selfconnected(): boolean;
		connected(layer: any): any;
		clear(): void;
		reset(): void;
		add(neuron: any): void;
		set(options: Layer.Options): this;
		neurons(): Neuron[]
	}

	declare class Network  {
		layer: Network.Options;
		optimized: Network.Optimized;
		constructor(options?: Network.Options): this;
		project(
		otherNetwork: Network | Layer, connectionType?: Layer.connectionType, weights?: any
	): Layer.LayerConnection;
		gate(layerConnection: Layer.LayerConnection, gateType: Layer.gateType): void;
		activate(activation: number[]): number[];
		propagate(learningRate: number, targetValue: number[]): void;
		toJSON(): string;
		getWorkerSharedFunctions(): string;
		fromJSON(exported: string): Network;
		worker(memory?: any, set?: any, options?: any): Worker;
		toDot(edgeConnection?: any): {
		code: string,
		link: string
	};
		standalone(): (inputs: number[]) => number[];
		clone(): Network;
		neurons(): number[];
		set(options: Network.Options): void;
		inputs(): number;
		outputs(): number;
		setOptimize(optimize: any): void;
		restore(): any | void;
		optimize(): void;
		clear(): void;
		reset(): void
	}

	declare class Trainer  {
		constructor(network: Network): this;
		train(
		trainingSet: Trainer.TrainingSet, trainingOptions?: Trainer.TrainingOptions
	): Trainer.TrainingResult;
		trainAsync(
		trainingSet: Trainer.TrainingSet, trainingOptions?: Trainer.TrainingOptions
	): Promise<Trainer.TrainingResult>;
		test(
		trainingSet: Trainer.TrainingSet, trainingOptions?: Trainer.TrainingOptions
	): Trainer.TrainingResult;
		XOR(options?: Trainer.XOROptions): Trainer.TrainingResult;
		DSR(options?: Trainer.DSROptions): Trainer.DSRTrainingResult;
		ERG(options?: Trainer.ERGOptions): Trainer.ERGTrainingResult;
		timingTask(options?: any): {
		train: any,
		test: any
	}
	}

	
}

declare module 'Layer' {
		declare interface Options {
		label?: any,
		squash?: Neuron.SquashingFunction,
		bias?: number
	}

		declare class LayerConnection  {
		ID: number;
		from: any;
		to: any;
		selfconnection: any;
		type: any;
		connections: any;
		list: any;
		size: any;
		gatedfrom: any;
		uid(): number
	}

	
}

declare module 'Network' {
		declare interface Options {
		input: Layer,
		hidden: Layer[],
		output: Layer
	}

	declare interface Optimized {
		memory: Float64Array,
		ownership: (memoryBuffer: Float64Array) => void
	}

			
}

declare module 'Architect' {
				declare class Perceptron extends Network {
		trainer: Trainer;
		constructor(...numberOfNeurons: number[]): this
	}

	declare class LSTM extends Network {
		trainer: Trainer;
		constructor(...numberOfNeurons: number[]): this
	}

	declare class Liquid extends Network {
		trainer: Trainer;
		constructor(input: number, pool: number, output: number, connections: number, gates: number): this
	}

	declare class Hopfield extends Network {
		constructor(patternSize: number): this;
		learn(patterns: [number[], number[]]): any;
		feed(pattern: number[]): number[]
	}

	
}

declare module 'Trainer' {
	declare type TrainingSet = TrainingPair[];

	declare type CostFunction = (targetValues: number[], outputValues: number[]) => number;

	declare interface TrainingPair {
		input: number[],
		output: number[]
	}

	declare interface TrainingOptions {
		rate?: number | number[] | ((iterations: number, error: number) => number),
		iterations?: number,
		error?: number,
		shuffle?: boolean,
		cost?: CostFunction,
		log?: number,
		schedule?: TrainingScheduleOptions
	}

	declare interface TrainingScheduleDoData {
		error: any,
		iterations: any,
		rate: any
	}

	declare interface TrainingScheduleOptions {
		every: number,
		do: (data: TrainingScheduleDoData) => boolean | void
	}

	declare interface TrainingResult {
		error: number,
		iterations: number,
		time: number
	}

	declare interface XOROptions {
		iterations?: number,
		log?: number,
		shuffle?: boolean,
		cost?: CostFunction
	}

	declare interface DSROptions {
		targets?: number[],
		distractors?: number[],
		prompts?: number[],
		length?: number,
		success?: number,
		iterations?: number,
		rate?: number,
		log?: number,
		schedule?: TrainingScheduleOptions,
		cost?: CostFunction
	}

	declare interface DSRTrainingResult {
		error: number,
		iterations: number,
		time: number,
		success: any
	}

	declare interface ERGOptions {
		iterations?: number,
		error?: number,
		rate?: number,
		log?: number,
		cost?: CostFunction
	}

	declare interface ERGTrainingResult {
		error: number,
		iterations: number,
		time: number,
		test: any,
		generate: any
	}

			
}

declare module 'cost' {
					
}