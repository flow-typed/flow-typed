

declare module 'gandi-livedns' {
		declare interface Zone {
		uuid: string,
		name: string,
		primary_ns: string,
		apex_alias: string,
		email: string,
		serial: number,
		refresh: number,
		retry: number,
		expire: number,
		minimum: number
	}

	declare interface ZoneRecord {
		rrset_name: string,
		rrset_type: string,
		rrset_ttl: number,
		rrset_values: string[]
	}

	declare interface Domain {
		fqdn: string,
		zone_uuid: string
	}

	declare interface Snapshot {
		serial: number,
		zone_uuid: string,
		change_time: string,
		zone_data: ZoneRecord[]
	}

			
}