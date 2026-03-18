import { createRequire } from "node:module";
import __vite_rsc_assets_manifest from "./__vite_rsc_assets_manifest.js";
import * as ReactDOM from "react-dom";
import { renderToReadableStream, renderToStaticMarkup } from "react-dom/server.edge";
import * as React$1 from "react";
import { createElement } from "react";
import { AsyncLocalStorage } from "node:async_hooks";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ createRequire(import.meta.url);
//#endregion
//#region node_modules/.pnpm/@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom-webpack@19.2._27d3e37e57f3d9d2e534c266c00bf5cc/node_modules/@vitejs/plugin-rsc/dist/dist-yW9-EeG1.js
function safeFunctionCast(f) {
	return f;
}
function memoize(f, options) {
	const keyFn = options?.keyFn ?? ((...args) => args[0]);
	const cache = options?.cache ?? /* @__PURE__ */ new Map();
	return safeFunctionCast(function(...args) {
		const key = keyFn(...args);
		const value = cache.get(key);
		if (typeof value !== "undefined") return value;
		const newValue = f.apply(this, args);
		cache.set(key, newValue);
		return newValue;
	});
}
function removeReferenceCacheTag(id) {
	return id.split("$$cache=")[0];
}
function setInternalRequire() {
	globalThis.__vite_rsc_require__ = (id) => {
		if (id.startsWith("$$server:")) {
			id = id.slice(9);
			return globalThis.__vite_rsc_server_require__(id);
		}
		return globalThis.__vite_rsc_client_require__(id);
	};
}
//#endregion
//#region node_modules/.pnpm/@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom-webpack@19.2._27d3e37e57f3d9d2e534c266c00bf5cc/node_modules/@vitejs/plugin-rsc/dist/core/ssr.js
var init = false;
function setRequireModule(options) {
	if (init) return;
	init = true;
	const requireModule = memoize((id) => {
		return options.load(removeReferenceCacheTag(id));
	});
	globalThis.__vite_rsc_client_require__ = requireModule;
	setInternalRequire();
}
function createServerConsumerManifest() {
	return {};
}
//#endregion
//#region node_modules/.pnpm/@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom-webpack@19.2._27d3e37e57f3d9d2e534c266c00bf5cc/node_modules/@vitejs/plugin-rsc/dist/vendor/react-server-dom/cjs/react-server-dom-webpack-client.edge.production.js
/**
* @license React
* react-server-dom-webpack-client.edge.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_server_dom_webpack_client_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactDOM$1 = __require("react-dom"), decoderOptions = { stream: !0 }, hasOwnProperty = Object.prototype.hasOwnProperty;
	function resolveClientReference(bundlerConfig, metadata) {
		if (bundlerConfig) {
			var moduleExports = bundlerConfig[metadata[0]];
			if (bundlerConfig = moduleExports && moduleExports[metadata[2]]) moduleExports = bundlerConfig.name;
			else {
				bundlerConfig = moduleExports && moduleExports["*"];
				if (!bundlerConfig) throw Error("Could not find the module \"" + metadata[0] + "\" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.");
				moduleExports = metadata[2];
			}
			return 4 === metadata.length ? [
				bundlerConfig.id,
				bundlerConfig.chunks,
				moduleExports,
				1
			] : [
				bundlerConfig.id,
				bundlerConfig.chunks,
				moduleExports
			];
		}
		return metadata;
	}
	function resolveServerReference(bundlerConfig, id) {
		var name = "", resolvedModuleData = bundlerConfig[id];
		if (resolvedModuleData) name = resolvedModuleData.name;
		else {
			var idx = id.lastIndexOf("#");
			-1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
			if (!resolvedModuleData) throw Error("Could not find the module \"" + id + "\" in the React Server Manifest. This is probably a bug in the React Server Components bundler.");
		}
		return resolvedModuleData.async ? [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name,
			1
		] : [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name
		];
	}
	var chunkCache = /* @__PURE__ */ new Map();
	function requireAsyncModule(id) {
		var promise = __vite_rsc_require__(id);
		if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
		promise.then(function(value) {
			promise.status = "fulfilled";
			promise.value = value;
		}, function(reason) {
			promise.status = "rejected";
			promise.reason = reason;
		});
		return promise;
	}
	function ignoreReject() {}
	function preloadModule(metadata) {
		for (var chunks = metadata[1], promises = [], i = 0; i < chunks.length;) {
			var chunkId = chunks[i++];
			chunks[i++];
			var entry = chunkCache.get(chunkId);
			if (void 0 === entry) {
				entry = __webpack_chunk_load__(chunkId);
				promises.push(entry);
				var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
				entry.then(resolve, ignoreReject);
				chunkCache.set(chunkId, entry);
			} else null !== entry && promises.push(entry);
		}
		return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
			return requireAsyncModule(metadata[0]);
		}) : 0 < promises.length ? Promise.all(promises) : null;
	}
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	function prepareDestinationWithChunks(moduleLoading, chunks, nonce$jscomp$0) {
		if (null !== moduleLoading) for (var i = 1; i < chunks.length; i += 2) {
			var nonce = nonce$jscomp$0, JSCompiler_temp_const = ReactDOMSharedInternals.d, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.X, JSCompiler_temp_const$jscomp$1 = moduleLoading.prefix + chunks[i];
			var JSCompiler_inline_result = moduleLoading.crossOrigin;
			JSCompiler_inline_result = "string" === typeof JSCompiler_inline_result ? "use-credentials" === JSCompiler_inline_result ? JSCompiler_inline_result : "" : void 0;
			JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, JSCompiler_temp_const$jscomp$1, {
				crossOrigin: JSCompiler_inline_result,
				nonce
			});
		}
	}
	var ReactDOMSharedInternals = ReactDOM$1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ASYNC_ITERATOR = Symbol.asyncIterator, isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf, ObjectPrototype = Object.prototype, knownServerReferences = /* @__PURE__ */ new WeakMap();
	function serializeNumber(number) {
		return Number.isFinite(number) ? 0 === number && -Infinity === 1 / number ? "$-0" : number : Infinity === number ? "$Infinity" : -Infinity === number ? "$-Infinity" : "$NaN";
	}
	function processReply(root, formFieldPrefix, temporaryReferences, resolve, reject) {
		function serializeTypedArray(tag, typedArray) {
			typedArray = new Blob([new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength)]);
			var blobId = nextPartId++;
			null === formData && (formData = new FormData());
			formData.append(formFieldPrefix + blobId, typedArray);
			return "$" + tag + blobId.toString(16);
		}
		function serializeBinaryReader(reader) {
			function progress(entry) {
				entry.done ? (entry = nextPartId++, data.append(formFieldPrefix + entry, new Blob(buffer)), data.append(formFieldPrefix + streamId, "\"$o" + entry.toString(16) + "\""), data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data)) : (buffer.push(entry.value), reader.read(new Uint8Array(1024)).then(progress, reject));
			}
			null === formData && (formData = new FormData());
			var data = formData;
			pendingParts++;
			var streamId = nextPartId++, buffer = [];
			reader.read(new Uint8Array(1024)).then(progress, reject);
			return "$r" + streamId.toString(16);
		}
		function serializeReader(reader) {
			function progress(entry) {
				if (entry.done) data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data);
				else try {
					var partJSON = JSON.stringify(entry.value, resolveToJSON);
					data.append(formFieldPrefix + streamId, partJSON);
					reader.read().then(progress, reject);
				} catch (x) {
					reject(x);
				}
			}
			null === formData && (formData = new FormData());
			var data = formData;
			pendingParts++;
			var streamId = nextPartId++;
			reader.read().then(progress, reject);
			return "$R" + streamId.toString(16);
		}
		function serializeReadableStream(stream) {
			try {
				var binaryReader = stream.getReader({ mode: "byob" });
			} catch (x) {
				return serializeReader(stream.getReader());
			}
			return serializeBinaryReader(binaryReader);
		}
		function serializeAsyncIterable(iterable, iterator) {
			function progress(entry) {
				if (entry.done) {
					if (void 0 === entry.value) data.append(formFieldPrefix + streamId, "C");
					else try {
						var partJSON = JSON.stringify(entry.value, resolveToJSON);
						data.append(formFieldPrefix + streamId, "C" + partJSON);
					} catch (x) {
						reject(x);
						return;
					}
					pendingParts--;
					0 === pendingParts && resolve(data);
				} else try {
					var partJSON$21 = JSON.stringify(entry.value, resolveToJSON);
					data.append(formFieldPrefix + streamId, partJSON$21);
					iterator.next().then(progress, reject);
				} catch (x$22) {
					reject(x$22);
				}
			}
			null === formData && (formData = new FormData());
			var data = formData;
			pendingParts++;
			var streamId = nextPartId++;
			iterable = iterable === iterator;
			iterator.next().then(progress, reject);
			return "$" + (iterable ? "x" : "X") + streamId.toString(16);
		}
		function resolveToJSON(key, value) {
			if (null === value) return null;
			if ("object" === typeof value) {
				switch (value.$$typeof) {
					case REACT_ELEMENT_TYPE:
						if (void 0 !== temporaryReferences && -1 === key.indexOf(":")) {
							var parentReference = writtenObjects.get(this);
							if (void 0 !== parentReference) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
						}
						throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
					case REACT_LAZY_TYPE:
						parentReference = value._payload;
						var init = value._init;
						null === formData && (formData = new FormData());
						pendingParts++;
						try {
							var resolvedModel = init(parentReference), lazyId = nextPartId++, partJSON = serializeModel(resolvedModel, lazyId);
							formData.append(formFieldPrefix + lazyId, partJSON);
							return "$" + lazyId.toString(16);
						} catch (x) {
							if ("object" === typeof x && null !== x && "function" === typeof x.then) {
								pendingParts++;
								var lazyId$23 = nextPartId++;
								parentReference = function() {
									try {
										var partJSON$24 = serializeModel(value, lazyId$23), data$25 = formData;
										data$25.append(formFieldPrefix + lazyId$23, partJSON$24);
										pendingParts--;
										0 === pendingParts && resolve(data$25);
									} catch (reason) {
										reject(reason);
									}
								};
								x.then(parentReference, parentReference);
								return "$" + lazyId$23.toString(16);
							}
							reject(x);
							return null;
						} finally {
							pendingParts--;
						}
				}
				parentReference = writtenObjects.get(value);
				if ("function" === typeof value.then) {
					if (void 0 !== parentReference) if (modelRoot === value) modelRoot = null;
					else return parentReference;
					null === formData && (formData = new FormData());
					pendingParts++;
					var promiseId = nextPartId++;
					key = "$@" + promiseId.toString(16);
					writtenObjects.set(value, key);
					value.then(function(partValue) {
						try {
							var previousReference = writtenObjects.get(partValue);
							var partJSON$27 = void 0 !== previousReference ? JSON.stringify(previousReference) : serializeModel(partValue, promiseId);
							partValue = formData;
							partValue.append(formFieldPrefix + promiseId, partJSON$27);
							pendingParts--;
							0 === pendingParts && resolve(partValue);
						} catch (reason) {
							reject(reason);
						}
					}, reject);
					return key;
				}
				if (void 0 !== parentReference) if (modelRoot === value) modelRoot = null;
				else return parentReference;
				else -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference && (key = parentReference + ":" + key, writtenObjects.set(value, key), void 0 !== temporaryReferences && temporaryReferences.set(key, value)));
				if (isArrayImpl(value)) return value;
				if (value instanceof FormData) {
					null === formData && (formData = new FormData());
					var data$31 = formData;
					key = nextPartId++;
					var prefix = formFieldPrefix + key + "_";
					value.forEach(function(originalValue, originalKey) {
						data$31.append(prefix + originalKey, originalValue);
					});
					return "$K" + key.toString(16);
				}
				if (value instanceof Map) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$Q" + key.toString(16);
				if (value instanceof Set) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$W" + key.toString(16);
				if (value instanceof ArrayBuffer) return key = new Blob([value]), parentReference = nextPartId++, null === formData && (formData = new FormData()), formData.append(formFieldPrefix + parentReference, key), "$A" + parentReference.toString(16);
				if (value instanceof Int8Array) return serializeTypedArray("O", value);
				if (value instanceof Uint8Array) return serializeTypedArray("o", value);
				if (value instanceof Uint8ClampedArray) return serializeTypedArray("U", value);
				if (value instanceof Int16Array) return serializeTypedArray("S", value);
				if (value instanceof Uint16Array) return serializeTypedArray("s", value);
				if (value instanceof Int32Array) return serializeTypedArray("L", value);
				if (value instanceof Uint32Array) return serializeTypedArray("l", value);
				if (value instanceof Float32Array) return serializeTypedArray("G", value);
				if (value instanceof Float64Array) return serializeTypedArray("g", value);
				if (value instanceof BigInt64Array) return serializeTypedArray("M", value);
				if (value instanceof BigUint64Array) return serializeTypedArray("m", value);
				if (value instanceof DataView) return serializeTypedArray("V", value);
				if ("function" === typeof Blob && value instanceof Blob) return null === formData && (formData = new FormData()), key = nextPartId++, formData.append(formFieldPrefix + key, value), "$B" + key.toString(16);
				if (key = getIteratorFn(value)) return parentReference = key.call(value), parentReference === value ? (key = nextPartId++, parentReference = serializeModel(Array.from(parentReference), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$i" + key.toString(16)) : Array.from(parentReference);
				if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(value);
				key = value[ASYNC_ITERATOR];
				if ("function" === typeof key) return serializeAsyncIterable(value, key.call(value));
				key = getPrototypeOf(value);
				if (key !== ObjectPrototype && (null === key || null !== getPrototypeOf(key))) {
					if (void 0 === temporaryReferences) throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.");
					return "$T";
				}
				return value;
			}
			if ("string" === typeof value) {
				if ("Z" === value[value.length - 1] && this[key] instanceof Date) return "$D" + value;
				key = "$" === value[0] ? "$" + value : value;
				return key;
			}
			if ("boolean" === typeof value) return value;
			if ("number" === typeof value) return serializeNumber(value);
			if ("undefined" === typeof value) return "$undefined";
			if ("function" === typeof value) {
				parentReference = knownServerReferences.get(value);
				if (void 0 !== parentReference) {
					key = writtenObjects.get(value);
					if (void 0 !== key) return key;
					key = JSON.stringify({
						id: parentReference.id,
						bound: parentReference.bound
					}, resolveToJSON);
					null === formData && (formData = new FormData());
					parentReference = nextPartId++;
					formData.set(formFieldPrefix + parentReference, key);
					key = "$h" + parentReference.toString(16);
					writtenObjects.set(value, key);
					return key;
				}
				if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
				throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
			}
			if ("symbol" === typeof value) {
				if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
				throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
			}
			if ("bigint" === typeof value) return "$n" + value.toString(10);
			throw Error("Type " + typeof value + " is not supported as an argument to a Server Function.");
		}
		function serializeModel(model, id) {
			"object" === typeof model && null !== model && (id = "$" + id.toString(16), writtenObjects.set(model, id), void 0 !== temporaryReferences && temporaryReferences.set(id, model));
			modelRoot = model;
			return JSON.stringify(model, resolveToJSON);
		}
		var nextPartId = 1, pendingParts = 0, formData = null, writtenObjects = /* @__PURE__ */ new WeakMap(), modelRoot = root, json = serializeModel(root, 0);
		null === formData ? resolve(json) : (formData.set(formFieldPrefix + "0", json), 0 === pendingParts && resolve(formData));
		return function() {
			0 < pendingParts && (pendingParts = 0, null === formData ? resolve(json) : resolve(formData));
		};
	}
	var boundCache = /* @__PURE__ */ new WeakMap();
	function encodeFormData(reference) {
		var resolve, reject, thenable = new Promise(function(res, rej) {
			resolve = res;
			reject = rej;
		});
		processReply(reference, "", void 0, function(body) {
			if ("string" === typeof body) {
				var data = new FormData();
				data.append("0", body);
				body = data;
			}
			thenable.status = "fulfilled";
			thenable.value = body;
			resolve(body);
		}, function(e) {
			thenable.status = "rejected";
			thenable.reason = e;
			reject(e);
		});
		return thenable;
	}
	function defaultEncodeFormAction(identifierPrefix) {
		var referenceClosure = knownServerReferences.get(this);
		if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
		var data = null;
		if (null !== referenceClosure.bound) {
			data = boundCache.get(referenceClosure);
			data || (data = encodeFormData({
				id: referenceClosure.id,
				bound: referenceClosure.bound
			}), boundCache.set(referenceClosure, data));
			if ("rejected" === data.status) throw data.reason;
			if ("fulfilled" !== data.status) throw data;
			referenceClosure = data.value;
			var prefixedData = new FormData();
			referenceClosure.forEach(function(value, key) {
				prefixedData.append("$ACTION_" + identifierPrefix + ":" + key, value);
			});
			data = prefixedData;
			referenceClosure = "$ACTION_REF_" + identifierPrefix;
		} else referenceClosure = "$ACTION_ID_" + referenceClosure.id;
		return {
			name: referenceClosure,
			method: "POST",
			encType: "multipart/form-data",
			data
		};
	}
	function isSignatureEqual(referenceId, numberOfBoundArgs) {
		var referenceClosure = knownServerReferences.get(this);
		if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
		if (referenceClosure.id !== referenceId) return !1;
		var boundPromise = referenceClosure.bound;
		if (null === boundPromise) return 0 === numberOfBoundArgs;
		switch (boundPromise.status) {
			case "fulfilled": return boundPromise.value.length === numberOfBoundArgs;
			case "pending": throw boundPromise;
			case "rejected": throw boundPromise.reason;
			default: throw "string" !== typeof boundPromise.status && (boundPromise.status = "pending", boundPromise.then(function(boundArgs) {
				boundPromise.status = "fulfilled";
				boundPromise.value = boundArgs;
			}, function(error) {
				boundPromise.status = "rejected";
				boundPromise.reason = error;
			})), boundPromise;
		}
	}
	function registerBoundServerReference(reference, id, bound, encodeFormAction) {
		knownServerReferences.has(reference) || (knownServerReferences.set(reference, {
			id,
			originalBind: reference.bind,
			bound
		}), Object.defineProperties(reference, {
			$$FORM_ACTION: { value: void 0 === encodeFormAction ? defaultEncodeFormAction : function() {
				var referenceClosure = knownServerReferences.get(this);
				if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
				var boundPromise = referenceClosure.bound;
				null === boundPromise && (boundPromise = Promise.resolve([]));
				return encodeFormAction(referenceClosure.id, boundPromise);
			} },
			$$IS_SIGNATURE_EQUAL: { value: isSignatureEqual },
			bind: { value: bind }
		}));
	}
	var FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice;
	function bind() {
		var referenceClosure = knownServerReferences.get(this);
		if (!referenceClosure) return FunctionBind.apply(this, arguments);
		var newFn = referenceClosure.originalBind.apply(this, arguments), args = ArraySlice.call(arguments, 1), boundPromise = null;
		boundPromise = null !== referenceClosure.bound ? Promise.resolve(referenceClosure.bound).then(function(boundArgs) {
			return boundArgs.concat(args);
		}) : Promise.resolve(args);
		knownServerReferences.set(newFn, {
			id: referenceClosure.id,
			originalBind: newFn.bind,
			bound: boundPromise
		});
		Object.defineProperties(newFn, {
			$$FORM_ACTION: { value: this.$$FORM_ACTION },
			$$IS_SIGNATURE_EQUAL: { value: isSignatureEqual },
			bind: { value: bind }
		});
		return newFn;
	}
	function createBoundServerReference(metaData, callServer, encodeFormAction) {
		function action() {
			var args = Array.prototype.slice.call(arguments);
			return bound ? "fulfilled" === bound.status ? callServer(id, bound.value.concat(args)) : Promise.resolve(bound).then(function(boundArgs) {
				return callServer(id, boundArgs.concat(args));
			}) : callServer(id, args);
		}
		var id = metaData.id, bound = metaData.bound;
		registerBoundServerReference(action, id, bound, encodeFormAction);
		return action;
	}
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model":
				initializeModelChunk(this);
				break;
			case "resolved_module": initializeModuleChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				"function" === typeof resolve && resolve(this.value);
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			case "halted": break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	function readChunk(chunk) {
		switch (chunk.status) {
			case "resolved_model":
				initializeModelChunk(chunk);
				break;
			case "resolved_module": initializeModuleChunk(chunk);
		}
		switch (chunk.status) {
			case "fulfilled": return chunk.value;
			case "pending":
			case "blocked":
			case "halted": throw chunk;
			default: throw chunk.reason;
		}
	}
	function wakeChunk(listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
		}
	}
	function rejectChunk(listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(listener, error);
		}
	}
	function resolveBlockedCycle(resolvedChunk, reference) {
		var referencedChunk = reference.handler.chunk;
		if (null === referencedChunk) return null;
		if (referencedChunk === resolvedChunk) return reference.handler;
		reference = referencedChunk.value;
		if (null !== reference) for (referencedChunk = 0; referencedChunk < reference.length; referencedChunk++) {
			var listener = reference[referencedChunk];
			if ("function" !== typeof listener && (listener = resolveBlockedCycle(resolvedChunk, listener), null !== listener)) return listener;
		}
		return null;
	}
	function wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners) {
		switch (chunk.status) {
			case "fulfilled":
				wakeChunk(resolveListeners, chunk.value, chunk);
				break;
			case "blocked": for (var i = 0; i < resolveListeners.length; i++) {
				var listener = resolveListeners[i];
				if ("function" !== typeof listener) {
					var cyclicHandler = resolveBlockedCycle(chunk, listener);
					if (null !== cyclicHandler) switch (fulfillReference(listener, cyclicHandler.value, chunk), resolveListeners.splice(i, 1), i--, null !== rejectListeners && (listener = rejectListeners.indexOf(listener), -1 !== listener && rejectListeners.splice(listener, 1)), chunk.status) {
						case "fulfilled":
							wakeChunk(resolveListeners, chunk.value, chunk);
							return;
						case "rejected":
							null !== rejectListeners && rejectChunk(rejectListeners, chunk.reason);
							return;
					}
				}
			}
			case "pending":
				if (chunk.value) for (i = 0; i < resolveListeners.length; i++) chunk.value.push(resolveListeners[i]);
				else chunk.value = resolveListeners;
				if (chunk.reason) {
					if (rejectListeners) for (resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++) chunk.reason.push(rejectListeners[resolveListeners]);
				} else chunk.reason = rejectListeners;
				break;
			case "rejected": rejectListeners && rejectChunk(rejectListeners, chunk.reason);
		}
	}
	function triggerErrorOnChunk(response, chunk, error) {
		"pending" !== chunk.status && "blocked" !== chunk.status ? chunk.reason.error(error) : (response = chunk.reason, chunk.status = "rejected", chunk.reason = error, null !== response && rejectChunk(response, error));
	}
	function createResolvedIteratorResultChunk(response, value, done) {
		return new ReactPromise("resolved_model", (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", response);
	}
	function resolveIteratorResultChunk(response, chunk, value, done) {
		resolveModelChunk(response, chunk, (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}");
	}
	function resolveModelChunk(response, chunk, value) {
		if ("pending" !== chunk.status) chunk.reason.enqueueModel(value);
		else {
			var resolveListeners = chunk.value, rejectListeners = chunk.reason;
			chunk.status = "resolved_model";
			chunk.value = value;
			chunk.reason = response;
			null !== resolveListeners && (initializeModelChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
		}
	}
	function resolveModuleChunk(response, chunk, value) {
		if ("pending" === chunk.status || "blocked" === chunk.status) {
			response = chunk.value;
			var rejectListeners = chunk.reason;
			chunk.status = "resolved_module";
			chunk.value = value;
			chunk.reason = null;
			null !== response && (initializeModuleChunk(chunk), wakeChunkIfInitialized(chunk, response, rejectListeners));
		}
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var resolvedModel = chunk.value, response = chunk.reason;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var value = JSON.parse(resolvedModel, response._fromJSON), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, resolvedModel = 0; resolvedModel < resolveListeners.length; resolvedModel++) {
				var listener = resolveListeners[resolvedModel];
				"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function initializeModuleChunk(chunk) {
		try {
			var value = requireModule(chunk.value);
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		}
	}
	function reportGlobalError(weakResponse, error) {
		weakResponse._closed = !0;
		weakResponse._closedReason = error;
		weakResponse._chunks.forEach(function(chunk) {
			"pending" === chunk.status ? triggerErrorOnChunk(weakResponse, chunk, error) : "fulfilled" === chunk.status && null !== chunk.reason && chunk.reason.error(error);
		});
	}
	function createLazyChunkWrapper(chunk) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: chunk,
			_init: readChunk
		};
	}
	function getChunk(response, id) {
		var chunks = response._chunks, chunk = chunks.get(id);
		chunk || (chunk = response._closed ? new ReactPromise("rejected", null, response._closedReason) : new ReactPromise("pending", null, null), chunks.set(id, chunk));
		return chunk;
	}
	function fulfillReference(reference, value) {
		var response = reference.response, handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var i = 1; i < path.length; i++) {
				for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
					var referencedChunk = value._payload;
					if (referencedChunk === handler.chunk) value = handler.value;
					else {
						switch (referencedChunk.status) {
							case "resolved_model":
								initializeModelChunk(referencedChunk);
								break;
							case "resolved_module": initializeModuleChunk(referencedChunk);
						}
						switch (referencedChunk.status) {
							case "fulfilled":
								value = referencedChunk.value;
								continue;
							case "blocked":
								var cyclicHandler = resolveBlockedCycle(referencedChunk, reference);
								if (null !== cyclicHandler) {
									value = cyclicHandler.value;
									continue;
								}
							case "pending":
								path.splice(0, i - 1);
								null === referencedChunk.value ? referencedChunk.value = [reference] : referencedChunk.value.push(reference);
								null === referencedChunk.reason ? referencedChunk.reason = [reference] : referencedChunk.reason.push(reference);
								return;
							case "halted": return;
							default:
								rejectReference(reference, referencedChunk.reason);
								return;
						}
					}
				}
				var name = path[i];
				if ("object" === typeof value && null !== value && hasOwnProperty.call(value, name)) value = value[name];
				else throw Error("Invalid reference.");
			}
			for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
				var referencedChunk$44 = value._payload;
				if (referencedChunk$44 === handler.chunk) value = handler.value;
				else {
					switch (referencedChunk$44.status) {
						case "resolved_model":
							initializeModelChunk(referencedChunk$44);
							break;
						case "resolved_module": initializeModuleChunk(referencedChunk$44);
					}
					switch (referencedChunk$44.status) {
						case "fulfilled":
							value = referencedChunk$44.value;
							continue;
					}
					break;
				}
			}
			var mappedValue = map(response, value, parentObject, key);
			"__proto__" !== key && (parentObject[key] = mappedValue);
			"" === key && null === handler.value && (handler.value = mappedValue);
			if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) {
				var element = handler.value;
				switch (key) {
					case "3": element.props = mappedValue;
				}
			}
		} catch (error) {
			rejectReference(reference, error);
			return;
		}
		handler.deps--;
		0 === handler.deps && (reference = handler.chunk, null !== reference && "blocked" === reference.status && (value = reference.value, reference.status = "fulfilled", reference.value = handler.value, reference.reason = handler.reason, null !== value && wakeChunk(value, handler.value, reference)));
	}
	function rejectReference(reference, error) {
		var handler = reference.handler;
		reference = reference.response;
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(reference, handler, error));
	}
	function waitForReference(referencedChunk, parentObject, key, response, map, path) {
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			parent: null,
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		parentObject = {
			response,
			handler,
			parentObject,
			key,
			map,
			path
		};
		null === referencedChunk.value ? referencedChunk.value = [parentObject] : referencedChunk.value.push(parentObject);
		null === referencedChunk.reason ? referencedChunk.reason = [parentObject] : referencedChunk.reason.push(parentObject);
		return null;
	}
	function loadServerReference(response, metaData, parentObject, key) {
		if (!response._serverReferenceConfig) return createBoundServerReference(metaData, response._callServer, response._encodeFormAction);
		var serverReference = resolveServerReference(response._serverReferenceConfig, metaData.id), promise = preloadModule(serverReference);
		if (promise) metaData.bound && (promise = Promise.all([promise, metaData.bound]));
		else if (metaData.bound) promise = Promise.resolve(metaData.bound);
		else return promise = requireModule(serverReference), registerBoundServerReference(promise, metaData.id, metaData.bound, response._encodeFormAction), promise;
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			parent: null,
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		promise.then(function() {
			var resolvedValue = requireModule(serverReference);
			if (metaData.bound) {
				var boundArgs = metaData.bound.value.slice(0);
				boundArgs.unshift(null);
				resolvedValue = resolvedValue.bind.apply(resolvedValue, boundArgs);
			}
			registerBoundServerReference(resolvedValue, metaData.id, metaData.bound, response._encodeFormAction);
			"__proto__" !== key && (parentObject[key] = resolvedValue);
			"" === key && null === handler.value && (handler.value = resolvedValue);
			if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch (boundArgs = handler.value, key) {
				case "3": boundArgs.props = resolvedValue;
			}
			handler.deps--;
			0 === handler.deps && (resolvedValue = handler.chunk, null !== resolvedValue && "blocked" === resolvedValue.status && (boundArgs = resolvedValue.value, resolvedValue.status = "fulfilled", resolvedValue.value = handler.value, resolvedValue.reason = null, null !== boundArgs && wakeChunk(boundArgs, handler.value, resolvedValue)));
		}, function(error) {
			if (!handler.errored) {
				handler.errored = !0;
				handler.value = null;
				handler.reason = error;
				var chunk = handler.chunk;
				null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(response, chunk, error);
			}
		});
		return null;
	}
	function getOutlinedModel(response, reference, parentObject, key, map) {
		reference = reference.split(":");
		var id = parseInt(reference[0], 16);
		id = getChunk(response, id);
		switch (id.status) {
			case "resolved_model":
				initializeModelChunk(id);
				break;
			case "resolved_module": initializeModuleChunk(id);
		}
		switch (id.status) {
			case "fulfilled":
				id = id.value;
				for (var i = 1; i < reference.length; i++) {
					for (; "object" === typeof id && null !== id && id.$$typeof === REACT_LAZY_TYPE;) {
						id = id._payload;
						switch (id.status) {
							case "resolved_model":
								initializeModelChunk(id);
								break;
							case "resolved_module": initializeModuleChunk(id);
						}
						switch (id.status) {
							case "fulfilled":
								id = id.value;
								break;
							case "blocked":
							case "pending": return waitForReference(id, parentObject, key, response, map, reference.slice(i - 1));
							case "halted": return initializingHandler ? (response = initializingHandler, response.deps++) : initializingHandler = {
								parent: null,
								chunk: null,
								value: null,
								reason: null,
								deps: 1,
								errored: !1
							}, null;
							default: return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = id.reason) : initializingHandler = {
								parent: null,
								chunk: null,
								value: null,
								reason: id.reason,
								deps: 0,
								errored: !0
							}, null;
						}
					}
					id = id[reference[i]];
				}
				for (; "object" === typeof id && null !== id && id.$$typeof === REACT_LAZY_TYPE;) {
					reference = id._payload;
					switch (reference.status) {
						case "resolved_model":
							initializeModelChunk(reference);
							break;
						case "resolved_module": initializeModuleChunk(reference);
					}
					switch (reference.status) {
						case "fulfilled":
							id = reference.value;
							continue;
					}
					break;
				}
				return map(response, id, parentObject, key);
			case "pending":
			case "blocked": return waitForReference(id, parentObject, key, response, map, reference);
			case "halted": return initializingHandler ? (response = initializingHandler, response.deps++) : initializingHandler = {
				parent: null,
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			}, null;
			default: return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = id.reason) : initializingHandler = {
				parent: null,
				chunk: null,
				value: null,
				reason: id.reason,
				deps: 0,
				errored: !0
			}, null;
		}
	}
	function createMap(response, model) {
		return new Map(model);
	}
	function createSet(response, model) {
		return new Set(model);
	}
	function createBlob(response, model) {
		return new Blob(model.slice(1), { type: model[0] });
	}
	function createFormData(response, model) {
		response = new FormData();
		for (var i = 0; i < model.length; i++) response.append(model[i][0], model[i][1]);
		return response;
	}
	function extractIterator(response, model) {
		return model[Symbol.iterator]();
	}
	function createModel(response, model) {
		return model;
	}
	function parseModelString(response, parentObject, key, value) {
		if ("$" === value[0]) {
			if ("$" === value) return null !== initializingHandler && "0" === key && (initializingHandler = {
				parent: initializingHandler,
				chunk: null,
				value: null,
				reason: null,
				deps: 0,
				errored: !1
			}), REACT_ELEMENT_TYPE;
			switch (value[1]) {
				case "$": return value.slice(1);
				case "L": return parentObject = parseInt(value.slice(2), 16), response = getChunk(response, parentObject), createLazyChunkWrapper(response);
				case "@": return parentObject = parseInt(value.slice(2), 16), getChunk(response, parentObject);
				case "S": return Symbol.for(value.slice(2));
				case "h": return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, loadServerReference);
				case "T":
					parentObject = "$" + value.slice(2);
					response = response._tempRefs;
					if (null == response) throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");
					return response.get(parentObject);
				case "Q": return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createMap);
				case "W": return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createSet);
				case "B": return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createBlob);
				case "K": return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createFormData);
				case "Z": return resolveErrorProd();
				case "i": return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, extractIterator);
				case "I": return Infinity;
				case "-": return "$-0" === value ? -0 : -Infinity;
				case "N": return NaN;
				case "u": return;
				case "D": return new Date(Date.parse(value.slice(2)));
				case "n": return BigInt(value.slice(2));
				default: return value = value.slice(1), getOutlinedModel(response, value, parentObject, key, createModel);
			}
		}
		return value;
	}
	function missingCall() {
		throw Error("Trying to call a function from \"use server\" but the callServer option was not implemented in your router runtime.");
	}
	function ResponseInstance(bundlerConfig, serverReferenceConfig, moduleLoading, callServer, encodeFormAction, nonce, temporaryReferences) {
		var chunks = /* @__PURE__ */ new Map();
		this._bundlerConfig = bundlerConfig;
		this._serverReferenceConfig = serverReferenceConfig;
		this._moduleLoading = moduleLoading;
		this._callServer = void 0 !== callServer ? callServer : missingCall;
		this._encodeFormAction = encodeFormAction;
		this._nonce = nonce;
		this._chunks = chunks;
		this._stringDecoder = new TextDecoder();
		this._fromJSON = null;
		this._closed = !1;
		this._closedReason = null;
		this._tempRefs = temporaryReferences;
		this._fromJSON = createFromJSONCallback(this);
	}
	function resolveBuffer(response, id, buffer) {
		response = response._chunks;
		var chunk = response.get(id);
		chunk && "pending" !== chunk.status ? chunk.reason.enqueueValue(buffer) : (buffer = new ReactPromise("fulfilled", buffer, null), response.set(id, buffer));
	}
	function resolveModule(response, id, model) {
		var chunks = response._chunks, chunk = chunks.get(id);
		model = JSON.parse(model, response._fromJSON);
		var clientReference = resolveClientReference(response._bundlerConfig, model);
		prepareDestinationWithChunks(response._moduleLoading, model[1], response._nonce);
		if (model = preloadModule(clientReference)) {
			if (chunk) {
				var blockedChunk = chunk;
				blockedChunk.status = "blocked";
			} else blockedChunk = new ReactPromise("blocked", null, null), chunks.set(id, blockedChunk);
			model.then(function() {
				return resolveModuleChunk(response, blockedChunk, clientReference);
			}, function(error) {
				return triggerErrorOnChunk(response, blockedChunk, error);
			});
		} else chunk ? resolveModuleChunk(response, chunk, clientReference) : (chunk = new ReactPromise("resolved_module", clientReference, null), chunks.set(id, chunk));
	}
	function resolveStream(response, id, stream, controller) {
		response = response._chunks;
		var chunk = response.get(id);
		chunk ? "pending" === chunk.status && (id = chunk.value, chunk.status = "fulfilled", chunk.value = stream, chunk.reason = controller, null !== id && wakeChunk(id, chunk.value, chunk)) : (stream = new ReactPromise("fulfilled", stream, controller), response.set(id, stream));
	}
	function startReadableStream(response, id, type) {
		var controller = null, closed = !1;
		type = new ReadableStream({
			type,
			start: function(c) {
				controller = c;
			}
		});
		var previousBlockedChunk = null;
		resolveStream(response, id, type, {
			enqueueValue: function(value) {
				null === previousBlockedChunk ? controller.enqueue(value) : previousBlockedChunk.then(function() {
					controller.enqueue(value);
				});
			},
			enqueueModel: function(json) {
				if (null === previousBlockedChunk) {
					var chunk = new ReactPromise("resolved_model", json, response);
					initializeModelChunk(chunk);
					"fulfilled" === chunk.status ? controller.enqueue(chunk.value) : (chunk.then(function(v) {
						return controller.enqueue(v);
					}, function(e) {
						return controller.error(e);
					}), previousBlockedChunk = chunk);
				} else {
					chunk = previousBlockedChunk;
					var chunk$55 = new ReactPromise("pending", null, null);
					chunk$55.then(function(v) {
						return controller.enqueue(v);
					}, function(e) {
						return controller.error(e);
					});
					previousBlockedChunk = chunk$55;
					chunk.then(function() {
						previousBlockedChunk === chunk$55 && (previousBlockedChunk = null);
						resolveModelChunk(response, chunk$55, json);
					});
				}
			},
			close: function() {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.close();
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.close();
					});
				}
			},
			error: function(error) {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.error(error);
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.error(error);
					});
				}
			}
		});
	}
	function asyncIterator() {
		return this;
	}
	function createIterator(next) {
		next = { next };
		next[ASYNC_ITERATOR] = asyncIterator;
		return next;
	}
	function startAsyncIterable(response, id, iterator) {
		var buffer = [], closed = !1, nextWriteIndex = 0, iterable = {};
		iterable[ASYNC_ITERATOR] = function() {
			var nextReadIndex = 0;
			return createIterator(function(arg) {
				if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
				if (nextReadIndex === buffer.length) {
					if (closed) return new ReactPromise("fulfilled", {
						done: !0,
						value: void 0
					}, null);
					buffer[nextReadIndex] = new ReactPromise("pending", null, null);
				}
				return buffer[nextReadIndex++];
			});
		};
		resolveStream(response, id, iterator ? iterable[ASYNC_ITERATOR]() : iterable, {
			enqueueValue: function(value) {
				if (nextWriteIndex === buffer.length) buffer[nextWriteIndex] = new ReactPromise("fulfilled", {
					done: !1,
					value
				}, null);
				else {
					var chunk = buffer[nextWriteIndex], resolveListeners = chunk.value, rejectListeners = chunk.reason;
					chunk.status = "fulfilled";
					chunk.value = {
						done: !1,
						value
					};
					chunk.reason = null;
					null !== resolveListeners && wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners);
				}
				nextWriteIndex++;
			},
			enqueueModel: function(value) {
				nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !1);
				nextWriteIndex++;
			},
			close: function(value) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !0), nextWriteIndex++; nextWriteIndex < buffer.length;) resolveIteratorResultChunk(response, buffer[nextWriteIndex++], "\"$undefined\"", !0);
			},
			error: function(error) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = new ReactPromise("pending", null, null)); nextWriteIndex < buffer.length;) triggerErrorOnChunk(response, buffer[nextWriteIndex++], error);
			}
		});
	}
	function resolveErrorProd() {
		var error = Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
		error.stack = "Error: " + error.message;
		return error;
	}
	function mergeBuffer(buffer, lastChunk) {
		for (var l = buffer.length, byteLength = lastChunk.length, i = 0; i < l; i++) byteLength += buffer[i].byteLength;
		byteLength = new Uint8Array(byteLength);
		for (var i$56 = i = 0; i$56 < l; i$56++) {
			var chunk = buffer[i$56];
			byteLength.set(chunk, i);
			i += chunk.byteLength;
		}
		byteLength.set(lastChunk, i);
		return byteLength;
	}
	function resolveTypedArray(response, id, buffer, lastChunk, constructor, bytesPerElement) {
		buffer = 0 === buffer.length && 0 === lastChunk.byteOffset % bytesPerElement ? lastChunk : mergeBuffer(buffer, lastChunk);
		constructor = new constructor(buffer.buffer, buffer.byteOffset, buffer.byteLength / bytesPerElement);
		resolveBuffer(response, id, constructor);
	}
	function processFullBinaryRow(response, streamState, id, tag, buffer, chunk) {
		switch (tag) {
			case 65:
				resolveBuffer(response, id, mergeBuffer(buffer, chunk).buffer);
				return;
			case 79:
				resolveTypedArray(response, id, buffer, chunk, Int8Array, 1);
				return;
			case 111:
				resolveBuffer(response, id, 0 === buffer.length ? chunk : mergeBuffer(buffer, chunk));
				return;
			case 85:
				resolveTypedArray(response, id, buffer, chunk, Uint8ClampedArray, 1);
				return;
			case 83:
				resolveTypedArray(response, id, buffer, chunk, Int16Array, 2);
				return;
			case 115:
				resolveTypedArray(response, id, buffer, chunk, Uint16Array, 2);
				return;
			case 76:
				resolveTypedArray(response, id, buffer, chunk, Int32Array, 4);
				return;
			case 108:
				resolveTypedArray(response, id, buffer, chunk, Uint32Array, 4);
				return;
			case 71:
				resolveTypedArray(response, id, buffer, chunk, Float32Array, 4);
				return;
			case 103:
				resolveTypedArray(response, id, buffer, chunk, Float64Array, 8);
				return;
			case 77:
				resolveTypedArray(response, id, buffer, chunk, BigInt64Array, 8);
				return;
			case 109:
				resolveTypedArray(response, id, buffer, chunk, BigUint64Array, 8);
				return;
			case 86:
				resolveTypedArray(response, id, buffer, chunk, DataView, 1);
				return;
		}
		streamState = response._stringDecoder;
		for (var row = "", i = 0; i < buffer.length; i++) row += streamState.decode(buffer[i], decoderOptions);
		buffer = row += streamState.decode(chunk);
		switch (tag) {
			case 73:
				resolveModule(response, id, buffer);
				break;
			case 72:
				id = buffer[0];
				buffer = buffer.slice(1);
				response = JSON.parse(buffer, response._fromJSON);
				buffer = ReactDOMSharedInternals.d;
				switch (id) {
					case "D":
						buffer.D(response);
						break;
					case "C":
						"string" === typeof response ? buffer.C(response) : buffer.C(response[0], response[1]);
						break;
					case "L":
						id = response[0];
						tag = response[1];
						3 === response.length ? buffer.L(id, tag, response[2]) : buffer.L(id, tag);
						break;
					case "m":
						"string" === typeof response ? buffer.m(response) : buffer.m(response[0], response[1]);
						break;
					case "X":
						"string" === typeof response ? buffer.X(response) : buffer.X(response[0], response[1]);
						break;
					case "S":
						"string" === typeof response ? buffer.S(response) : buffer.S(response[0], 0 === response[1] ? void 0 : response[1], 3 === response.length ? response[2] : void 0);
						break;
					case "M": "string" === typeof response ? buffer.M(response) : buffer.M(response[0], response[1]);
				}
				break;
			case 69:
				tag = response._chunks;
				chunk = tag.get(id);
				buffer = JSON.parse(buffer);
				streamState = resolveErrorProd();
				streamState.digest = buffer.digest;
				chunk ? triggerErrorOnChunk(response, chunk, streamState) : (response = new ReactPromise("rejected", null, streamState), tag.set(id, response));
				break;
			case 84:
				response = response._chunks;
				(tag = response.get(id)) && "pending" !== tag.status ? tag.reason.enqueueValue(buffer) : (buffer = new ReactPromise("fulfilled", buffer, null), response.set(id, buffer));
				break;
			case 78:
			case 68:
			case 74:
			case 87: throw Error("Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.");
			case 82:
				startReadableStream(response, id, void 0);
				break;
			case 114:
				startReadableStream(response, id, "bytes");
				break;
			case 88:
				startAsyncIterable(response, id, !1);
				break;
			case 120:
				startAsyncIterable(response, id, !0);
				break;
			case 67:
				(id = response._chunks.get(id)) && "fulfilled" === id.status && id.reason.close("" === buffer ? "\"$undefined\"" : buffer);
				break;
			default: tag = response._chunks, (chunk = tag.get(id)) ? resolveModelChunk(response, chunk, buffer) : (response = new ReactPromise("resolved_model", buffer, response), tag.set(id, response));
		}
	}
	function createFromJSONCallback(response) {
		return function(key, value) {
			if ("__proto__" !== key) {
				if ("string" === typeof value) return parseModelString(response, this, key, value);
				if ("object" === typeof value && null !== value) {
					if (value[0] === REACT_ELEMENT_TYPE) {
						if (key = {
							$$typeof: REACT_ELEMENT_TYPE,
							type: value[1],
							key: value[2],
							ref: null,
							props: value[3]
						}, null !== initializingHandler) {
							if (value = initializingHandler, initializingHandler = value.parent, value.errored) key = new ReactPromise("rejected", null, value.reason), key = createLazyChunkWrapper(key);
							else if (0 < value.deps) {
								var blockedChunk = new ReactPromise("blocked", null, null);
								value.value = key;
								value.chunk = blockedChunk;
								key = createLazyChunkWrapper(blockedChunk);
							}
						}
					} else key = value;
					return key;
				}
				return value;
			}
		};
	}
	function close(weakResponse) {
		reportGlobalError(weakResponse, Error("Connection closed."));
	}
	function noServerCall() {
		throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.");
	}
	function createResponseFromOptions(options) {
		return new ResponseInstance(options.serverConsumerManifest.moduleMap, options.serverConsumerManifest.serverModuleMap, options.serverConsumerManifest.moduleLoading, noServerCall, options.encodeFormAction, "string" === typeof options.nonce ? options.nonce : void 0, options && options.temporaryReferences ? options.temporaryReferences : void 0);
	}
	function startReadingFromStream(response, stream, onDone) {
		function progress(_ref) {
			var value = _ref.value;
			if (_ref.done) return onDone();
			var i = 0, rowState = streamState._rowState;
			_ref = streamState._rowID;
			for (var rowTag = streamState._rowTag, rowLength = streamState._rowLength, buffer = streamState._buffer, chunkLength = value.length; i < chunkLength;) {
				var lastIdx = -1;
				switch (rowState) {
					case 0:
						lastIdx = value[i++];
						58 === lastIdx ? rowState = 1 : _ref = _ref << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
						continue;
					case 1:
						rowState = value[i];
						84 === rowState || 65 === rowState || 79 === rowState || 111 === rowState || 85 === rowState || 83 === rowState || 115 === rowState || 76 === rowState || 108 === rowState || 71 === rowState || 103 === rowState || 77 === rowState || 109 === rowState || 86 === rowState ? (rowTag = rowState, rowState = 2, i++) : 64 < rowState && 91 > rowState || 35 === rowState || 114 === rowState || 120 === rowState ? (rowTag = rowState, rowState = 3, i++) : (rowTag = 0, rowState = 3);
						continue;
					case 2:
						lastIdx = value[i++];
						44 === lastIdx ? rowState = 4 : rowLength = rowLength << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
						continue;
					case 3:
						lastIdx = value.indexOf(10, i);
						break;
					case 4: lastIdx = i + rowLength, lastIdx > value.length && (lastIdx = -1);
				}
				var offset = value.byteOffset + i;
				if (-1 < lastIdx) rowLength = new Uint8Array(value.buffer, offset, lastIdx - i), processFullBinaryRow(response, streamState, _ref, rowTag, buffer, rowLength), i = lastIdx, 3 === rowState && i++, rowLength = _ref = rowTag = rowState = 0, buffer.length = 0;
				else {
					value = new Uint8Array(value.buffer, offset, value.byteLength - i);
					buffer.push(value);
					rowLength -= value.byteLength;
					break;
				}
			}
			streamState._rowState = rowState;
			streamState._rowID = _ref;
			streamState._rowTag = rowTag;
			streamState._rowLength = rowLength;
			return reader.read().then(progress).catch(error);
		}
		function error(e) {
			reportGlobalError(response, e);
		}
		var streamState = {
			_rowState: 0,
			_rowID: 0,
			_rowTag: 0,
			_rowLength: 0,
			_buffer: []
		}, reader = stream.getReader();
		reader.read().then(progress).catch(error);
	}
	exports.createFromReadableStream = function(stream, options) {
		options = createResponseFromOptions(options);
		startReadingFromStream(options, stream, close.bind(null, options));
		return getChunk(options, 0);
	};
}));
//#endregion
//#region node_modules/.pnpm/@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom-webpack@19.2._27d3e37e57f3d9d2e534c266c00bf5cc/node_modules/@vitejs/plugin-rsc/dist/react/ssr.js
var import_client_edge = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_server_dom_webpack_client_edge_production();
})))(), 1);
function createFromReadableStream(stream, options = {}) {
	return import_client_edge.createFromReadableStream(stream, {
		serverConsumerManifest: createServerConsumerManifest(),
		...options
	});
}
//#endregion
//#region \0virtual:vite-rsc/client-references
var client_references_default = {
	"f29e6e234fea": async () => {
		return (await import("./assets/facade__virtual_vinext-rsc-entry-BDKp5m0h.js")).export_f29e6e234fea;
	},
	"0deffcb8ffd7": async () => {
		return (await import("./assets/facade__virtual_vinext-rsc-entry-BDKp5m0h.js")).export_0deffcb8ffd7;
	}
};
//#endregion
//#region node_modules/.pnpm/@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom-webpack@19.2._27d3e37e57f3d9d2e534c266c00bf5cc/node_modules/@vitejs/plugin-rsc/dist/ssr.js
var onClientReference;
initialize();
function initialize() {
	setRequireModule({ load: async (id) => {
		{
			const import_ = client_references_default[id];
			if (!import_) throw new Error(`client reference not found '${id}'`);
			const deps = __vite_rsc_assets_manifest.clientReferenceDeps[id] ?? {
				js: [],
				css: []
			};
			preloadDeps(deps);
			onClientReference?.({
				id,
				deps
			});
			return wrapResourceProxy(await import_(), id, deps);
		}
	} });
}
function wrapResourceProxy(mod, id, deps) {
	return new Proxy(mod, { get(target, p, receiver) {
		if (p in mod) {
			preloadDeps(deps);
			onClientReference?.({
				id,
				deps
			});
		}
		return Reflect.get(target, p, receiver);
	} });
}
function preloadDeps(deps) {
	for (const href of deps.js) ReactDOM.preloadModule(href, {
		as: "script",
		crossOrigin: ""
	});
	for (const href of deps.css) ReactDOM.preinit(href, {
		as: "style",
		precedence: __vite_rsc_assets_manifest.cssLinkPrecedence !== false ? "vite-rsc/client-reference" : void 0
	});
}
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/utils/base-path.js
/**
* Shared basePath helpers.
*
* Next.js only treats a pathname as being under basePath when it is an exact
* match ("/app") or starts with the basePath followed by a path separator
* ("/app/..."). Prefix-only matches like "/application" must be left intact.
*/
/**
* Check whether a pathname is inside the configured basePath.
*/
function hasBasePath(pathname, basePath) {
	if (!basePath) return false;
	return pathname === basePath || pathname.startsWith(basePath + "/");
}
/**
* Strip the basePath prefix from a pathname when it matches on a segment
* boundary. Returns the original pathname when it is outside the basePath.
*/
function stripBasePath(pathname, basePath) {
	if (!hasBasePath(pathname, basePath)) return pathname;
	return pathname.slice(basePath.length) || "/";
}
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/shims/readonly-url-search-params.js
var ReadonlyURLSearchParamsError = class extends Error {
	constructor() {
		super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
	}
};
/**
* Read-only URLSearchParams wrapper matching Next.js runtime behavior.
* Mutation methods remain present for instanceof/API compatibility but throw.
*/
var ReadonlyURLSearchParams = class extends URLSearchParams {
	append(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	delete(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	set(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	sort() {
		throw new ReadonlyURLSearchParamsError();
	}
};
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/shims/navigation.js
/**
* next/navigation shim
*
* App Router navigation hooks. These work on both server (RSC) and client.
* Server-side: reads from a request context set by the RSC handler.
* Client-side: reads from browser Location API and provides navigation.
*/
var navigation_exports = /* @__PURE__ */ __exportAll({
	HTTP_ERROR_FALLBACK_ERROR_CODE: () => HTTP_ERROR_FALLBACK_ERROR_CODE,
	MAX_PREFETCH_CACHE_SIZE: () => 50,
	PREFETCH_CACHE_TTL: () => PREFETCH_CACHE_TTL,
	ReadonlyURLSearchParams: () => ReadonlyURLSearchParams,
	RedirectType: () => RedirectType,
	ServerInsertedHTMLContext: () => ServerInsertedHTMLContext,
	_registerStateAccessors: () => _registerStateAccessors,
	clearServerInsertedHTML: () => clearServerInsertedHTML,
	flushServerInsertedHTML: () => flushServerInsertedHTML,
	getLayoutSegmentContext: () => getLayoutSegmentContext,
	setNavigationContext: () => setNavigationContext,
	usePathname: () => usePathname,
	useServerInsertedHTML: () => useServerInsertedHTML
});
var _LAYOUT_SEGMENT_CTX_KEY = Symbol.for("vinext.layoutSegmentContext");
var _SERVER_INSERTED_HTML_CTX_KEY = Symbol.for("vinext.serverInsertedHTMLContext");
function getServerInsertedHTMLContext() {
	if (typeof React$1.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_SERVER_INSERTED_HTML_CTX_KEY]) globalState[_SERVER_INSERTED_HTML_CTX_KEY] = React$1.createContext(null);
	return globalState[_SERVER_INSERTED_HTML_CTX_KEY] ?? null;
}
var ServerInsertedHTMLContext = getServerInsertedHTMLContext();
/**
* Get or create the layout segment context.
* Returns null in the RSC environment (createContext unavailable).
*/
function getLayoutSegmentContext() {
	if (typeof React$1.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_LAYOUT_SEGMENT_CTX_KEY]) globalState[_LAYOUT_SEGMENT_CTX_KEY] = React$1.createContext([]);
	return globalState[_LAYOUT_SEGMENT_CTX_KEY] ?? null;
}
var _serverContext = null;
var _serverInsertedHTMLCallbacks = [];
var _getServerContext = () => _serverContext;
var _setServerContext = (ctx) => {
	_serverContext = ctx;
};
var _getInsertedHTMLCallbacks = () => _serverInsertedHTMLCallbacks;
var _clearInsertedHTMLCallbacks = () => {
	_serverInsertedHTMLCallbacks = [];
};
/**
* Register ALS-backed state accessors. Called by navigation-state.ts on import.
* @internal
*/
function _registerStateAccessors(accessors) {
	_getServerContext = accessors.getServerContext;
	_setServerContext = accessors.setServerContext;
	_getInsertedHTMLCallbacks = accessors.getInsertedHTMLCallbacks;
	_clearInsertedHTMLCallbacks = accessors.clearInsertedHTMLCallbacks;
}
/**
* Set the navigation context for the current SSR/RSC render.
* Called by the framework entry before rendering each request.
*/
function setNavigationContext(ctx) {
	_setServerContext(ctx);
}
var isServer = typeof window === "undefined";
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath = "";
var _listeners = /* @__PURE__ */ new Set();
function notifyListeners() {
	for (const fn of _listeners) fn();
}
new ReadonlyURLSearchParams(!isServer ? window.location.search : "");
var _cachedPathname = !isServer ? stripBasePath(window.location.pathname, __basePath) : "/";
function getPathnameSnapshot() {
	const current = stripBasePath(window.location.pathname, __basePath);
	if (current !== _cachedPathname) _cachedPathname = current;
	return _cachedPathname;
}
function subscribeToNavigation(cb) {
	_listeners.add(cb);
	return () => {
		_listeners.delete(cb);
	};
}
/**
* Returns the current pathname.
* Server: from request context. Client: from window.location.
*/
function usePathname() {
	if (isServer) return _getServerContext()?.pathname ?? "/";
	return React$1.useSyncExternalStore(subscribeToNavigation, getPathnameSnapshot, () => _getServerContext()?.pathname ?? "/");
}
!isServer && window.history.replaceState.bind(window.history);
/**
* Restore scroll position from a history state object (used on popstate).
*
* When an RSC navigation is in flight (back/forward triggers both this
* handler and the browser entry's popstate handler which calls
* __VINEXT_RSC_NAVIGATE__), we must wait for the new content to render
* before scrolling. Otherwise the user sees old content flash at the
* restored scroll position.
*
* This handler fires before the browser entry's popstate handler (because
* navigation.ts is loaded before hydration completes), so we defer via a
* microtask to give the browser entry handler a chance to set
* __VINEXT_RSC_PENDING__ first.
*/
function restoreScrollPosition(state) {
	if (state && typeof state === "object" && "__vinext_scrollY" in state) {
		const { __vinext_scrollX: x, __vinext_scrollY: y } = state;
		Promise.resolve().then(() => {
			const pending = window.__VINEXT_RSC_PENDING__ ?? null;
			if (pending) pending.then(() => {
				requestAnimationFrame(() => {
					window.scrollTo(x, y);
				});
			});
			else requestAnimationFrame(() => {
				window.scrollTo(x, y);
			});
		});
	}
}
/**
* useServerInsertedHTML — inject HTML during SSR from client components.
*
* Used by CSS-in-JS libraries (styled-components, emotion, StyleX) to inject
* <style> tags during SSR so styles appear in the initial HTML (no FOUC).
*
* The callback is called once after each SSR render pass. The returned JSX/HTML
* is serialized and injected into the HTML stream.
*
* Usage (in a "use client" component wrapping children):
*   useServerInsertedHTML(() => {
*     const styles = sheet.getStyleElement();
*     sheet.instance.clearTag();
*     return <>{styles}</>;
*   });
*/
function useServerInsertedHTML(callback) {
	if (typeof document !== "undefined") return;
	_getInsertedHTMLCallbacks().push(callback);
}
/**
* Flush all collected useServerInsertedHTML callbacks.
* Returns an array of results (React elements or strings).
* Clears the callback list so the next render starts fresh.
*
* Called by the SSR entry after renderToReadableStream completes.
*/
function flushServerInsertedHTML() {
	const callbacks = _getInsertedHTMLCallbacks();
	const results = [];
	for (const cb of callbacks) try {
		const result = cb();
		if (result != null) results.push(result);
	} catch {}
	callbacks.length = 0;
	return results;
}
/**
* Clear all collected useServerInsertedHTML callbacks without flushing.
* Used for cleanup between requests.
*/
function clearServerInsertedHTML() {
	_clearInsertedHTMLCallbacks();
}
/**
* Enum matching Next.js RedirectType for type-safe redirect calls.
*/
var RedirectType;
(function(RedirectType) {
	RedirectType["push"] = "push";
	RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
if (!isServer) {
	window.addEventListener("popstate", (event) => {
		notifyListeners();
		restoreScrollPosition(event.state);
	});
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	window.history.pushState = function patchedPushState(data, unused, url) {
		originalPushState(data, unused, url);
		notifyListeners();
	};
	window.history.replaceState = function patchedReplaceState(data, unused, url) {
		originalReplaceState(data, unused, url);
		notifyListeners();
	};
}
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/shims/unified-request-context.js
/**
* Unified per-request context backed by a single AsyncLocalStorage.
*
* Consolidates the 5–6 nested ALS scopes that previously wrapped every
* App Router request (headers, navigation, cache-state, private-cache,
* fetch-cache, execution-context) into one flat store.
*
* Each shim module checks `isInsideUnifiedScope()` and reads its sub-fields
* from the unified store, falling back to its own standalone ALS when
* outside (SSR environment, Pages Router, tests).
*/
var _ALS_KEY$1 = Symbol.for("vinext.unifiedRequestContext.als");
var _REQUEST_CONTEXT_ALS_KEY = Symbol.for("vinext.requestContext.als");
var _g$1 = globalThis;
var _als$1 = _g$1[_ALS_KEY$1] ??= new AsyncLocalStorage();
function _getInheritedExecutionContext() {
	const unifiedStore = _als$1.getStore();
	if (unifiedStore) return unifiedStore.executionContext;
	return _g$1[_REQUEST_CONTEXT_ALS_KEY]?.getStore() ?? null;
}
/**
* Create a fresh `UnifiedRequestContext` with defaults for all fields.
* Pass partial overrides for the fields you need to pre-populate.
*/
function createRequestContext(opts) {
	return {
		headersContext: null,
		dynamicUsageDetected: false,
		pendingSetCookies: [],
		draftModeCookieHeader: null,
		phase: "render",
		i18nContext: null,
		serverContext: null,
		serverInsertedHTMLCallbacks: [],
		requestScopedCacheLife: null,
		_privateCache: null,
		currentRequestTags: [],
		executionContext: _getInheritedExecutionContext(),
		ssrContext: null,
		ssrHeadChildren: [],
		...opts
	};
}
/**
* Run `fn` in a nested unified scope derived from the current request context.
* Used by legacy runWith* wrappers to reset or override one sub-state while
* preserving proper async isolation for continuations created inside `fn`.
* The child scope is a shallow clone of the parent store, so untouched fields
* keep sharing their existing references while overridden slices can be reset.
*
* @internal
*/
function runWithUnifiedStateMutation(mutate, fn) {
	const parentCtx = _als$1.getStore();
	if (!parentCtx) return fn();
	const childCtx = { ...parentCtx };
	mutate(childCtx);
	return _als$1.run(childCtx, fn);
}
/**
* Get the current unified request context.
* Returns the ALS store when inside a `runWithRequestContext()` scope,
* or a fresh detached context otherwise. Unlike the legacy per-shim fallback
* singletons, this detached value is ephemeral — mutations do not persist
* across calls. This is intentional to prevent state leakage outside request
* scopes.
*
* Only direct callers observe this detached fallback. Shim `_getState()`
* helpers should continue to gate on `isInsideUnifiedScope()` and fall back
* to their standalone ALS/fallback singletons outside the unified scope.
* If called inside a standalone `runWithExecutionContext()` scope, the
* detached context still reflects that inherited `executionContext`.
*/
function getRequestContext() {
	return _als$1.getStore() ?? createRequestContext();
}
/**
* Check whether the current execution is inside a `runWithRequestContext()` scope.
* Shim modules use this to decide whether to read from the unified store
* or fall back to their own standalone ALS.
*/
function isInsideUnifiedScope() {
	return _als$1.getStore() != null;
}
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/shims/navigation-state.js
/**
* Server-only navigation state backed by AsyncLocalStorage.
*
* This module provides request-scoped isolation for navigation context
* and useServerInsertedHTML callbacks. Without ALS, concurrent requests
* on Cloudflare Workers would share module-level state and leak data
* (pathnames, params, CSS-in-JS styles) between requests.
*
* This module is server-only — it imports node:async_hooks and must NOT
* be bundled for the browser. The dual-environment navigation.ts shim
* uses a registration pattern so it works in both environments.
*/
var _ALS_KEY = Symbol.for("vinext.navigation.als");
var _FALLBACK_KEY = Symbol.for("vinext.navigation.fallback");
var _g = globalThis;
var _als = _g[_ALS_KEY] ??= new AsyncLocalStorage();
var _fallbackState = _g[_FALLBACK_KEY] ??= {
	serverContext: null,
	serverInsertedHTMLCallbacks: []
};
function _getState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als.getStore() ?? _fallbackState;
}
/**
* Run a function within a navigation ALS scope.
* Ensures per-request isolation for navigation context and
* useServerInsertedHTML callbacks on concurrent runtimes.
*/
function runWithNavigationContext(fn) {
	if (isInsideUnifiedScope()) return runWithUnifiedStateMutation((uCtx) => {
		uCtx.serverContext = null;
		uCtx.serverInsertedHTMLCallbacks = [];
	}, fn);
	return _als.run({
		serverContext: null,
		serverInsertedHTMLCallbacks: []
	}, fn);
}
_registerStateAccessors({
	getServerContext() {
		return _getState().serverContext;
	},
	setServerContext(ctx) {
		_getState().serverContext = ctx;
	},
	getInsertedHTMLCallbacks() {
		return _getState().serverInsertedHTMLCallbacks;
	},
	clearInsertedHTMLCallbacks() {
		_getState().serverInsertedHTMLCallbacks = [];
	}
});
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/server/html.js
/**
* HTML-safe JSON serialization for embedding data in <script> tags.
*
* JSON.stringify does NOT escape characters that are meaningful to the
* HTML parser. If a JSON string value contains "<\/script>", the browser
* closes the script tag early — anything after it executes as HTML.
* This is a well-known stored XSS vector in SSR frameworks.
*
* Next.js mitigates this with htmlEscapeJsonString(). We do the same.
*
* Characters escaped:
*   <   → \u003c   (prevents <\/script> and <!-- breakout)
*   >   → \u003e   (prevents --> and other HTML close sequences)
*   &   → \u0026   (prevents &lt; entity interpretation in XHTML)
*   \u2028 → \\u2028 (line separator — invalid in JS string literals pre-ES2019)
*   \u2029 → \\u2029 (paragraph separator — same)
*
* The result is valid JSON that is also safe to embed in any HTML context
* without additional escaping.
*/
function safeJsonStringify(data) {
	return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
//#endregion
//#region \0virtual:vinext-app-ssr-entry
/**
* Create a TransformStream that appends RSC chunks as inline <script> tags
* to the HTML stream. This allows progressive hydration — the browser receives
* RSC data incrementally as Suspense boundaries resolve, rather than waiting
* for the entire RSC payload before hydration can begin.
*
* Each chunk is written as:
*   <script>self.__VINEXT_RSC_CHUNKS__=self.__VINEXT_RSC_CHUNKS__||[];self.__VINEXT_RSC_CHUNKS__.push("...")<\/script>
*
* Chunks are embedded as text strings (not byte arrays) since the RSC flight
* protocol is text-based. The browser entry encodes them back to Uint8Array.
* This is ~3x more compact than the previous byte-array format.
*/
function createRscEmbedTransform(embedStream) {
	const reader = embedStream.getReader();
	const _decoder = new TextDecoder();
	let pendingChunks = [];
	let reading = false;
	function fixFlightHints(text) {
		return text.replace(/(\d+:HL\[.*?),"stylesheet"(\]|,)/g, "$1,\"style\"$2");
	}
	async function pumpReader() {
		if (reading) return;
		reading = true;
		try {
			while (true) {
				const result = await reader.read();
				if (result.done) break;
				const text = _decoder.decode(result.value, { stream: true });
				pendingChunks.push(fixFlightHints(text));
			}
		} catch (err) {}
		reading = false;
	}
	const pumpPromise = pumpReader();
	return {
		flush() {
			if (pendingChunks.length === 0) return "";
			const chunks = pendingChunks;
			pendingChunks = [];
			let scripts = "";
			for (const chunk of chunks) scripts += "<script>self.__VINEXT_RSC_CHUNKS__=self.__VINEXT_RSC_CHUNKS__||[];self.__VINEXT_RSC_CHUNKS__.push(" + safeJsonStringify(chunk) + ")<\/script>";
			return scripts;
		},
		async finalize() {
			await pumpPromise;
			let scripts = this.flush();
			scripts += "<script>self.__VINEXT_RSC_DONE__=true<\/script>";
			return scripts;
		}
	};
}
/**
* Render the RSC stream to HTML.
*
* @param rscStream - The RSC payload stream from the RSC environment
* @param navContext - Navigation context for client component SSR hooks.
*   "use client" components like those using usePathname() need the current
*   request URL during SSR, and they run in this SSR environment (separate
*   from the RSC environment where the context was originally set).
* @param fontData - Font links and styles collected from the RSC environment.
*   Fonts are loaded during RSC rendering (when layout calls Geist() etc.),
*   and the data needs to be passed to SSR since they're separate module instances.
*/
async function handleSsr(rscStream, navContext, fontData) {
	return runWithNavigationContext(async () => {
		if (navContext) setNavigationContext(navContext);
		const { clearServerInsertedHTML, flushServerInsertedHTML, useServerInsertedHTML: _addInsertedHTML } = await Promise.resolve().then(() => navigation_exports);
		clearServerInsertedHTML();
		try {
			const [ssrStream, embedStream] = rscStream.tee();
			const rscEmbed = createRscEmbedTransform(embedStream);
			let flightRoot;
			function VinextFlightRoot() {
				if (!flightRoot) flightRoot = createFromReadableStream(ssrStream);
				return flightRoot;
			}
			const root = createElement(VinextFlightRoot);
			const ssrRoot = ServerInsertedHTMLContext ? createElement(ServerInsertedHTMLContext.Provider, { value: _addInsertedHTML }, root) : root;
			const bootstrapScriptContent = await Promise.resolve(__vite_rsc_assets_manifest.bootstrapScriptContent);
			function ssrErrorDigest(str) {
				let hash = 5381;
				for (let i = str.length - 1; i >= 0; i--) hash = hash * 33 ^ str.charCodeAt(i);
				return (hash >>> 0).toString();
			}
			const htmlStream = await renderToReadableStream(ssrRoot, {
				bootstrapScriptContent,
				onError(error) {
					if (error && typeof error === "object" && "digest" in error) return String(error.digest);
					if (error) return ssrErrorDigest((error instanceof Error ? error.message : String(error)) + (error instanceof Error ? error.stack || "" : ""));
				}
			});
			const insertedElements = flushServerInsertedHTML();
			const { Fragment } = await import("react");
			let insertedHTML = "";
			for (const el of insertedElements) try {
				insertedHTML += renderToStaticMarkup(createElement(Fragment, null, el));
			} catch {}
			function _escAttr(s) {
				return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
			}
			let fontHTML = "";
			if (fontData) {
				if (fontData.links && fontData.links.length > 0) for (const url of fontData.links) fontHTML += "<link rel=\"stylesheet\" href=\"" + _escAttr(url) + "\" />\n";
				if (fontData.preloads && fontData.preloads.length > 0) for (const preload of fontData.preloads) fontHTML += "<link rel=\"preload\" href=\"" + _escAttr(preload.href) + "\" as=\"font\" type=\"" + _escAttr(preload.type) + "\" crossorigin />\n";
				if (fontData.styles && fontData.styles.length > 0) fontHTML += "<style data-vinext-fonts>" + fontData.styles.join("\n") + "</style>\n";
			}
			let modulePreloadHTML = "";
			if (bootstrapScriptContent) {
				const m = bootstrapScriptContent.match(/import\("([^"]+)"\)/);
				if (m && m[1]) modulePreloadHTML = "<link rel=\"modulepreload\" href=\"" + _escAttr(m[1]) + "\" />\n";
			}
			const injectHTML = "<script>self.__VINEXT_RSC_PARAMS__=" + safeJsonStringify(navContext?.params || {}) + "<\/script>" + ("<script>self.__VINEXT_RSC_NAV__=" + safeJsonStringify({
				pathname: navContext?.pathname ?? "/",
				searchParams: navContext?.searchParams ? [...navContext.searchParams.entries()] : []
			}) + "<\/script>") + modulePreloadHTML + insertedHTML + fontHTML;
			const decoder = new TextDecoder();
			const encoder = new TextEncoder();
			let injected = false;
			function fixPreloadAs(html) {
				return html.replace(/<link(?=[^>]*\srel="preload")[^>]*>/g, function(tag) {
					return tag.replace(" as=\"stylesheet\"", " as=\"style\"");
				});
			}
			let buffered = [];
			let timeoutId = null;
			const transform = new TransformStream({
				transform(chunk, controller) {
					const fixed = fixPreloadAs(decoder.decode(chunk, { stream: true }));
					buffered.push(fixed);
					if (timeoutId !== null) return;
					timeoutId = setTimeout(() => {
						for (const buf of buffered) {
							if (!injected) {
								const headEnd = buf.indexOf("</head>");
								if (headEnd !== -1) {
									const before = buf.slice(0, headEnd);
									const after = buf.slice(headEnd);
									controller.enqueue(encoder.encode(before + injectHTML + after));
									injected = true;
									continue;
								}
							}
							controller.enqueue(encoder.encode(buf));
						}
						buffered = [];
						const rscScripts = rscEmbed.flush();
						if (rscScripts) controller.enqueue(encoder.encode(rscScripts));
						timeoutId = null;
					}, 0);
				},
				async flush(controller) {
					if (timeoutId !== null) {
						clearTimeout(timeoutId);
						timeoutId = null;
					}
					for (const buf of buffered) {
						if (!injected) {
							const headEnd = buf.indexOf("</head>");
							if (headEnd !== -1) {
								const before = buf.slice(0, headEnd);
								const after = buf.slice(headEnd);
								controller.enqueue(encoder.encode(before + injectHTML + after));
								injected = true;
								continue;
							}
						}
						controller.enqueue(encoder.encode(buf));
					}
					buffered = [];
					if (!injected && injectHTML) controller.enqueue(encoder.encode(injectHTML));
					const finalScripts = await rscEmbed.finalize();
					if (finalScripts) controller.enqueue(encoder.encode(finalScripts));
				}
			});
			return htmlStream.pipeThrough(transform);
		} finally {
			setNavigationContext(null);
			clearServerInsertedHTML();
		}
	});
}
var _virtual_vinext_app_ssr_entry_default = { async fetch(request) {
	if (new URL(request.url).pathname.startsWith("//")) return new Response("404 Not Found", { status: 404 });
	const result = await (await import("../index.js")).default(request);
	if (result instanceof Response) return result;
	if (result === null || result === void 0) return new Response("Not Found", { status: 404 });
	return new Response(String(result), { status: 200 });
} };
//#endregion
export { _virtual_vinext_app_ssr_entry_default as default, handleSsr, usePathname as n, getLayoutSegmentContext as t };
