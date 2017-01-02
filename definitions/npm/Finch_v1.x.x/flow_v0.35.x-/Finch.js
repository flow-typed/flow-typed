// @flow
/**
 * Flowtype definitions for Finch
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module '3d-bin-packing' {
    declare module.exports: typeof bws$packer
}
declare var ReactDataGrid: typeof undefined;
/**
 * <p> Cumulated lengths of current layer. </p>
 * 
<p> {@link Scrapped} represents an edge of the current layer under construction. </p>
 * @author  Bill Knechtel, <br>
Migrated and Refactored by Jeongho Nam <http://samchon.org>
*/
declare class Scrap {

    /**
     * Cumulated length on the X-axis in 3D.
     */
    cumx: number;

    /**
     * Cumulated length on the Z-axis in 3D.
     */
    cumz: number;

    /**
     * Default Constructor.
     */
    constructor(): this;

    /**
     * Initialization Constructor.
     * @param cumx Cumulated length on the x-axis.
     * @param cumz Cumulated length on the z-axis.
     */
    constructor(cumx: number, cumz: number): this
}
declare module 'packer' {

    /**
     * 
     * @brief  Packer, a solver of 3d bin packing with multiple wrappers.
     * @details  * <p> Packer is a facade class supporting packing operations in user side. You can solve a packing problem
    by constructing Packer class with {
     * @link  WrapperArray wrappers} and {
     * @link  InstanceArray instances} to
    pack and executing {
     * @link  optimize Packer.optimize()} method. </p>

    <p> In background side, deducting packing solution, those algorithms are used. </p>
    <ul>
    <li> <a href="http://betterwaysystems.github.io/packer/reference/AirForceBinPacking.pdf" target="_blank">
    Airforce Bin Packing; 3D pallet packing problem: A human intelligence-based heuristic approach </a>
    </li>
    <li> Genetic Algorithm </li>
    <li> Greedy and Back-tracking algorithm </li>
    </ul>
     * @author  Jeongho Nam <http://samchon.org>
    */
    declare class Packer mixins undefined.Entity {

        /**
         * Candidate wrappers who can contain instances.
         */
        wrapperArray: WrapperArray;

        /**
         * Instances trying to pack into the wrapper.
         */
        instanceArray: InstanceArray;

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * Construct from members.
         * @param wrapperArray Candidate wrappers who can contain instances.
         * @param instanceArray Instances to be packed into some wrappers.
         */
        constructor(wrapperArray: WrapperArray, instanceArray: InstanceArray): this;

        /**
         * 
         * @inheritdoc  
         */
        construct(xml: undefined.XML): void;

        /**
         * Get wrapperArray.
         */
        getWrapperArray(): WrapperArray;

        /**
         * Get instanceArray.
         */
        getInstanceArray(): InstanceArray;

        /**
         * <p> Deduct
         */
        optimize(): WrapperArray;

        /**
         * 
         * @brief  Initialize sequence list (gene_array).
         * @details  * <p> Deducts initial sequence list by such assumption: </p>

        <ul>
        <li> Cost of larger wrapper is less than smaller one, within framework of price per volume unit. </li>
        <ul>
        <li> Wrapper Larger: (price: $1,000, volume: 100cm^3 -> price per volume unit: $10 / cm^3) </li>
        <li> Wrapper Smaller: (price: $700, volume: 50cm^3 -> price per volume unit: $14 / cm^3) </li>
        <li> Larger's <u>cost</u> is less than Smaller, within framework of price per volume unit </li>
        </ul>
        </ul>

        <p> Method {
         * @link  initGenes initGenes()} constructs {
         * @link  WrapperGroup WrapperGroups} corresponding
        with the {
         * @link  wrapperArray} and allocates {
         * @link  instanceArray instances} to a {
         * @link  WrapperGroup},
        has the smallest <u>cost</u> between containbles. </p>

        <p> After executing packing solution by {
         * @link  WrapperGroup.optimize WrapperGroup.optimize()}, trying to
        {
         * @link  repack re-pack} each {
         * @link  WrapperGroup} to another type of {
         * @link  Wrapper}, deducts the best
        solution between them. It's the initial sequence list of genetic algorithm. </p>
         * @return  Initial sequence list.
        */
        initGenes(): GAWrapperArray;

