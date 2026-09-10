// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.dianebiglertraining.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.dianebiglertraining.com/","title_tag":"Mental Health Training & CEUs | Diane Bigler Training","meta_description":"Engaging mental health continuing education, employee wellness and ethics training for clinicians and companies. Virtual and in‑person workshops nationwide."},{"page_url":"https://www.dianebiglertraining.com/meet-diane","title_tag":"Clinical Social Worker & Trainer | Diane Bigler Training","meta_description":"Licensed clinical social worker with 20+ years’ experience providing mental health training, continuing education and leadership coaching from Kansas City."},{"page_url":"https://www.dianebiglertraining.com/contact-8","title_tag":"Schedule Mental Health Training | Diane Bigler Training","meta_description":"Contact Diane Bigler to book engaging workshops, ethics training, corporate education, or employee wellness presentations for your team or organization."},{"page_url":"https://www.dianebiglertraining.com/services-5","title_tag":"Mental Health & Corporate Education | Diane Bigler","meta_description":"Services include mental health continuing education, corporate education, employee wellness training and consultation for clinicians, leaders and companies."},{"page_url":"https://www.dianebiglertraining.com/mental-health-continuing-education","title_tag":"Mental Health Continuing Education | Diane Bigler","meta_description":"Continuing education for social workers and clinicians: ethics training, CBT, DBT, trauma, grief, assessment and treatment. Engaging workshops and CEUs."},{"page_url":"https://www.dianebiglertraining.com/corporate-education","title_tag":"Corporate Education & Employee Wellness | Diane Bigler","meta_description":"Corporate education in Kansas City and beyond: employee wellness, leadership coaching, engaging workshops on civility, change, inclusion and team building."},{"page_url":"https://www.dianebiglertraining.com/consultation","title_tag":"Employee Wellness & Mental Health Consultation | Diane","meta_description":"Consultation on employee wellness, trauma‑informed care, supervision support and mental health strategy for organizations, leaders and clinical teams."},{"page_url":"https://www.dianebiglertraining.com/resources","title_tag":"Mental Health Training Resources | Diane Bigler","meta_description":"Curated tools and links for mental health professionals, including CBT, DBT, mindfulness, safety, self‑care and clinical practice resources."},{"page_url":"https://www.dianebiglertraining.com/for-clinicians","title_tag":"Resources for Clinicians & CE | Diane Bigler Training","meta_description":"Clinical resources for social workers and therapists: CBT, DBT, mindfulness, trauma and self‑care tools to support mental health training and practice."}],"keywords":["mental health training","continuing education","corporate education","kansas city training","employee wellness","clinical social worker","professional development","leadership coaching","engaging workshops","ethics training"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.dianebiglertraining.com/#organization",
  "name": "Diane Bigler Training",
  "url": "https://www.dianebiglertraining.com/",
  "description": "Diane Bigler Training provides empowering continuing education and wellness training for mental health professionals and corporate employees, including CEU workshops, corporate wellness presentations, leadership training, and mental health consultation.",
  "image": [
    "https://static.wixstatic.com/media/56a0809e4c97404291a848762fdd6e58.jpg/v1/fill/w_288,h_288,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/56a0809e4c97404291a848762fdd6e58.jpg",
    "https://static.wixstatic.com/media/11062b_1f513e35c5214d46ae9e7d64d981795f~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_123,h_82,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_1f513e35c5214d46ae9e7d64d981795f~mv2_d_6000_4000_s_4_2.jpg",
    "https://static.wixstatic.com/media/4f0a67_94e5d2de46b04dca88f8e6362c7c32f1~mv2.png/v1/fill/w_374,h_600,al_c,q_85,enc_avif,quality_auto/image001%20(2).png",
    "https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg/v1/fill/w_122,h_69,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/bc3ec7bc825c4e6ca746c659189cea83.jpg"
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://www.linkedin.com"
  ],
  "founder": {
    "@type": "Person",
    "name": "Diane Bigler",
    "jobTitle": "National Mental Health and Corporate Trainer",
    "description": "Diane Bigler, MSW, LCSW, LSCSW, is a Licensed Clinical Social Worker in Missouri and Kansas with over 20 years of experience in psychology, social work, and mental health, providing clinical services, supervision, and professional education.",
    "email": "mailto:diane@dianebiglertraining.com",
    "telephone": "+1-816-550-3069",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kansas City",
      "addressRegion": "Missouri",
      "addressCountry": "US"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "mailto:diane@dianebiglertraining.com",
      "telephone": "+1-816-550-3069",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "contactType": "inquiries",
      "email": "mailto:diane4ku@yahoo.com",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kansas City",
    "addressRegion": "Missouri",
    "addressCountry": "US"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mental Health Continuing Education",
        "description": "Continuing education workshops and trainings for social workers, counselors, therapists, case managers, and other mental health professionals. Sample topics include professional ethics, CBT, DBT, ACT, grief and loss, suicide, trauma-informed care, solution-focused and narrative therapies, motivational interviewing, anxiety and depressive disorders, and diagnosis, assessment, and treatment.",
        "provider": {
          "@id": "https://www.dianebiglertraining.com/#organization"
        },
        "areaServed": "US",
        "audience": {
          "@type": "Audience",
          "audienceType": [
            "Social workers",
            "Counselors",
            "Marriage and family therapists",
            "Case managers",
            "Mental health professionals",
            "Students"
          ]
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Corporate Wellness and Leadership Training",
        "description": "Corporate education presentations and workshops for employees, managers, and leaders to enhance soft skills, leadership skills, and personal wellness. Sample topics include pandemic fatigue, dealing with difficult colleagues, navigating change, promoting civility, harassment and bullying, emotional intelligence, LGBTQ+ inclusion, mindful eating, perfectionism, procrastination, manager well-being, strengths-based leadership, mindfulness for managers, managing remote workers, and building strong teams.",
        "provider": {
          "@id": "https://www.dianebiglertraining.com/#organization"
        },
        "areaServed": "US",
        "audience": {
          "@type": "Audience",
          "audienceType": [
            "Employees",
            "Managers",
            "Corporate leaders",
            "Human resources professionals"
          ]
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mental Health and Corporate Consultation",
        "description": "Phone, virtual, and in-person consultation for organizations on employee wellness, soft skills, trauma-informed practices, supervision support for therapists, and mental wellness initiatives for businesses.",
        "provider": {
          "@id": "https://www.dianebiglertraining.com/#organization"
        },
        "areaServed": "US",
        "audience": {
          "@type": "Audience",
          "audienceType": [
            "Organizations",
            "Supervisors",
            "Small businesses",
            "Mental health agencies"
          ]
        }
      }
    }
  ],
  "knowsAbout": [
    "Professional ethics for social workers and mental health professionals",
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavior Therapy (DBT)",
    "Acceptance and Commitment Therapy (ACT)",
    "Grief and loss",
    "Suicide prevention and intervention",
    "Trauma and trauma-informed care",
    "Solution-focused therapies",
    "Narrative therapies",
    "Motivational interviewing",
    "Anxiety and depressive disorders",
    "Diagnosis, assessment, and treatment in mental health",
    "Corporate wellness",
    "Employee assistance and support",
    "Leadership development",
    "Emotional intelligence",
    "Workplace civility and harassment prevention",
    "Manager well-being",
    "Supervision and support for therapists"
  ],
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Diane is an energizing speaker. She kept my attention the entire time. This was one of the best workshops - I enjoyed it.",
      "author": {
        "@type": "Person",
        "name": "Tamara Woods, LMSW"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "I loved this workshop. If every workshop could be like this, it would be perfect.",
      "author": {
        "@type": "Person",
        "name": "Alexis Andrews, LMSW"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Diane excels at motivating employees and managers. Her presentation style and content is superior.",
      "author": {
        "@type": "Person",
        "name": "HR Manager"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "One of the very best ethics trainings I've taken over my 27 years of being a licensed clinician.",
      "author": {
        "@type": "Person",
        "name": "Stacey Winter, CEO, Empac"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Diane is a gifted presenter with real life information that is so beneficial. Her presentation was PHENOMENAL!",
      "author": {
        "@type": "Person",
        "name": "Lee Barnes, Human Resources Professional"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "I always love trainings with Diane. She is knowledgeable, has high energy, and provides us with valuable tools for practice.",
      "author": {
        "@type": "Person",
        "name": "2022 Training Attendee"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "This training was powerful. Diane is so knowledgeable and provides outstanding resources. We look forward to having her back!",
      "author": {
        "@type": "Person",
        "name": "Monica Tyrell, HR Training Coordinator, United Government of Wyandot County, KS"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "I have partnered with Diane for several years offering CEU trainings to our social work community. She delivers a very thorough, research based presentation and yet creates a fun learning environment! She always receives high marks from the attendees on her presentation with requests to have her present again and again. Diane is a powerful speaker and is very interactive and engaging. I highly recommend her for any speaking engagement!",
      "author": {
        "@type": "Person",
        "name": "Tracey Dickey, LMSW, LCSW, ACSW, Family Care Consultant"
      }
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "University of Kansas - School of Social Welfare"
    },
    {
      "@type": "Organization",
      "name": "NASW - Kansas Chapter"
    },
    {
      "@type": "Organization",
      "name": "NASW - New York Chapter"
    }
  ],
  "worksFor": {
    "@id": "https://www.dianebiglertraining.com/#organization"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
