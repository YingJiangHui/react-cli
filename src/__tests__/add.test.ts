import {add} from "@src/add";

describe('add',()=>{
  it('can add',()=>{
    expect(add(1,2)).toBe(3)
  })
})