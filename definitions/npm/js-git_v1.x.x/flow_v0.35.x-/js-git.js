

declare module 'js-git' {
					
}

declare module 'npm$namespace$JSGit' {
		declare interface GitObject {
		type: string,
		body: any
	}

	declare interface GitCommit {
		tree: string,
		author: GitAuthor,
		message: string
	}

	declare interface GitAuthor {
		name: string,
		email: string,
		date: Date
	}

	declare interface GitTree {
		[i: number]: GitTreeElem
	}

	declare interface GitTreeElem {
		mode: number,
		name: string,
		hash: string
	}

	declare interface StringMap {
		[i: string]: string
	}

	declare interface Remote {
		hostname: string,
		pathname: string,
		discover(callback: (err: any, refs: StringMap) => void): void,
		fetch(repo: Repo, opts: Object, callback: (err: any) => void): void,
		close(callback?: (err: any) => void): void
	}

	declare interface DB {
		get(key: string, callback: (err: any, value: any) => void): void,
		set(key: string, value: any, callback: (err: any) => void): void,
		has(key: string, callback: (err: any, hasKey: boolean) => void): void,
		del(key: string, callback: (err: any) => void): void,
		keys(prefix: string, callback: (err: any, keys: string[]) => void): void,
		init(callback: (err: any) => void): void,
		clear(callback: (err: any) => void): void
	}

	declare interface Repo {
		load(hashish: string, callback: (err: any, git_object: GitObject) => void): void,
		save(git_object: GitObject, callback: (err: any, hash: string) => void): void,
		loadAs(type: string, hash: string, callback: (err: any, body: any) => void): void,
		saveAs(type: string, body: any, callback: (err: any, hash: string) => void): void,
		remove(hash: string, callback: (err: any) => void): void,
		unpack(packFileStream: any, opts: Object, callback: (err: any) => void): void,
		logWalk(hashish: string, callback: (err: any, log_stream: any) => void): void,
		treeWalk(hashish: string, callback: (err: any, file_stream: any) => void): void,
		walk(seed: any, scan: any, loadKey: any, compare: any): any,
		resolveHashish(hashish: string, callback: (err: any, hash: string) => void): void,
		updateHead(hash: string, callback: (err: any) => void): void,
		getHead(callback: (err: any, ref_name: string) => void): void,
		setHead(ref: string, callback: (err: any) => void): void,
		fetch(remote: Remote, opts: Object, callback: (err: any) => void): void
	}

			
}