describe("홈페이지 검증", () => {
  it("루트 페이지 접속 시 get started 텍스트가 있어야 한다", () => {
    cy.visit("/");
    cy.get("li").contains("Get started").should("exist");
  });
  it("루트 페이지 접속 시 앵커 태그가 있고, learn 텍스트가 있어야 하고, href 속성이 https://nextjs.org/learn 를 포함해야 한다", () => {
    cy.visit("/");
    cy.get("a")
      .contains("Learn")
      .should("have.attr", "href")
      .and("include", "https://nextjs.org/learn");
  });
});
