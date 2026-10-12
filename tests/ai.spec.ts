import { describe, expect, it } from "vitest";
import { buildTutorReply } from "@/lib/ai";

describe("AI tutoring helpers", () => {
  it("answers quiz prompts with practice guidance", () => {
    const reply = buildTutorReply({
      prompt: "Generate a quiz for algebra",
      mode: "Practice",
    });
    expect(reply).toContain("practice");
  });

  it("handles image-related prompts", () => {
    const reply = buildTutorReply({
      prompt: "Explain this image of a graph",
      mode: "Learn",
    });
    expect(reply).toContain("visual asset");
  });

  it("returns default explanation for generic prompts", () => {
    const reply = buildTutorReply({
      prompt: "What is a molecule?",
      mode: "Learn",
    });
    expect(reply).toContain("break");
  });
});
