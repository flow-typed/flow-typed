

declare module 'html-entities' {
				declare class Entities  {
		encode(toEncode: string): string;
		encodeNonUTF(toEncode: string): string;
		encodeNonASCII(toEncode: string): string;
		decode(toDecode: string): string
	}

	declare class XmlEntities extends Entities {
		
	}

	declare class Html4Entities extends Entities {
		
	}

	declare class Html5Entities extends Entities {
		
	}

	declare class AllHtmlEntities extends Entities {
		
	}

	
}