        /**
         * Try to repack each wrappers to another type.
         * @param $wrappers Wrappers to repack.
         * @return  Re-packed wrappers.
         */
        repack($wrappers: WrapperArray): WrapperArray;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        toXML(): undefined.XML
    }

    /**
     * Bridge of {@link Packer} for {@link InstanceForm repeated instances}.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare class PackerForm mixins undefined.Entity {

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * Initializer Constructor.
         * @param instanceFormArray Form of Instances to pack.
         * @param wrapperArray Type of Wrappers to be used.
         */
        constructor(instanceFormArray: InstanceFormArray, wrapperArray: WrapperArray): this;
        construct(xml: undefined.XML): void;
        optimize(): WrapperArray;
        getInstanceFormArray(): InstanceFormArray;
        getWrapperArray(): WrapperArray;
        TAG(): string;
        toXML(): undefined.XML;
        toPacker(): Packer
    }

    /**
     * An array of {@link InstanceForm} objects.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare class InstanceFormArray mixins undefined.EntityArrayCollection<InstanceForm>{

        /**
         * Default Constructor.
         */
        constructor(): this;
        createChild(xml: undefined.XML): InstanceForm;
        TAG(): string;
        CHILD_TAG(): string;

        /**
         * Convert {@link InstanceForm} objects to {@link InstanceArray}.
         * @return  An array of instance containing repeated instances in {
         * @link  InstanceForm} objects.
         */
        toInstanceArray(): InstanceArray
    }

    /**
     * <p> A repeated Instance. </p>
     * 
    <p> InstanceForm is an utility class for repeated {@link Instance}. It is designed for shrinking
    volume of network message I/O by storing {@link count repeated count}. </p>
     * @author  Jeongho Nam <http://samchon.org>
    */
    declare class InstanceForm mixins undefined.Entity {

        /**
         * Default Constructor.
         */
        constructor(instance?: boxologic$Instance, count?: number): this;

        /**
         * 
         * @inheritdoc  
         */
        construct(xml: undefined.XML): void;
        key(): any;
        getInstance(): boxologic$Instance;
        getCount(): number;
        setCount(val: number): void;
        $name: string;
        $width: string;
        $height: string;
        $length: string;
        $count: string;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        toXML(): undefined.XML;

        /**
         * <p> Repeated {@link instance} to {@link InstanceArray}.
         * @details  * <p> Contains the {
         * @link  instance repeated instance} to an {
         * @link  InstanceArray} to make
        {
         * @link  instance} to participate in the packing process. The returned {
         * @link  InstanceArray} will be
        registered on {
         * @link  Packer.instanceArray}.
         * @return  An array of instance containing repeated {
         * @link  instance}.
        */
        toInstanceArray(): InstanceArray
    }
    declare class WrapperArray mixins undefined.EntityArrayCollection<Wrapper>{

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * 
         * @inheritdoc  
         */
        createChild(xml: undefined.XML): Wrapper;

        /**
         * Get (calculate) price.
         */
        getPrice(): number;

        /**
         * Get (calculate) utilization rate.
         */
        getUtilization(): number;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        CHILD_TAG(): string
    }
    declare class GAWrapperArray mixins WrapperArray {
        instanceArray: InstanceArray;
        result: std.HashMap<string,
        WrapperGroup>;

        /**
         * Construct from instances.
         * @param instanceArray Instances to be wrapped.
         */
        constructor(instanceArray: InstanceArray): this;

        /**
         * 
         * @brief  Copy Constructor.
         */
        constructor(genes: GAWrapperArray): this;

        /**
         * 
         * @brief  Get optimization result.
         * @return  result map.
         */
        getResult(): std.HashMap<string,
        WrapperGroup>;
        less(obj: GAWrapperArray): boolean
    }

    /**
     * An interface of physical 3D-instances.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare type Instance = {

        /**
         * Get name.
         */
        getName(): string,

        /**
         * Get width, length on the X-axis in 3D.
         */
        getWidth(): number,

        /**
         * Get height, length on the Y-axis in 3D.
         */
        getHeight(): number,

        /**
         * Get length, length on the Z-axis in 3D.
         */
        getLength(): number,

        /**
         * Get (calculate) volume.
         * @return  width x height x length
         */
        getVolume(): number,

        /**
         * Set name.
         */
        setName(val: string): void,

        /**
         * Set width, length on the X-axis in 3D.
         */
        setWidth(val: number): void,

        /**
         * Set height, length on the Y-axis in 3D.
         */
        setHeight(val: number): void,

        /**
         * Set length, length on the Z-axis in 3D.
         */
        setLength(val: number): void,

        /**
         * <p> A type, identifier of derived class. </p>
         * 
        <h4> Derived types </h4>
        <ul>
        <li> {@link Product product} </li>
        <li> {@link Wrapper wrapper} </li>
        <ul>
        */
        TYPE(): string
    }

    /**
     * An array of Instance objects.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare class InstanceArray mixins undefined.EntityArray<boxologic$Instance>{

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * 
         * @inheritdoc  
         */
        createChild(xml: undefined.XML): boxologic$Instance;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        CHILD_TAG(): string
    }

    /**
     * A product.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare class Product mixins undefined.Entity, Instance {

        /**
         * <p> Name, key of the Product. </p>
         * 
        <p> The name must be unique because a name identifies a {@link Product}. </p>
        */
        name: string;

        /**
         * Width of the Product, length on the X-axis in 3D.
         */
        width: number;

        /**
         * Height of the Product, length on the Y-axis in 3D.
         */
        height: number;

        /**
         * Length of the Product, length on the Z-axis in 3D.
         */
        length: number;

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * Construct from members.
         * @param name Name, identifier of the Product.
         * @param width Width, length on the X-axis in 3D.
         * @param height Height, length on the Y-axis in 3D.
         * @param length Length, length on the Z-axis in 3D.
         */
        constructor(name: string, width: number, height: number, length: number): this;

        /**
         * Key of a Product is its name.
         */
        key(): any;

        /**
         * 
         * @inheritdoc  
         */
        getName(): string;

        /**
         * 
         * @inheritdoc  
         */
        getWidth(): number;

        /**
         * 
         * @inheritdoc  
         */
        getHeight(): number;

        /**
         * 
         * @inheritdoc  
         */
        getLength(): number;

        /**
         * 
         * @inheritdoc  
         */
        getVolume(): number;

        /**
         * 
         * @inheritdoc  
         */
        setName(val: string): void;

        /**
         * 
         * @inheritdoc  
         */
        setWidth(val: number): void;

        /**
         * 
         * @inheritdoc  
         */
        setHeight(val: number): void;

        /**
         * 
         * @inheritdoc  
         */
        setLength(val: number): void;

        /**
         * 
         * @inheritdoc  
         */
        TYPE(): string;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        toXML(): undefined.XML
    }

    /**
     * <p> Wrap represents an act wrap(ping). </p>
     * 
    <p> {@link Wrap} is a class represents an act wrapping an {@link Instance} to an {@link Wrapper}.
    To represent the relationship, Wrap uses Bridge and Capsular patterns to links and intermediates
    relationship between Wrapper and Instance. </p>

    <p> Wrap also helps packing optimization and 3d-visualization with its own members
    {
     * @link  orientation} and position variables {
     * @link  x}, {
     * @link  y} and {
     * @link  z}. </p>
     * @author  Jeongho Nam <http://samchon.org>
    */
    declare class Wrap mixins undefined.Entity {

        /**
         * A wrapper wrapping the {@link instance}.
         */
        wrapper: Wrapper;

        /**
         * An instance wrapped into the {@link wrapper}.
         */
        instance: boxologic$Instance;

        /**
         * Coordinate-X of the instance placement in the wrapper.
         */
        x: number;

        /**
         * Coordinate-Y of the instance placement in the wrapper.
         */
        y: number;

        /**
         * Coordinate-Z of the instance placement in the wrapper.
         */
        z: number;

        /**
         * Placement orientation of wrapped {@link instance}.
         */
        orientation: number;

        /**
         * 
         */
        color: number;

        /**
         * Construct from a Wrapper.
         * @param wrapper A wrapper who will contain an instance.
         */
        constructor(wrapper: Wrapper): this;

        /**
         * Construct from a Wrapper and Instance with its position and default orientation 1.
         * @param wrapper A wrapper who contains the instance.
         * @param instance An instance contained into the wrapper.
         * @param x Coordinate-X of the {
         * @link  instance} placement in the {
         * @link  wrapper}.
         * @param y Coordinate-Y of the {
         * @link  instance} placement in the {
         * @link  wrapper}.
         * @param z Coordinate-Z of the {
         * @link  instance} placement in the {
         * @link  wrapper}.
         */
        constructor(wrapper: Wrapper, instance: boxologic$Instance, x: number, y: number, z: number): this;

        /**
         * Construct from a Wrapper and Instance with its position and orientation.
         * @param wrapper A wrapper who contains the instance.
         * @param instance An instance contained into the wrapper.
         * @param x Coordinate-X of the {
         * @link  instance} placement in the {
         * @link  wrapper}.
         * @param y Coordinate-Y of the {
         * @link  instance} placement in the {
         * @link  wrapper}.
         * @param z Coordinate-Z of the {
         * @link  instance} placement in the {
         * @link  wrapper}.
         * @param orientation Placement orientation of wrapped {
         * @link  instance}.
         */
        constructor(wrapper: Wrapper, instance: boxologic$Instance, x: number, y: number, z: number, orientation: number): this;

        /**
         * 
         * @inheritdoc  
         */
        construct(xml: undefined.XML): void;

        /**
         * Factory method of wrapped Instance.
         * @param type Type of contained Instance's type.
         */
        createInstance(type: string): boxologic$Instance;

        /**
         * Set orientation.
         * @param orientation Orientation code (1 to 6).
         */
        setOrientation(orientation: number): void;

        /**
         * Set position.
         * @param x Coordinate-X of the instance placement in the wrapper.
         * @param y Coordinate-Y of the instance placement in the wrapper.
         * @param z Coordinate-Z of the instance placement in the wrapper.
         */
        setPosition(x: number, y: number, z: number): void;

        /**
         * 
         * @brief  Estimate orientation by given size.
         * @param width Width by placement.
         * @param height Height by placement.
         * @param length Length by placement.
         */
        estimateOrientation(width: number, height: number, length: number): void;

        /**
         * 
         * @brief  Orientation change is occured in level of the packer.
         * @details  orientation Packer's new orientation.
         */
        changeWrapperOrientation(orientation: number): void;

        /**
         * Get wrapper.
         */
        getWrapper(): Wrapper;

        /**
         * Get instance.
         */
        getInstance(): boxologic$Instance;

        /**
         * Get x.
         */
        getX(): number;

        /**
         * Get y.
         */
        getY(): number;

        /**
         * Get z.
         */
        getZ(): number;

        /**
         * Get orientation.
         */
        getOrientation(): number;

        /**
         * Get width.
         */
        getWidth(): number;

        /**
         * Get height.
         */
        getHeight(): number;

        /**
         * Get length.
         */
        getLength(): number;

        /**
         * Get volume.
         */
        getVolume(): number;
        $instanceName: string;
        $layoutScale: string;
        $position: string;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        toXML(): undefined.XML;

        /**
         * 
         * @param geometry 
         * @return  A shape and its boundary lines as 3D-objects.
         */
        toDisplayObjects(geometry: THREE.Geometry): std.Vector<THREE.Object3D >
    }

    /**
     * A wrapper wrapping instances.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare class Wrapper mixins undefined.EntityDeque<Wrap>, Instance {

        /**
         * <p> Name, key of the Wrapper. </p>
         * 
        <p> The name represents a type of Wrapper and identifies the Wrapper. </p>
        */
        name: string;

        /**
         * Price, cost of using an Wrapper.
         */
        price: number;

        /**
         * Width of the Wrapper, length on the X-axis in 3D.
         */
        width: number;

        /**
         * Height of the Wrapper, length on the Y-axis in 3D.
         */
        height: number;

        /**
         * Length of the Wrapper, length on the Z-axis in 3D.
         */
        length: number;

        /**
         * <p> Thickness, margin of a Wrapper causes shrinkness of containable volume. </p>
         * 
        <p> The thickness reduces each dimension's containable size (dimension - 2thickness),
        so finally, it reduces total containable volume (-8  thickness^3). </p>
        */
        thickness: number;

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * Copy Constructor.
         */
        constructor(wrapper: Wrapper): this;

        /**
         * Construct from members.
         * @param name Name, identifier of a Wrapper.
         * @param price Price, issued cost for a type of the Wrapper.
         * @param width Width, dimensional length on the X-axis in 3D.
         * @param height Height, dimensional length on the Y-axis in 3D.
         * @param length Length, dimensional length on the Z-axis in 3D.
         * @param thickness A thickness causes shrinkness on containable volume.
         */
        constructor(name: string, price: number, width: number, height: number, length: number, thickness: number): this;
        construct(xml: undefined.XML): void;

        /**
         * 
         * @inheritdoc  
         */
        createChild(xml: undefined.XML): Wrap;

        /**
         * Key of a Wrapper is its name.
         */
        key(): any;

        /**
         * Get name.
         */
        getName(): string;

        /**
         * Get price.
         */
        getPrice(): number;

        /**
         * Get width, length on X-axis in 3D.
         */
        getWidth(): number;

        /**
         * Get height, length on Y-axis in 3D.
         */
        getHeight(): number;

        /**
         * Get length, length on Z-axis in 3D.
         */
        getLength(): number;

        /**
         * Get thickness.
         */
        getThickness(): number;

        /**
         * <p> Get (calculate) containable width, length on the X-axis in 3D. </p>
         * 
        <p> Calculates containable width considering the {@link thickness}. </p>
         * @return  width - (2 x thickness)
        */
        getContainableWidth(): number;

        /**
         * <p> Get (calculate) containable height, length on the Y-axis in 3D. </p>
         * 
        <p> Calculates containable height considering the {@link thickness}. </p>
         * @return  height - (2 x thickness)
        */
        getContainableHeight(): number;

        /**
         * <p> Get (calculate) containable length, length on the Z-axis in 3D. </p>
         * 
        <p> Calculates containable length considering the {@link thickness}. </p>
         * @return  length - (2 x thickness)
        */
        getContainableLength(): number;

        /**
         * <p> Get (calculate) volume. </p>
         * 
        <h4> Notice </h4>
        <p> If {@link thickness} of the Wrapper is not 0, the volume does not mean containable volume.
        In that case, use {@link containableVolume} instead. </p>
         * @return  width x height x length
        */
        getVolume(): number;

        /**
         * <p> Get (calculate) containable volume. </p>
         * 
        <p> Calculates containable volume considering the {@link thickness}. </p>
         * @return  volume - {(2 x thickness) ^ 3}
        */
        getContainableVolume(): number;

        /**
         * Get utilization ratio of containable volume.
         * @return  utilization ratio.
         */
        getUtilization(): number;
        equal_to(obj: Wrapper): boolean;

        /**
         * <p> Wrapper is enough greater? </p>
         * 
        <p> Test whether the Wrapper is enough greater than an Instance to contain. </p>
         * @param instance An Instance to test.
         * @return  Enough greater or not.
        */
        containable(instance: boxologic$Instance): boolean;

        /**
         * 
         * @inheritdoc  
         */
        setName(val: string): void;

        /**
         * Set price.
         */
        setPrice(val: number): void;

        /**
         * 
         * @inheritdoc  
         */
        setWidth(val: number): void;

        /**
         * 
         * @inheritdoc  
         */
        setHeight(val: number): void;

        /**
         * 
         * @inheritdoc  
         */
        setLength(val: number): void;

        /**
         * Set thickness.
         */
        setThickness(val: number): void;
        $name: string;
        $price: string;
        $width: string;
        $height: string;
        $length: string;
        $thickness: string;
        $scale: string;
        $spaceUtilization: string;

        /**
         * 
         * @inheritdoc  
         */
        TYPE(): string;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        CHILD_TAG(): string;

        /**
         * 
         * @inheritdoc  
         */
        toXML(): undefined.XML;

        /**
         * <p> Convert to a canvas containing 3D elements. </p>
         * @param endIndex 
         * @return  A 3D-canvans printing the Wrapper and its children {
         * @link  Wrap wrapped}
        {
         * @link  Instance instances} with those boundary lines.
        */
        toCanvas(endIndex?: number): HTMLCanvasElement
    }

    /**
     * A group of {@link Wrapper Wrappers} with same type.
     * @author  Jeongho Nam <http://samchon.org>
     */
    declare class WrapperGroup mixins WrapperArray {

        /**
         * <p> A sample, standard of the WrapperGroup. </p>
         * 
        <p> The sample represents what type of Wrappers are grouped into the WrapperGroup. </p>
        */
        sample: Wrapper;

        /**
         * Allocated instances.
         */
        allocatedInstanceArray: InstanceArray;

        /**
         * Default Constructor.
         */
        constructor(): this;

        /**
         * Copy Constructor.
         */
        constructor(wrapperGroup: WrapperGroup): this;

        /**
         * Construct from a sample.
         * @param sample A sample, standard of the WrapperGroup.
         */
        constructor(sample: Wrapper): this;

        /**
         * Construct from members of the {@link sample}.
         * @param name Name, identifier of the sample.
         * @param price Price, issued cost for a type of the sample.
         * @param width Width, dimensional length on the X-axis in 3D, of the sample.
         * @param height Height, dimensional length on the Y-axis in 3D, of the sample.
         * @param length Length, dimensional length on the Z-axis in 3D, of the sample.
         * @param thickness A thickness, causes shrinkness on containable volume, of the sample.
         */
        constructor(name: string, price: number, width: number, height: number, length: number, thickness: number): this;

        /**
         * Key of a WrapperGroup is dependent on its sample.
         */
        key(): any;

        /**
         * Get sample.
         */
        getSample(): Wrapper;

        /**
         * Get allocated instances.
         */
        getAllocatedInstanceArray(): InstanceArray;

        /**
         * Get (calculate) price.
         * @return  (Price of the sample) x (numbers of children Wrappers)
         */
        getPrice(): number;

        /**
         * 
         * @inheritdoc  
         */
        getUtilization(): number;

        /**
         * <p> Allocate instance(s) to the WrapperGroup. </p>
         * 
        <p> Inspect the instance is enough small to be wrapped into an empty wrapper. If the instance
        is enough small, registers the instance (or repeated instances) to the {@link reserveds} and
        returns <code>true</code>. If the instance is too large to be capsuled, returns <code>false</code>. </p>

        <h4>Note</h4>
        <p> The word <u>the instance is enough small to be wrapped into the empty wrapper</u> means
        the instance can be contained into an empty, a new wrapper contaning nothing literally. </p>

        <p> In the method allocate(), it doesn't consider how many instances are wrapped into ordinary
        wrapper and how much volumes are consumed.  </p>
         * @param instance An Instance to allocate.
         * @param n Repeating number of the <i>instance</i>.
         * @return  Whether the instance is enough small to be wrapped into a (new) wrapper
        of same type with the sample.
        */
        allocate(instance: boxologic$Instance, n?: number): boolean;

        /**
         * <p> Run optimization in level of the group. </p>
         * 
        <p> The optimization routine begins by creating a {@link Wrapper} like the {@link sample}. Then
        try to pack {@link allocatedInstanceArray allocated instances} to the {@link Wrapper} as a lot as
        possible. If there're some {@link Wrappers} can't be packed by overloading, then create a new
        {
         * @link  Wrapper} again and try to pack {
         * @link  allocatedInstanceArray instances} again, too. </p>

        <p> Repeats those steps until all {
         * @link  alloctedInstanceArray instances} are {
         * @link  Wrap packed}
        so that there's not any {
         * @link  Instance instance} left. </p>

        <h4> Warning </h4>
        <p> When call this {
         * @link  optimize optimize()} method, ordinary children {
         * @link  Wrapper} objects
        in the {
         * @link  WrapperGroup} will be substituted with the newly optimized {
         * @link  Wrapper} objects. </p>
        */
        optimize(): void;

        /**
         * 
         * @inheritdoc  
         */
        TAG(): string
    }
    declare class Editor<T>mixins React.Component<{
        dataProvider: undefined.EntityArrayCollection<T >
    }, {}>{

        /**
         * Default Constructor.
         */
        constructor(): this;
        createColumns(): AdazzleReactDataGrid.Column[];
        render(): JSX.Element
    }
    declare type ItemEditorProps = {
        application: PackerApplication,
        instances: InstanceFormArray,
        wrappers: WrapperArray
    }
    declare class ItemEditor mixins React.Component<ItemEditorProps, {}>{
        render(): JSX.Element
    }
    declare class InstanceEditor mixins Editor<InstanceForm>{
        createColumns(): AdazzleReactDataGrid.Column[]
    }
    declare class WrapperEditor mixins Editor<Wrapper>{
        createColumns(): AdazzleReactDataGrid.Column[]
    }
    declare class PackerApplication mixins React.Component<{}, {}>{

        /**
         * Default Constructor.
         */
        constructor(): this;
        pack(): void;
        drawWrapper(wrapper: Wrapper, index?: number): void;
        render(): JSX.Element;
        main(): void
    }
    declare class ResultViewer mixins React.Component<WrapperViewerProps, {}>{
        drawWrapper(wrapper: Wrapper, index?: number): void;
        refresh(): void;
        render(): JSX.Element
    }
    declare type WrapperViewerProps = {
        application: PackerApplication,
        wrappers: WrapperArray
    }
}
declare class TabNavigator mixins React.Component<flex$TabNavigatorProps, flex$TabNavigatorProps>{
    render(): JSX.Element
}

