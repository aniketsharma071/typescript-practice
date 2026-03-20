
// 1. Basic example

type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number }

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side ** 2

    default:
      // Exhaustiveness check
      const _exhaustive: never = shape
      return _exhaustive
  }
}

console.log(getArea({ kind: "circle", radius: 5 }))
console.log(getArea({ kind: "square", side: 4 }))

// 2. missing case example

type Shape2 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number }

function getAreaIncomplete(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side ** 2

    //  Missing "rectangle"

    default:
      // TypeScript will ERROR here
    //   const _never: never = shape
    //   return _never
  }
}

console.log(getAreaIncomplete({ kind: "circle", radius: 5 }))
console.log(getAreaIncomplete({ kind: "square", side: 4 }))
// console.log(getAreaIncomplete({ kind: "rectangle", width: 3, height: 4 })) // ERROR  

// 3. Real-world example (API handling)

type ApiResponse =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string }

function handleResponse(res: ApiResponse) {
  switch (res.status) {
    case "loading":
      console.log("Loading...") // will also return undefined, because we didn't add a return statement here
      break

    case "success":
      console.log("Data:", res.data)
      break

    case "error":
      console.log("Error:", res.message)
      break

    default:
      const _exhaustiveCheck: never = res
      return _exhaustiveCheck
  }
}

console.log(handleResponse({ status: "loading" }))
console.log(handleResponse({ status: "success", data: "Here is your data" }))
console.log(handleResponse({ status: "error", message: "Something went wrong" }))

// 5. Helper function (cleaner pattern)

function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x)
}

function handleResponseSafe(res: ApiResponse) {
  switch (res.status) {
    case "loading":
      return "Loading..."

    case "success":
      return res.data

    case "error":
      return res.message

    default:
      return assertNever(res)
  }
}

console.log(handleResponseSafe({ status: "loading" }))
console.log(handleResponseSafe({ status: "success", data: "Here is your data" }))
console.log(handleResponseSafe({ status: "error", message: "Something went wrong" }))