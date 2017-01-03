// @flow
/**
 * Flowtype definitions for gm
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gm' {
    declare module.exports: typeof m

    declare     var npm$namespace$m: {
        compare: typeof m$compare,
        subClass: typeof m$subClass,
    }
    declare     export interface m$ClassOptions {
        imageMagick?: boolean,
            nativeAutoOrient?: boolean
    }

    declare     export interface m$CompareCallback {
        (err: Error, isEqual: boolean, equality: number, raw: number): any
    }

    declare     export interface m$GetterCallback<T>{
        (err: Error, value: T): any
    }

    declare     export interface m$WriteCallback {
        (err: Error, stdout: string, stderr: string, cmd: string): any
    }

    declare     export interface m$ChannelInfo<T>{
        Red: T,
        Green: T,
        Blue: T
    }

    declare     export interface m$CompareOptions {
        file?: string,
            highlightColor?: string,
            highlightStyle?: string,
            tolerance?: number
    }

    declare     export interface m$ColorStatistics {
        Minimum: string,
            Maximum: string,
            Mean: string,
            Standard Deviation: string
    }

    declare     export interface m$Dimensions {
        width: number,
            height: number
    }

    declare     export interface m$ImageInfo {
        Background Color: string,
            Border Color: string,
            Channel Depths: m$ChannelInfo<string>,
            Channel Statistics: m$ChannelInfo<m$ColorStatistics>,
            Class: string,
            color: number,
            Compose: string,
            Compression: string,
            depth: number,
            Depth: string,
            Dispose: string,
            Filesize: string,
            format: string,
            Format: string,
            Geometry: string,
            Interlace: string,
            Iterations: string,
            JPEG - Quality?: string,
            JPEG - Colorspace?: string,
            JPEG - Colorspace - Name?: string,
            JPEG - Sampling - factors?: string,
            Matte Color: string,
            Orientation: string,
            Page geometry: string,
            path: string,
            Profile - color?: string,
            Profile - iptc?: {
                [key: string]: string
            },
            Profile - EXIF?: {
                [key: string]: string
            },
            Profile - XMP?: string,
            Resolution?: string,
            size: m$Dimensions,
            Signature: string,
            Software: string,
            Tainted: string,
            Type: string
    }

    declare     export interface m$State {
        adjoin(): m$State,
            affine(matrix: string): m$State,
            antialias(enable: boolean): m$State,
            append(image: string, ltr?: boolean): m$State,
            authenticate(password: string): m$State,
            autoOrient(): m$State,
            backdrop(): m$State,
            bitdepth(bits: number): m$State,
            blackThreshold(intensity: number): m$State,
            blackThreshold(red: number, green: number, blue: number, opacity?: number): m$State,
            bluePrimary(x: number, y: number): m$State,
            blur(radius: number, sigma?: number): m$State,
            border(width: number, height: number): m$State,
            borderColor(color: string): m$State,
            box(color: string): m$State,
            channel(type: "Red"): m$State,
            channel(type: "Green"): m$State,
            channel(type: "Blue"): m$State,
            channel(type: "Opacity"): m$State,
            channel(type: "Matte"): m$State,
            channel(type: "Cyan"): m$State,
            channel(type: "Magenta"): m$State,
            channel(type: "Yellow"): m$State,
            channel(type: "Black"): m$State,
            channel(type: "Gray"): m$State,
            channel(type: string): m$State,
            charcoal(factor: number): m$State,
            chop(width: number, height: number, x?: number, y?: number): m$State,
            clip(): m$State,
            coalesce(): m$State,
            colorize(red: number, green: number, blue: number): m$State,
            colorMap(type: "shared"): m$State,
            colorMap(type: "private"): m$State,
            colorMap(type: string): m$State,
            colors(colors: number): m$State,
            colorspace(space: "CineonLog"): m$State,
            colorspace(space: "CMYK"): m$State,
            colorspace(space: "GRAY"): m$State,
            colorspace(space: "HSL"): m$State,
            colorspace(space: "HSB"): m$State,
            colorspace(space: "OHTA"): m$State,
            colorspace(space: "RGB"): m$State,
            colorspace(space: "Rec601Luma"): m$State,
            colorspace(space: "Rec709Luma"): m$State,
            colorspace(space: "Rec601YCbCr"): m$State,
            colorspace(space: "Rec709YCbCr"): m$State,
            colorspace(space: "Transparent"): m$State,
            colorspace(space: "XYZ"): m$State,
            colorspace(space: "YCbCr"): m$State,
            colorspace(space: "YIQ"): m$State,
            colorspace(space: "YPbPr"): m$State,
            colorspace(space: "YUV"): m$State,
            colorspace(space: string): m$State,
            compose(operator: "Over"): m$State,
            compose(operator: "In"): m$State,
            compose(operator: "Out"): m$State,
            compose(operator: "Atop"): m$State,
            compose(operator: "Xor"): m$State,
            compose(operator: "Plus"): m$State,
            compose(operator: "Minus"): m$State,
            compose(operator: "Add"): m$State,
            compose(operator: "Subtract"): m$State,
            compose(operator: "Difference"): m$State,
            compose(operator: "Divide"): m$State,
            compose(operator: "Multiply"): m$State,
            compose(operator: "Bumpmap"): m$State,
            compose(operator: "Copy"): m$State,
            compose(operator: "CopyRed"): m$State,
            compose(operator: "CopyGreen"): m$State,
            compose(operator: "CopyBlue"): m$State,
            compose(operator: "CopyOpacity"): m$State,
            compose(operator: "CopyCyan"): m$State,
            compose(operator: "CopyMagenta"): m$State,
            compose(operator: "CopyYellow"): m$State,
            compose(operator: "CopyBlack"): m$State,
            compose(operator: string): m$State,
            compress(type: "None"): m$State,
            compress(type: "BZip"): m$State,
            compress(type: "Fax"): m$State,
            compress(type: "Group4"): m$State,
            compress(type: "JPEG"): m$State,
            compress(type: "Lossless"): m$State,
            compress(type: "LZW"): m$State,
            compress(type: "RLE"): m$State,
            compress(type: "Zip"): m$State,
            compress(type: "LZMA"): m$State,
            compress(type: string): m$State,
            contrast(multiplier: number): m$State,
            convolve(kernel: string): m$State,
            createDirectories(): m$State,
            crop(
                width: number,
                height: number,
                x?: number,
                y?: number,
                percent?: boolean): m$State,
            cycle(amount: number): m$State,
            deconstruct(): m$State,
            define(): m$State,
            delay(milliseconds: number): m$State,
            density(width: number, height: number): m$State,
            despeckle(): m$State,
            displace(horizontal: number, vertical: number): m$State,
            display(xServer: string): m$State,
            dispose(method: "Undefined"): m$State,
            dispose(method: "None"): m$State,
            dispose(method: "Background"): m$State,
            dispose(method: "Previous"): m$State,
            dispose(method: string): m$State,
            dissolve(percent: number): m$State,
            dither(enable?: boolean): m$State,
            edge(radius?: number): m$State,
            emboss(radius?: number): m$State,
            encoding(encoding: "AdobeCustom"): m$State,
            encoding(encoding: "AdobeExpert"): m$State,
            encoding(encoding: "AdobeStandard"): m$State,
            encoding(encoding: "AppleRoman"): m$State,
            encoding(encoding: "BIG5"): m$State,
            encoding(encoding: "GB2312"): m$State,
            encoding(encoding: "Latin 2"): m$State,
            encoding(encoding: "None"): m$State,
            encoding(encoding: "SJIScode"): m$State,
            encoding(encoding: "Symbol"): m$State,
            encoding(encoding: "Unicode"): m$State,
            encoding(encoding: "Wansung"): m$State,
            encoding(encoding: string): m$State,
            endian(type: "MSB"): m$State,
            endian(type: "LSB"): m$State,
            endian(type: "Native"): m$State,
            endian(type: string): m$State,
            enhance(): m$State,
            equalize(): m$State,
            extent(width: number, height: number, options?: string): m$State,
            file(filename: string): m$State,
            filter(type: "Point"): m$State,
            filter(type: "Box"): m$State,
            filter(type: "Triangle"): m$State,
            filter(type: "Hermite"): m$State,
            filter(type: "Hanning"): m$State,
            filter(type: "Hamming"): m$State,
            filter(type: "Blackman"): m$State,
            filter(type: "Gaussian"): m$State,
            filter(type: "Quadratic"): m$State,
            filter(type: "Cubic"): m$State,
            filter(type: "Catrom"): m$State,
            filter(type: "Mitchell"): m$State,
            filter(type: "Lanczos"): m$State,
            filter(type: "Bessel"): m$State,
            filter(type: "Sinc"): m$State,
            filter(type: string): m$State,
            flatten(): m$State,
            flip(): m$State,
            flop(): m$State,
            foreground(color: string): m$State,
            frame(
                width: number,
                height: number,
                outerBevelWidth: number,
                outBevelHeight: number): m$State,
            fuzz(distance: number, percent?: boolean): m$State,
            gamma(r: number, g: number, b: number): m$State,
            gaussian(radius: number, sigma?: number): m$State,

            /**
             * Width and height are specified in percents 
             */
            geometry(width: number, height: number, option: "%"): m$State,

            /**
             * Specify maximum area in pixels 
             */
            geometry(width: number, height: number, option: "@"): m$State,

            /**
             * Ignore aspect ratio 
             */
            geometry(width: number, height: number, option: "!"): m$State,

            /**
             * Width and height are minimum values 
             */
            geometry(width: number, height: number, option: "^"): m$State,

            /**
             * Change dimensions only if image is smaller than width or height 
             */
            geometry(width: number, height: number, option: "<"): m$State,

            /**
             * Change dimensions only if image is larger than width or height 
             */
            geometry(width: number, height: number, option: ">"): m$State,
            geometry(width: number, height?: number, option?: string): m$State,
            geometry(geometry: string): m$State,
            greenPrimary(x: number, y: number): m$State,
            gravity(direction: "NorthWest"): m$State,
            gravity(direction: "North"): m$State,
            gravity(direction: "NorthEast"): m$State,
            gravity(direction: "West"): m$State,
            gravity(direction: "Center"): m$State,
            gravity(direction: "East"): m$State,
            gravity(direction: "SouthWest"): m$State,
            gravity(direction: "South"): m$State,
            gravity(direction: "SouthEast"): m$State,
            gravity(direction: string): m$State,
            highlightColor(color: string): m$State,
            highlightStyle(style: "Assign"): m$State,
            highlightStyle(style: "Threshold"): m$State,
            highlightStyle(style: "Tint"): m$State,
            highlightStyle(style: "XOR"): m$State,
            highlightStyle(style: string): m$State,
            iconGeometry(geometry: string): m$State,
            implode(factor?: number): m$State,
            intent(type: "Absolute"): m$State,
            intent(type: "Perceptual"): m$State,
            intent(type: "Relative"): m$State,
            intent(type: "Saturation"): m$State,
            intent(type: string): m$State,
            interlace(type: "None"): m$State,
            interlace(type: "Line"): m$State,
            interlace(type: "Plane"): m$State,
            interlace(type: "Partition"): m$State,
            interlace(type: string): m$State,
            label(name: string): m$State,
            lat(width: number, height: number, offset: number, percent?: boolean): m$State,
            level(
                blackPoint: number,
                gamma: number,
                whitePoint: number,
                percent?: boolean): m$State,
            limit(type: "disk", val: string): m$State,
            limit(type: "file", val: string): m$State,
            limit(type: "map", val: string): m$State,
            limit(type: "memory", val: string): m$State,
            limit(type: "pixels", val: string): m$State,
            limit(type: "threads", val: string): m$State,
            limit(type: string, val: string): m$State,
            list(type: string): m$State,
            list(type: "Color"): m$State,
            list(type: "Delegate"): m$State,
            list(type: "Format"): m$State,
            list(type: "Magic"): m$State,
            list(type: "Module"): m$State,
            list(type: "Resource"): m$State,
            list(type: "Type"): m$State,
            log(format: string): m$State,
            loop(iterations: number): m$State,
            lower(width: number, height: number): m$State,
            magnify(factor: number): m$State,
            map(filename: string): m$State,
            mask(filename: string): m$State,
            matte(): m$State,
            matteColor(color: string): m$State,
            maximumError(limit: number): m$State,
            median(radius?: number): m$State,
            minify(factor: number): m$State,
            mode(mode: "frame"): m$State,
            mode(mode: "unframe"): m$State,
            mode(mode: "concatenate"): m$State,
            mode(mode: string): m$State,
            modulate(b: number, s: number, h: number): m$State,
            monitor(): m$State,
            monochrome(): m$State,
            morph(otherImg: string, outName: string, callback?: m$WriteCallback): m$State,
            morph(otherImg: string[], outName: string, callback?: m$WriteCallback): m$State,
            mosaic(): m$State,
            motionBlur(radius: number, sigma?: number, angle?: number): m$State,
            name(): m$State,
            negative(): m$State,
            noise(type: "uniform"): m$State,
            noise(type: "gaussian"): m$State,
            noise(type: "multiplicative"): m$State,
            noise(type: "impulse"): m$State,
            noise(type: "laplacian"): m$State,
            noise(type: "poisson"): m$State,
            noise(type: string): m$State,
            noise(radius: number): m$State,
            noop(): m$State,
            normalize(): m$State,
            opaque(color: string): m$State,
            operator(channel: string, operator: "Add", rvalue: number, percent?: boolean): m$State,
            operator(channel: string, operator: "And", rvalue: number, percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Assign",
                rvalue: number,
                percent?: boolean): m$State,
            operator(channel: string, operator: "Depth", rvalue: number, percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Divide",
                rvalue: number,
                percent?: boolean): m$State,
            operator(channel: string, operator: "Gamma", rvalue: number, percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Negate",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "LShift",
                rvalue: number,
                percent?: boolean): m$State,
            operator(channel: string, operator: "Log", rvalue: number, percent?: boolean): m$State,
            operator(channel: string, operator: "Max", rvalue: number, percent?: boolean): m$State,
            operator(channel: string, operator: "Min", rvalue: number, percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Multiply",
                rvalue: number,
                percent?: boolean): m$State,
            operator(channel: string, operator: "Or", rvalue: number, percent?: boolean): m$State,
            operator(channel: string, operator: "Pow", rvalue: number, percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "RShift",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Subtract",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Threshold",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Threshold-White",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Threshold-White-Negate",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Threshold-Black",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Threshold-Black-Negate",
                rvalue: number,
                percent?: boolean): m$State,
            operator(channel: string, operator: "Xor", rvalue: number, percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Gaussian",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Impulse",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Laplacian",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Multiplicative",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Poisson",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Random",
                rvalue: number,
                percent?: boolean): m$State,
            operator(
                channel: string,
                operator: "Noise-Uniform",
                rvalue: number,
                percent?: boolean): m$State,
            operator(channel: string, operator: string, rvalue: number, percent?: boolean): m$State,
            orderedDither(channelType: "All", NxN: string): m$State,
            orderedDither(channelType: "Intensity", NxN: string): m$State,
            orderedDither(channelType: "Red", NxN: string): m$State,
            orderedDither(channelType: "Green", NxN: string): m$State,
            orderedDither(channelType: "Blue", NxN: string): m$State,
            orderedDither(channelType: "Cyan", NxN: string): m$State,
            orderedDither(channelType: "Magenta", NxN: string): m$State,
            orderedDither(channelType: "Yellow", NxN: string): m$State,
            orderedDither(channelType: "Black", NxN: string): m$State,
            orderedDither(channelType: "Opacity", NxN: string): m$State,
            orderedDither(channelType: string, NxN: string): m$State,
            outputDirectory(directory: string): m$State,
            page(width: number, height: number, arg?: "%"): m$State,
            page(width: number, height: number, arg?: "!"): m$State,
            page(width: number, height: number, arg?: "<"): m$State,
            page(width: number, height: number, arg?: ">"): m$State,
            page(width: number, height: number, arg?: string): m$State,
            pause(seconds: number): m$State,
            pen(color: string): m$State,
            ping(): m$State,
            pointSize(size: number): m$State,
            noProfile(): m$State,
            preview(type: "Rotate"): m$State,
            preview(type: "Shear"): m$State,
            preview(type: "Roll"): m$State,
            preview(type: "Hue"): m$State,
            preview(type: "Saturation"): m$State,
            preview(type: "Brightness"): m$State,
            preview(type: "Gamma"): m$State,
            preview(type: "Spiff"): m$State,
            preview(type: "Dull"): m$State,
            preview(type: "Grayscale"): m$State,
            preview(type: "Quantize"): m$State,
            preview(type: "Despeckle"): m$State,
            preview(type: "ReduceNoise"): m$State,
            preview(type: "AddNoise"): m$State,
            preview(type: "Sharpen"): m$State,
            preview(type: "Blur"): m$State,
            preview(type: "Threshold"): m$State,
            preview(type: "EdgeDetect"): m$State,
            preview(type: "Spread"): m$State,
            preview(type: "Shade"): m$State,
            preview(type: "Raise"): m$State,
            preview(type: "Segment"): m$State,
            preview(type: "Solarize"): m$State,
            preview(type: "Swirl"): m$State,
            preview(type: "Implode"): m$State,
            preview(type: "Wave"): m$State,
            preview(type: "OilPaint"): m$State,
            preview(type: "CharcoalDrawing"): m$State,
            preview(type: "JPEG"): m$State,
            preview(type: string): m$State,
            paint(radius: number): m$State,
            process(command: string): m$State,
            profile(filename: string): m$State,
            progress(): m$State,
            randomThreshold(channelType: "All", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Intensity", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Red", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Green", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Blue", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Cyan", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Magenta", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Yellow", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Black", LOWxHIGH: string): m$State,
            randomThreshold(channelType: "Opacity", LOWxHIGH: string): m$State,
            randomThreshold(channelType: string, LOWxHIGH: string): m$State,
            quality(level: number): m$State,
            raise(width: number, height: number): m$State,
            recolor(matrix: string): m$State,
            redPrimary(x: number, y: number): m$State,
            region(width: number, height: number, x?: number, y?: number): m$State,
            remote(): m$State,
            render(): m$State,
            repage(reset: "+"): m$State,
            repage(reset: string): m$State,
            repage(
                width: number,
                height: number,
                xoff: number,
                yoff: number,
                arg?: string): m$State,
            sample(geometry: string): m$State,
            samplingFactor(horizontalFactor: number, verticalFactor: number): m$State,
            rawSize(width: number, height: number, offset?: number): m$State,
            resample(horizontal: number, vertical: number): m$State,

            /**
             * Width and height are specified in percents 
             */
            resize(width: number, height: number, option: "%"): m$State,

            /**
             * Specify maximum area in pixels 
             */
            resize(width: number, height: number, option: "@"): m$State,

            /**
             * Ignore aspect ratio 
             */
            resize(width: number, height: number, option: "!"): m$State,

            /**
             * Width and height are minimum values 
             */
            resize(width: number, height: number, option: "^"): m$State,

            /**
             * Change dimensions only if image is smaller than width or height 
             */
            resize(width: number, height: number, option: "<"): m$State,

            /**
             * Change dimensions only if image is larger than width or height 
             */
            resize(width: number, height: number, option: ">"): m$State,
            resize(width: number, height?: number, option?: string): m$State,
            roll(horizontal: number, vertical: number): m$State,
            rotate(backgroundColor: string, degrees: number): m$State,
            scene(index: number): m$State,
            scenes(start: number, end: number): m$State,
            scale(width: number, height: number): m$State,
            screen(): m$State,
            segment(clustherThreshold: number, smoothingThreshold: number): m$State,
            sepia(): m$State,
            set(attribute: string, value: string): m$State,
            setFormat(format: string): m$State,
            shade(azimuth: number, elevation: number): m$State,
            shadow(radius: number, sigma?: number): m$State,
            sharedMemory(): m$State,
            shave(width: number, height: number, percent?: boolean): m$State,
            sharpen(radius: number, sigma?: number): m$State,
            shear(xDegrees: number, yDegress: number): m$State,
            silent(): m$State,
            snaps(count: number): m$State,
            solarize(threshold: number): m$State,
            spread(amount: number): m$State,
            stegano(offset: number): m$State,
            stereo(): m$State,
            strip(): m$State,
            swirl(degrees: number): m$State,
            textFont(font: string): m$State,
            threshold(value: number, percent?: boolean): m$State,
            thumb(
                width: number,
                height: number,
                outName: string,
                callback: m$WriteCallback): m$State,
            thumb(
                width: number,
                height: number,
                outName: string,
                quality: number,
                callback: m$WriteCallback): m$State,
            thumb(
                width: number,
                height: number,
                outName: string,
                quality: number,
                align: "topleft",
                callback: m$WriteCallback): m$State,
            thumb(
                width: number,
                height: number,
                outName: string,
                quality: number,
                align: "center",
                callback: m$WriteCallback): m$State,
            thumb(
                width: number,
                height: number,
                outName: string,
                quality: number,
                align: string,
                callback: m$WriteCallback): m$State,
            tile(filename: string): m$State,
            title(title: string): m$State,
            transform(color: string): m$State,
            transparent(color: string): m$State,
            treeDepth(depth: number): m$State,
            trim(): m$State,
            type(type: "Bilevel"): m$State,
            type(type: "Grayscale"): m$State,
            type(type: "Palette"): m$State,
            type(type: "PaletteMatte"): m$State,
            type(type: "TrueColor"): m$State,
            type(type: "TrueColorMatte"): m$State,
            type(type: "ColorSeparation"): m$State,
            type(type: "ColorSeparationMatte"): m$State,
            type(type: "Optimize"): m$State,
            type(type: string): m$State,
            update(seconds: number): m$State,
            units(type: "Undefined"): m$State,
            units(type: "PixelsPerInch"): m$State,
            units(type: "PixelsPerCentimeter"): m$State,
            units(type: string): m$State,
            unsharp(radius: number, sigma?: number, amount?: number, threshold?: number): m$State,
            usePixmap(): m$State,
            view(): m$State,
            virtualPixel(method: "Constant"): m$State,
            virtualPixel(method: "Edge"): m$State,
            virtualPixel(method: "Mirror"): m$State,
            virtualPixel(method: "Tile"): m$State,
            virtualPixel(method: string): m$State,
            visual(type: "StaticGray"): m$State,
            visual(type: "GrayScale"): m$State,
            visual(type: "StaticColor"): m$State,
            visual(type: "PseudoColor"): m$State,
            visual(type: "TrueColor"): m$State,
            visual(type: "DirectColor"): m$State,
            visual(type: "default"): m$State,
            visual(type: string): m$State,
            watermark(brightness: number, saturation: number): m$State,
            wave(amplitude: number, wavelength: number): m$State,
            whitePoint(x: number, y: number): m$State,
            whiteThreshold(intensity: number): m$State,
            whiteThreshold(red: number, green: number, blue: number, opacity?: number): m$State,
            window(id: string): m$State,
            windowGroup(): m$State,
            color(callback: m$GetterCallback<number>): m$State,
            depth(callback: m$GetterCallback<number>): m$State,
            filesize(callback: m$GetterCallback<string>): m$State,
            format(callback: m$GetterCallback<string>): m$State,
            identify(callback: m$GetterCallback<m$ImageInfo>): m$State,
            res(callback: m$GetterCallback<string>): m$State,
            size(callback: m$GetterCallback<m$Dimensions>): m$State,
            orientation(callback: m$GetterCallback<string>): m$State,
            draw(args: string): m$State,
            drawArc(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                r0: number,
                r1: number): m$State,
            drawBezier(x0: number, y0: number, x1: number, y1: number): m$State,
            drawBezier(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number): m$State,
            drawBezier(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number,
                ...coords: number[]): m$State,
            drawCircle(x0: number, y0: number, x1: number, y1: number): m$State,
            drawEllipse(
                x0: number,
                y0: number,
                rx: number,
                ry: number,
                a0: number,
                a1: number): m$State,
            drawLine(x0: number, y0: number, x1: number, y1: number): m$State,
            drawPoint(x: number, y: number): m$State,
            drawPolygon(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number): m$State,
            drawPolygon(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number,
                ...coords: number[]): m$State,
            drawPolyline(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number): m$State,
            drawPolyline(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                x2: number,
                y2: number,
                ...coords: number[]): m$State,
            drawRectangle(x0: number, y0: number, x1: number, y1: number): m$State,
            drawRectangle(x0: number, y0: number, x1: number, y1: number, rc: number): m$State,
            drawRectangle(
                x0: number,
                y0: number,
                x1: number,
                y1: number,
                wc: number,
                hc: number): m$State,
            drawText(x: number, y: number, text: string, gravity: "NorthWest"): m$State,
            drawText(x: number, y: number, text: string, gravity: "North"): m$State,
            drawText(x: number, y: number, text: string, gravity: "NorthEast"): m$State,
            drawText(x: number, y: number, text: string, gravity: "West"): m$State,
            drawText(x: number, y: number, text: string, gravity: "Center"): m$State,
            drawText(x: number, y: number, text: string, gravity: "East"): m$State,
            drawText(x: number, y: number, text: string, gravity: "SouthWest"): m$State,
            drawText(x: number, y: number, text: string, gravity: "South"): m$State,
            drawText(x: number, y: number, text: string, gravity: "SouthEast"): m$State,
            drawText(x: number, y: number, text: string, gravity?: string): m$State,
            fill(color: string): m$State,
            font(name: string, size?: number): m$State,
            fontSize(size: number): m$State,
            stroke(color: string, width?: number): m$State,
            strokeWidth(width: number): m$State,
            setDraw(property: "color", x: number, y: number, method: "point"): m$State,
            setDraw(property: "color", x: number, y: number, method: "replace"): m$State,
            setDraw(property: "color", x: number, y: number, method: "floodfill"): m$State,
            setDraw(property: "color", x: number, y: number, method: "filltoborder"): m$State,
            setDraw(property: "color", x: number, y: number, method: "reset"): m$State,
            setDraw(property: "matte", x: number, y: number, method: "point"): m$State,
            setDraw(property: "matte", x: number, y: number, method: "replace"): m$State,
            setDraw(property: "matte", x: number, y: number, method: "floodfill"): m$State,
            setDraw(property: "matte", x: number, y: number, method: "filltoborder"): m$State,
            setDraw(property: "matte", x: number, y: number, method: "reset"): m$State,
            setDraw(property: string, x: number, y: number, method: string): m$State,
            stream(callback?: m$WriteCallback): stream.PassThrough,
            stream(format: string, callback?: m$WriteCallback): stream.PassThrough,
            toBuffer(callback: (err: Error, buffer: Buffer) => any): stream.PassThrough,
            toBuffer(
                format: string,
                callback: (err: Error, buffer: Buffer) => any): stream.PassThrough,
            write(filename: string, callback: m$WriteCallback): void
    }

    declare     export interface m$SubClass {
        (image: string): m$State
    }

    declare     export function m$compare(filename1: string, filename2: string, callback: m$CompareCallback): void

    declare     export function m$subClass(options: m$ClassOptions): m$SubClass
}