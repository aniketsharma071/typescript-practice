
// 1. Basic example

type Circle = {
  kind: "circle"
  radius: number
}

type Square = {
  kind: "square"
  side: number
}

type Shape = Circle | Square

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius
  } else {
    return shape.side * shape.side
  }
}

console.log(getArea({ kind: "circle", radius: 5 }))
console.log(getArea({ kind: "square", side: 4 }))

// 2. Using switch (BEST PRACTICE)

function getAreaSwitch(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side ** 2

    default:
      return 0
  }
}
console.log(getAreaSwitch({ kind: "circle", radius: 5 }))
console.log(getAreaSwitch({ kind: "square", side: 4 }))

// 3. Adding more types

type Rectangle = {
  kind: "rectangle"
  width: number
  height: number
}

type Shape2 = Circle | Square | Rectangle

function getAreaExtended(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side ** 2

    case "rectangle":
      return shape.width * shape.height

    default:
      const _never: never = shape
      return _never
  }
}

// 4. Real-world example (API response)

type SuccessResponse = {
  status: "success"
  data: string
}

type ErrorResponse = {
  status: "error"
  message: string
}

type ApiResponse = SuccessResponse | ErrorResponse

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log("Data:", res.data)
  } else {
    console.log("Error:", res.message)
  }
}

console.log(handleResponse({ status: "success", data: "Here is your data" }))
console.log(handleResponse({ status: "error", message: "Something went wrong" }))