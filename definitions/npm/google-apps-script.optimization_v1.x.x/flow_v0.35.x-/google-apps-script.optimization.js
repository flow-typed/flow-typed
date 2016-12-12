

declare module 'google-apps-script.optimization' {
					
}

declare module 'Optimization' {
		declare export interface LinearOptimizationConstraint {
		setCoefficient(variableName: string, coefficient: Number): LinearOptimizationConstraint
	}

	declare export interface LinearOptimizationEngine {
		addConstraint(lowerBound: Number, upperBound: Number): LinearOptimizationConstraint,
		addVariable(name: string, lowerBound: Number, upperBound: Number): LinearOptimizationEngine,
		addVariable(
		name: string, lowerBound: Number, upperBound: Number, type: VariableType
	): LinearOptimizationEngine,
		setMaximization(): LinearOptimizationEngine,
		setMinimization(): LinearOptimizationEngine,
		setObjectiveCoefficient(variableName: string, coefficient: Number): LinearOptimizationEngine,
		solve(): LinearOptimizationSolution,
		solve(seconds: Number): LinearOptimizationSolution
	}

	declare export interface LinearOptimizationService {
		Status: Status,
		VariableType: VariableType,
		createEngine(): LinearOptimizationEngine
	}

	declare export interface LinearOptimizationSolution {
		getObjectiveValue(): Number,
		getStatus(): Status,
		getVariableValue(variableName: string): Number,
		isValid(): boolean
	}

			
}