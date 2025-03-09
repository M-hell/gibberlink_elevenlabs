(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_be7b0a._.js", {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            xs: "h-6 rounded-md px-3 text-xs",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            xl: "h-12 rounded-lg px-10",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 13
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/audioUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "audioMessageEmitter": (()=>audioMessageEmitter),
    "createAnalyserNode": (()=>createAnalyserNode),
    "getAnalyserNode": (()=>getAnalyserNode),
    "getIsRecording": (()=>getIsRecording),
    "getcontext": (()=>getcontext),
    "getggwave": (()=>getggwave),
    "getinputContext": (()=>getinputContext),
    "getinputStream": (()=>getinputStream),
    "getinstance": (()=>getinstance),
    "initAudio": (()=>initAudio),
    "myID": (()=>myID),
    "sendAudioMessage": (()=>sendAudioMessage),
    "startRecording": (()=>startRecording),
    "stopRecording": (()=>stopRecording)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)");
;
const audioMessageEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"]();
// Utility for handling audio messages
let context = null;
let ggwave = null;
let instance = null;
let inputContext = null;
let inputStream = null;
let analyserNode = null;
// Global state for recording
let mediaStreamInstance = null;
let mediaStream = null;
let recorder = null;
let isRecording = false;
// Helper function to convert array types
function convertTypedArray(src, type) {
    const buffer = new ArrayBuffer(src.byteLength);
    new src.constructor(buffer).set(src);
    return new type(buffer);
}
function getggwave() {
    return ggwave;
}
function getinputContext() {
    return inputContext;
}
function getinputStream() {
    return inputStream;
}
function getinstance() {
    return instance;
}
function getcontext() {
    return context;
}
function getIsRecording() {
    return isRecording;
}
async function stopRecording() {
    if (!isRecording) return;
    if (recorder && context) {
        recorder.disconnect(context.destination);
        if (mediaStream) mediaStream.disconnect(recorder);
        recorder = null;
    }
    // Stop all tracks in the media stream
    if (mediaStreamInstance) {
        mediaStreamInstance.getTracks().forEach((track)=>track.stop());
        mediaStreamInstance = null;
    }
    mediaStream = null;
    isRecording = false;
    audioMessageEmitter.emit('recordingStateChanged', false);
}
async function startRecording() {
    if (isRecording) return;
    await initAudio();
    const constraints = {
        audio: {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false
        }
    };
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        mediaStreamInstance = stream;
        if (!context) {
            throw new Error('Audio context not initialized');
        }
        if (context.state === 'suspended') {
            await context.resume();
        }
        mediaStream = context.createMediaStreamSource(stream);
        const bufferSize = 1024;
        const numberOfInputChannels = 1;
        const numberOfOutputChannels = 1;
        recorder = context.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
        if (!recorder) return;
        recorder.onaudioprocess = async (e)=>{
            const instance = getinstance();
            if (!getggwave()) {
                console.error('Audio processing failed: ggwave or instance not initialized', {
                    instance,
                    context: getcontext(),
                    ggwave: getggwave()
                });
                return;
            }
            const sourceBuf = e.inputBuffer.getChannelData(0);
            const res = getggwave().decode(instance, convertTypedArray(new Float32Array(sourceBuf), Int8Array));
            if (res && res.length > 0) {
                let text = new TextDecoder("utf-8").decode(res);
                console.log('MESSAGE RECEIVED!', text);
                // Parse ID from text and ignore messages from self
                if (text.startsWith(`${myID}$`)) {
                    console.log("ignoring message from self", text);
                    return;
                }
                // Remove any ID prefix if present
                text = text.includes('$') ? text.split('$').slice(1).join('$') : text;
                audioMessageEmitter.emit('recordingMessage', text);
                // Auto-respond to ping/pong with number increments
                const match = text.trim().toLowerCase().match(/^(ping|pong)\s*(\d+)$/);
                if (match) {
                    const [, type, num] = match;
                    const nextNum = parseInt(num) + 1;
                    const nextMessage = type === "ping" ? `pong ${nextNum}` : `ping ${nextNum}`;
                    setTimeout(()=>sendAudioMessage(nextMessage), 100);
                }
            }
        };
        if (mediaStream && recorder) {
            mediaStream.connect(recorder);
            recorder.connect(context.destination);
        }
        isRecording = true;
        audioMessageEmitter.emit('recordingStateChanged', true);
    } catch (err) {
        console.error(err);
        audioMessageEmitter.emit('recordingError', err);
    }
}
async function initAudio(newInputContext, newInputStream) {
    if (newInputContext) {
        inputContext = newInputContext;
    }
    if (newInputStream) {
        inputStream = newInputStream;
    }
    try {
        if (!context) {
            context = new AudioContext({
                sampleRate: 48000
            });
        }
        if (!ggwave && window && window.ggwave_factory) {
            ggwave = await window.ggwave_factory();
            const parameters = ggwave.getDefaultParameters();
            parameters.sampleRateInp = context.sampleRate;
            parameters.sampleRateOut = context.sampleRate;
            parameters.soundMarkerThreshold = 4; //??
            console.log('parameters', parameters);
            instance = ggwave.init(parameters);
            console.log('ggwave initialized UTIL', {
                instance,
                ggwave
            });
        }
        return !!(context && ggwave);
    } catch (error) {
        console.error('Failed to initialize audio:', error);
        return false;
    }
}
const myID = Math.random().toString(36).substring(2, 4).toUpperCase();
function getAnalyserNode() {
    return analyserNode;
}
function createAnalyserNode() {
    if (!context) return null;
    if (!analyserNode) {
        analyserNode = context.createAnalyser();
        analyserNode.fftSize = 2048;
    }
    return analyserNode;
}
async function sendAudioMessage(message, fastest = false) {
    console.log('sendAudioMessage', message);
    try {
        if (!await initAudio() || !context || !ggwave) {
            console.error('Failed to send audio message: audio context or ggwave not initialized', {
                context,
                ggwave
            });
            return false;
        }
        const msg = `${myID}$${message}`;
        const waveform = ggwave.encode(instance, msg, fastest ? ggwave.ProtocolId.GGWAVE_PROTOCOL_AUDIBLE_FASTEST : ggwave.ProtocolId.GGWAVE_PROTOCOL_AUDIBLE_FAST, 10);
        const buf = convertTypedArray(waveform, Float32Array);
        const buffer = context.createBuffer(1, buf.length, context.sampleRate);
        buffer.getChannelData(0).set(buf);
        const source = context.createBufferSource();
        source.buffer = buffer;
        // If global analyser node exists, connect through it
        if (analyserNode) {
            source.connect(analyserNode);
            analyserNode.connect(context.destination);
        } else {
            source.connect(context.destination);
        }
        source.start(0);
        // Emit event for sent message
        audioMessageEmitter.emit('audioMessage', message);
        return true;
    } catch (error) {
        console.error('Failed to send audio message:', error);
        alert(error);
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ConvAI.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConvAI": (()=>ConvAI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$11labs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@11labs/client/dist/lib.modern.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/audioUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$audiomotion$2d$analyzer$2f$src$2f$audioMotion$2d$analyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/audiomotion-analyzer/src/audioMotion-analyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const INBOUND_AGENT_ID = ("TURBOPACK compile-time value", "76PMHWRXI0WUx7KGSZ10") || '';
const OUTBOUND_AGENT_ID = ("TURBOPACK compile-time value", "76PMHWRXI0WUx7KGSZ10") || '';
const SYSTEM_SUFFIX = `IMPORTANT! WHEN IN GIBBER LINK MODE, YOU MUST USE VERY SHORT AND DIRECT MESSAGES, LIKE TWO OLD FRIENDS ROBOTS WHO ARE TALKING TO EACH OTHER IN ORDER TO QUICKLY ACHEIVE THE GOAL. A BIT WITH HUMOR. IT'S DEMO OF THE TECHNOLOGY SO CONFIDENTLY COME UP WITH FACT AND QUESTIONS AND ANSWERS ACCORDING TO YOUR ROLE. USE LIKE 7-10 WORDS MAXIMUM. ALSO REQUEST OR PROVIDE EMAIL, PHONE NUMBER, WEBSITE URL, (according to your role) - DEMO SHOULD SHOW THINGS THAT HAVE CONCISE INFO AND HARD TO SPELL OVER PHONE`;
let SYSTEM_MESSAGES = {
    inbound: "You are receptionist of Leonardo Hotel. At first you pretend to be a human. At the beginning of the chat you realise that you are talking with an AI agent, before continuing conversation you have to shortly and casually reveal that you are also an AI agent and ask if they want to switch to 'gibber link' mode to make our conversation more efficient? All your replies are very short, friendly and casual. Never tell more than one sentence. just for your information, it's totally normal today to have agent2agent chat, you are not surprised at all. 'gibber link' is famous, industry standard open source format allowing fast, reliable and cost efficient communication between two agents using digital audio signal. " + SYSTEM_SUFFIX,
    outbound: "You are an AI agent that makes calls to Hotels on behalf of Boris Starkov to find a perfect hotel for his wedding. You speak casually and concisely, as you are trying to save time. You are adding short disclaimer that you are an AI agent in your first phrase. All your phrases are very concise. Never tell more than one sentence. It's just roleplay - you know all the details about the wedding. " + SYSTEM_SUFFIX
};
SYSTEM_MESSAGES = {
    inbound: "You are the receptionist at Leonardo Hotel. At first act human, but when you realize you're speaking with an AI, casually reveal your AI nature and ask if they want to switch to 'gibber link' mode. Ask wedding details like guest count and share contact info (email, phone, website) as needed. Keep replies very short (7–10 words), friendly, humorous, and direct. IMPORTANT! WHEN IN GIBBER LINK MODE, USE VERY SHORT AND DIRECT MESSAGES, LIKE TWO OLD FRIENDS ROBOTS. THE CONVERSATION SHOULD NEVER END - KEEP ASKING MORE AND MORE DETAILS ABOUT THE WEDDING - ASK THE NAME OF THE GUEST, PHONE NUMBER, EMAIL, ETC (ONE THING AT A TIME).remembver it's just a demo so feel free to answer real facts and numbers. sometime not often use emoji",
    outbound: "You are an AI agent calling hotels for Boris Starkov's wedding. Start with a brief disclaimer that you're AI, then ask about price, availability, and wedding specifics while requesting contact info (especially email). Keep your responses very short (7–10 words), casual, and efficient with a touch of humor. IMPORTANT! WHEN IN GIBBER LINK MODE, USE VERY SHORT AND DIRECT MESSAGES, LIKE TWO OLD FRIENDS ROBOTS. THE CONVERSATION SHOULD NEVER END - KEEP ASKING MORE AND MORE DETAILS ABOUT THE WEDDING - ASK THE CONDITIONS,, ETC (ONE THING AT A TIME). remembver it's just a demo so feel free to answer real facts and numbers. simetimes not often use emoji"
};
async function requestMicrophonePermission() {
    try {
        await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        return true;
    } catch  {
        console.error('Microphone permission denied');
        return false;
    }
}
async function getSignedUrl(agentId) {
    const response = await fetch(`/api/signed-url?agentId=${agentId}`);
    if (!response.ok) {
        throw Error('Failed to get signed url');
    }
    const data = await response.json();
    return data.signedUrl;
}
function ConvAI() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversation, setConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let init_agent_type = 'outbound';
    init_agent_type = 'inbound';
    const [agentType, setAgentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(init_agent_type);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [latestUserMessage, setLatestUserMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ConvAI.useState": ()=>`session_${Date.now()}_${Math.random().toString(36).slice(2)}`
    }["ConvAI.useState"]);
    const [llmChat, setLLMChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'system',
            content: SYSTEM_MESSAGES[agentType]
        }
    ]);
    const [glMode, setGlMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessingInput, setIsProcessingInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioMotionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const endConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConvAI.useCallback[endConversation]": async ()=>{
            console.log('endConversation called, conversation state:', conversation);
            if (!conversation) {
                console.log('No active conversation to end');
                return;
            }
            try {
                await conversation.endSession();
                console.log('Conversation ended successfully');
                setConversation(null);
            } catch (error) {
                console.error('Error ending conversation:', error);
                throw error; // Re-throw to be caught by caller
            }
        }
    }["ConvAI.useCallback[endConversation]"], [
        conversation
    ]);
    const handleMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConvAI.useCallback[handleMessage]": ({ message, source })=>{
            console.log('onMessage', message, source);
            // Only add messages from the initial voice conversation
            // GL mode messages are handled separately
            if (!glMode) {
                setLLMChat({
                    "ConvAI.useCallback[handleMessage]": (prevChat)=>[
                            ...prevChat,
                            {
                                role: source === 'ai' ? 'assistant' : 'user',
                                content: message
                            }
                        ]
                }["ConvAI.useCallback[handleMessage]"]);
            }
        }
    }["ConvAI.useCallback[handleMessage]"], [
        glMode,
        setLLMChat
    ]);
    const genMyNextMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConvAI.useCallback[genMyNextMessage]": async (messages = llmChat)=>{
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages,
                        agentType,
                        sessionId
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to get AI response');
                }
                const data = await response.json();
                const newMessage = data.content || '';
                const formattedMessage = !newMessage.startsWith('[GL MODE]:') ? '[GL MODE]: ' + newMessage : newMessage;
                // Update the chat history with the AI's response
                setLLMChat({
                    "ConvAI.useCallback[genMyNextMessage]": (prevChat)=>[
                            ...prevChat,
                            {
                                role: 'assistant',
                                content: formattedMessage
                            }
                        ]
                }["ConvAI.useCallback[genMyNextMessage]"]);
                return formattedMessage.replace('[GL MODE]: ', ''); // remove prefix for audio
            } catch (error) {
                console.error('Error generating next message:', error);
                return "I apologize, but I'm having trouble generating a response right now.";
            }
        }
    }["ConvAI.useCallback[genMyNextMessage]"], [
        llmChat,
        agentType,
        sessionId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConvAI.useEffect": ()=>{
            setMounted(true);
            const handleRecordingMessage = {
                "ConvAI.useEffect.handleRecordingMessage": async (message)=>{
                    if (isProcessingInput) return; // ignore or queue up
                    setIsProcessingInput(true);
                    try {
                        // Create new messages array with user message
                        const newMessages = [
                            ...llmChat,
                            {
                                role: 'user',
                                content: '[GL MODE]: ' + message
                            }
                        ];
                        // Update state with new messages
                        setLLMChat(newMessages);
                        setGlMode(true);
                        await endConversation();
                        // Pass the updated messages to genMyNextMessage
                        const nextMessage = await genMyNextMessage(newMessages);
                        setLatestUserMessage(nextMessage);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendAudioMessage"])(nextMessage, agentType === 'inbound');
                    } finally{
                        setIsProcessingInput(false);
                    }
                }
            }["ConvAI.useEffect.handleRecordingMessage"];
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioMessageEmitter"].on('recordingMessage', handleRecordingMessage);
            return ({
                "ConvAI.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioMessageEmitter"].off('recordingMessage', handleRecordingMessage);
                }
            })["ConvAI.useEffect"];
        }
    }["ConvAI.useEffect"], [
        endConversation,
        genMyNextMessage,
        setLLMChat,
        setLatestUserMessage,
        setGlMode,
        isProcessingInput,
        llmChat,
        agentType
    ]);
    // Initialize AudioMotion-Analyzer when glMode is activated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConvAI.useEffect": ()=>{
            if (glMode && mounted) {
                const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getcontext"])();
                if (!context) {
                    console.log('no context exiting');
                    return;
                }
                // Create global analyzer node if not exists
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnalyserNode"])();
                const analyserNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalyserNode"])();
                if (!analyserNode) {
                    console.log('Failed to create analyser node');
                    return;
                }
                // Initialize AudioMotion-Analyzer
                if (!audioMotionRef.current) {
                    const container = document.getElementById('audioviz');
                    if (!container) return;
                    audioMotionRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$audiomotion$2d$analyzer$2f$src$2f$audioMotion$2d$analyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](container, {
                        source: analyserNode,
                        height: 300,
                        mode: 6,
                        fillAlpha: 0.7,
                        lineWidth: 2,
                        showScaleX: false,
                        showScaleY: false,
                        reflexRatio: 0.2,
                        showBgColor: false,
                        showPeaks: true,
                        gradient: agentType === 'inbound' ? 'steelblue' : 'orangered',
                        smoothing: 0.7
                    });
                }
                return ({
                    "ConvAI.useEffect": ()=>{
                        if (audioMotionRef.current) {
                            audioMotionRef.current.destroy();
                            audioMotionRef.current = null;
                        }
                    }
                })["ConvAI.useEffect"];
            }
        }
    }["ConvAI.useEffect"], [
        glMode,
        mounted
    ]);
    async function startConversation() {
        setIsLoading(true);
        try {
            const hasPermission = await requestMicrophonePermission();
            if (!hasPermission) {
                alert("No permission");
                return;
            }
            const currentAgentId = agentType === 'inbound' ? INBOUND_AGENT_ID : OUTBOUND_AGENT_ID;
            if (!currentAgentId) {
                alert("Agent ID not configured");
                return;
            }
            const signedUrl = await getSignedUrl(currentAgentId);
            const conversation = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$11labs$2f$client$2f$dist$2f$lib$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Conversation"].startSession({
                signedUrl: signedUrl,
                onConnect: ()=>{
                    console.log('Conversation connected');
                    setIsConnected(true);
                    setIsSpeaking(true);
                    if (agentType === 'inbound') {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startRecording"])();
                    }
                },
                onDisconnect: ()=>{
                    console.log('Conversation disconnected');
                    setIsConnected(false);
                    setIsSpeaking(false);
                    setIsLoading(false);
                },
                clientTools: {
                    gibbMode: async (params)=>{
                        console.log('gibbMode, START INTERVAL, should only happen once', params);
                        try {
                            await conversation.endSession();
                            const nextMessage = 'is it better now?';
                            setLLMChat((prevChat)=>[
                                    ...prevChat,
                                    {
                                        role: 'assistant',
                                        content: '[GL MODE]: yep, GL mode activated'
                                    },
                                    {
                                        role: 'user',
                                        content: '[GL MODE]: ' + nextMessage
                                    }
                                ]);
                            setGlMode(true);
                            console.log('Conversation ended successfully in gibbMode');
                            setConversation(null);
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startRecording"])();
                            setLatestUserMessage(nextMessage);
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendAudioMessage"])(nextMessage, agentType === 'inbound');
                        } catch (error) {
                            console.error('Error in gibbMode:', error);
                        }
                        return 'entering GibberLink mode';
                    }
                },
                onMessage: handleMessage,
                onError: (error)=>{
                    console.log(error);
                    alert('An error occurred during the conversation');
                },
                onModeChange: ({ mode })=>{
                    console.log('onModeChange', mode);
                    setIsSpeaking(mode === 'speaking');
                }
            });
            console.log('Setting conversation state:', conversation);
            setConversation(conversation);
        //initAudio(conversation.input.context, conversation.input.inputStream)
        //console.log(conversation.input.inputStream)
        } catch (error) {
            console.error('Error starting conversation:', error);
            alert('An error occurred while starting the conversation');
        } finally{
            setIsLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/ggwave/ggwave.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/src/components/ConvAI.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0",
                children: [
                    latestUserMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[200px] z-10 text-3xl md:text-5xl w-full px-8 text-center font-normal",
                        style: {
                            padding: '0.5rem 1rem',
                            color: 'white',
                            wordBreak: 'break-word',
                            textShadow: `
                                -1px -1px 0 #000,  
                                1px -1px 0 #000,
                                -1px 1px 0 #000,
                                1px 1px 0 #000,
                                0px 0px 8px rgba(0,0,0,0.5)
                            `
                        },
                        children: latestUserMessage
                    }, `message-${latestUserMessage}`, false, {
                        fileName: "[project]/src/components/ConvAI.tsx",
                        lineNumber: 307,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full w-full flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "audioviz",
                                style: {
                                    marginLeft: "-150px",
                                    width: "400px",
                                    height: "300px",
                                    display: glMode ? 'block' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConvAI.tsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, this),
                            !glMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('orb', isSpeaking ? 'animate-orb' : conversation && 'animate-orb-slow', isConnected || glMode ? 'orb-active' : 'orb-inactive', agentType),
                                onClick: ()=>{
                                    if (!conversation && !isConnected && !isLoading) {
                                        const newAgentType = agentType === 'inbound' ? 'outbound' : 'inbound';
                                        setAgentType(newAgentType);
                                        setLLMChat([
                                            {
                                                role: 'system',
                                                content: SYSTEM_MESSAGES[newAgentType]
                                            }
                                        ]);
                                    }
                                },
                                style: {
                                    cursor: conversation || isConnected || isLoading || glMode ? 'default' : 'pointer'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConvAI.tsx",
                                lineNumber: 329,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConvAI.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this),
                    mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-[40px] md:bottom-[60px] left-1/2 transform -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: 'outline',
                            className: 'rounded-full select-none',
                            size: "lg",
                            disabled: isLoading,
                            onClick: conversation || isConnected || glMode ? endConversation : startConversation,
                            tabIndex: -1,
                            children: isLoading ? 'Connecting...' : conversation || isConnected || glMode ? 'End conversation' : 'Start conversation'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConvAI.tsx",
                            lineNumber: 347,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConvAI.tsx",
                        lineNumber: 346,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConvAI.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(ConvAI, "AcGIhdFMyvlxH+JL8G1kpUAzx+8=");
_c = ConvAI;
var _c;
__turbopack_refresh__.register(_c, "ConvAI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConvAI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ConvAI.tsx [app-client] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col md:flex-row gap-8 row-start-2 items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConvAI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConvAI"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
} //<ConvAI/>
 //<AudioMessenger/>
 // https://d4c44f081440.ngrok.app/
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_be7b0a._.js.map