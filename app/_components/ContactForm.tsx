// Partner contact form. GitHub Pages is static, so the form posts to
// FormSubmit.co, which emails the submission to the team. The _cc, _next,
// _subject and _honey fields are FormSubmit options.
export function ContactForm() {
  return (
    <form
      className="t2e-form"
      action="https://formsubmit.co/edison.figueroa@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_cc" value="jason.byers@target.com" />
      <input
        type="hidden"
        name="_subject"
        value="tech2elevate.com: partner inquiry"
      />
      <input
        type="hidden"
        name="_next"
        value="https://tech2elevate.com/thanks"
      />
      <input type="hidden" name="_template" value="table" />
      {/* FormSubmit's captcha page needs Google scripts that some networks
          block, leaving a blank page. The _honey field still filters bots. */}
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <label>
        Your name
        <input type="text" name="name" required autoComplete="name" />
      </label>

      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>

      <label>
        Company or school
        <input type="text" name="organization" autoComplete="organization" />
      </label>

      <label>
        I am a...
        <select name="role" required defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option>Tech leader or company representative</option>
          <option>Teacher or school administrator</option>
          <option>Volunteer interested in mentoring</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        How can we work together?
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit">Send message</button>
      <p className="t2e-form-note">
        Your message goes to Edison Figueroa and Jason Byers at Target. We use
        it only to reply to you.
      </p>
    </form>
  );
}
