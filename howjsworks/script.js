/**
 * How JS Works?
 * =================
 * 
 * Javascript is 
 *  - High Level: developer does not have to worry managing resources
 *  - Prototype-Based Object Oriented
 *  - Multi-Paradigm
 *  - Interpreted or Just-In_Tıme Compiled
 *  - Dynamic: We don't assign data type
 *  - Single-Threaded
 *  - Garbage-Collected
 * Programming Language with
 *  - A Non-Blocking Event Loop Concurrency Model
 * 
 * 
 * Concurrency Model
 * ===================
 * How Javascript engine handles multiple tasks happening at the same time
 *                                =
 *                                =  Why do we need that?                                
 *                                =  
 * JS runs in one single thread, so it can only do one thing at a time.
 *                                =
 *                                =  So what about a long-running task?
 *                                =
 * Sounds like it would block the single thread. However, we want non-blocking behavior.
 *                                =
 *                                = How do we achieve that?
 *                                =
 * By using an event loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished  
 * 
 * 
 * JS Engine
 * ============
 * Program that executes JS Code. (V8 Engine Chrome)
 * 
 * Any JS Engine always contains Call Stack and Heap.
 *  - Call Stack is where our code is executed using execution context.
 *  - Heap is unstructured memory pool which stores all the objects that our application needs.
 * 
 * How the code is compiled to machine code?
 *  - 
 * 
 * 
 * Side Note: Compilation vs Interpretation
 * ===========================================
 * Computers processors only understands zeros and ones, and that's therefore every single computer program
 * ultimately needs to be converted into this machine code and this can happen using compilation or interpretation.
 * 
 * Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by any computer.+
 * 
 *  --------------------         STEP 1          ----------------       STEP 2
 *  -   Source Code    -   =================>    - Machine Code -   ==============>  Program Running
 *  --------------------      Compilation        ----------------    Execution 
 *                                                                   (can happen way after compilation)
 * 
 * Interpretation: Interpreter runs through the source code and executes it line by line
 * 
 * 
 *  --------------------         STEP 1          
 *  -   Source Code    -   =================>    Program Running
 *  --------------------      Execution Line By Line         
 *                            (Code still needs to be converted to machine code)
 * 
 * JS used to be an interpreted language, but problem with interpreted languages is they are much slower.
 * This used to be OK, but not for modern JS.                                     
 * 
 * Just-in-time compilation: Entire code is converted into machine code at once, then executed immediately. (no partable binary file)
 * 
 * 
 * A piece of JS code enters the engine
 *  - First Step: Parse code which essentially means to read the code. During the parsing, the code parsed into Data Structure called
 *                the Abstract Syntax Tree or AST. This works by first splitting up each line of code into pieces that are meaningful to the language
 *                like the const or function keywords and saving all these pieces into the tree in a structured way.This step also checks if there are any syntax
 *                errors, resulşting three later bu used to generate machine code.
 *  - Compilation: Takes generated AST and compiles it into machine code. 
 *  - Execution: This machine code executes right after Complition step. Happens in Call Stack
 * 
 * In the begining, unoptimized machine code used to execute, then in the background this code is optimized several times and recompiled during execution.
 * This process makes V8 so fast.
 * 
 * 
 * Runtime In the Browser
 * =================================
 * 
 * JS Engine + 
 * Web API (Functionalities provided to the engine, accessible on window object DOM + Timer + Fetch API) + 
 * Callback Queue
 * 
 * Runtime In Node JS
 * =======================
 * JS Engine +
 * C++ Bindings +
 * Callback Queue  
 * 
 * 
 * What is an execution context?
 * =================================
 * 
 * Compilation ==============> Execution
 * 
 *  - Creation of global execution context (for top-level code not inside a function)
 * 
 */                               