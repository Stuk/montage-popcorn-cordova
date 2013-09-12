montageDefine("6828b8e","spec/map",{dependencies:["./listen/map-changes"],factory:function(e,t,n){function i(e,t){function o(e){expect(e.has(n)).toBe(!0),expect(e.has(i)).toBe(!0),expect(e.has(s)).toBe(!1),expect(e.get(n)).toBe(10),expect(e.get(i)).toBe(20),expect(e.get(s)).toBe(undefined),expect(e.get(s,30)).toBe(30),expect(e.length).toBe(2),expect(e.keys()).toEqual([n,i]),expect(e.values()).toEqual([10,20]),expect(e.items()).toEqual([[n,10],[i,20]]),expect(e.reduce(function(e,t,n){return e.push([this,n,t]),e},[],e)).toEqual([[e,n,10],[e,i,20]])}r(e),t=t||[];var n=t[0]||{},i=t[1]||{},s=t[2]||{};it("should be constructable from item duples with object keys",function(){var t=e([[n,10],[i,20]]);o(t)}),it("should be constructable from an interable",function(){var t=e({forEach:function(e,t){e.call(t,[n,10]),e.call(t,[i,20])}});o(t)}),describe("delete",function(){it("should remove one item",function(){var t=e([[n,10],[i,20],[s,30]]);expect(t.delete(s)).toBe(!0),o(t)})}),describe("clear",function(){it("should be able to delete all content",function(){var t=e({a:10,b:20,c:30});t.clear(),expect(t.length).toBe(0),expect(t.keys()).toEqual([]),expect(t.values()).toEqual([]),expect(t.items()).toEqual([])})}),describe("equals",function(){var t=e({a:10,b:20});expect(Object.equals(t,t)).toBe(!0),expect(t.equals(t)).toBe(!0),expect(e({a:10,b:20}).equals({b:20,a:10})).toBe(!0),expect(Object.equals({a:10,b:20},e({b:20,a:10}))).toBe(!0),expect(Object.equals(e({b:20,a:10}),{a:10,b:20})).toBe(!0),expect(Object.equals(e({b:20,a:10}),e({a:10,b:20}))).toBe(!0)}),describe("clone",function(){var t=e({a:10,b:20}),n=Object.clone(t);expect(t).toNotBe(n),expect(t.equals(n)).toBe(!0)})}var r=e("./listen/map-changes");n.exports=i}})