declare class NavigatorContent mixins React.Component<flex$NavigatorContentProps, flex$NavigatorContentProps>{
    render(): JSX.Element
}

declare type flex$TabNavigatorProps = {
    selectedIndex?: number,
    style?: React.CSSProperties
}

declare type flex$NavigatorContentProps = {
    label: string
}
declare module 'MD5' {
    declare     var VERSION: string;
    declare     var BY_ASCII: number;
    declare     var BY_UTF16: number;
    declare     function calc(str: string, option?: number): string
}

/**
 * 
 * @summary  Interface for "saveAs" function.
 * @author  Cyril Schumacher
 * @version  1.0
 */
declare interface FileSaver {
    (data: Blob, filename: string, disableAutoBOM?: boolean): void
}
declare var saveAs: FileSaver;
declare module 'file-saver' {
    declare     var fileSaver: {
        saveAs: typeof saveAs
    };
    declare module.exports: typeof fileSaver
}
declare interface FinchCallback {
    (bindings?: any, childCallback?: () => void): any
}
declare interface ExpandedCallback {
    setup?: FinchCallback,
        load?: FinchCallback,
        unload?: FinchCallback,
        teardown?: FinchCallback
}
declare interface ObserveCallback {
    (...args: any[]): string
}
declare interface FinchOptions {
    CoerceParameterTypes?: boolean
}
declare interface FinchStatic {
    route(route: string, callback: FinchCallback): void,
        route(route: string, callbacks: ExpandedCallback): void,
        call(uri: string): void,
        observe(argN: string[], callback: (params: ObserveCallback) => void): void,
        observe(callback: (params: ObserveCallback) => void): void,
        observe(...args: any[]): void,
        navigate(uri: string, queryParams?: any, doUpdate?: boolean): void,
        navigate(uri: string, doUpdate: boolean): void,
        navigate(queryParams: any, doUpdate?: boolean): void,
        listen(): boolean,
        ignore(): boolean,
        abort(): void,
        options(options: FinchOptions): void
}
declare var Finch: FinchStatic;
declare module 'finch' {
    declare module.exports: typeof Finch
}