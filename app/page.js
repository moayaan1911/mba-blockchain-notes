"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Link as LinkIcon,
  Globe,
  Target,
  ShoppingBag,
  BrainCircuit,
  Briefcase,
  CheckSquare,
  Truck,
  Cpu,
  Lock,
  Users,
  Boxes,
  Megaphone,
  Sparkles,
  LoaderCircle,
  Bot,
  FileText,
  HelpCircle,
  Leaf,
  Recycle,
  FileJson,
  ClipboardList,
  AppWindow,
  DollarSign,
  Building2,
  HeartPulse,
  Scale,
} from "lucide-react";

const allModulesData = {
  sustainability: {
    id: "sustainability",
    title: "Module 1: Sustainability & Business",
    description: "Integrating environmental, social, and economic dimensions.",
    icon: (
      <Leaf
        size={40}
        className="text-green-500"
      />
    ),
    sections: [
      {
        title: "Core Concepts & Challenges",
        icon: (
          <Globe
            size={32}
            className="text-green-600"
          />
        ),
        topics: [
          {
            title: "Introduction to Sustainability",
            content:
              "The concept of maintaining ecological balance and resource availability for future generations, encompassing environmental, social, and economic dimensions in long-term planning.",
            example: {
              title: "Real-World Example",
              text: "A clothing company using organic cotton (environmental), ensuring fair wages for workers (social), and still making a profit (economic) is practicing sustainability.",
            },
            externalLink:
              "https://www.mcgill.ca/sustainability/files/sustainability/what-is-sustainability.pdf",
          },
          {
            title: "Environmental Challenges of International Management",
            content:
              "Global issues like pollution, deforestation, and resource depletion affecting cross-border operations, requiring coordinated data collection and analysis for effective management strategies.",
            example: {
              title: "Real-World Example",
              text: "A global tech company must manage e-waste in Europe, water usage at data centers in the US, and carbon emissions from its shipping routes in Asia, requiring a coordinated international strategy.",
            },
            externalLink: "https://www.oecd.org/corporate/mne/1922428.pdf",
          },
          {
            title: "Sustainability and Leadership",
            content:
              "The practice of guiding organizations toward sustainable practices, involving strategic decision-making based on environmental impact assessments and stakeholder engagement metrics.",
            example: {
              title: "Real-World Example",
              text: "Patagonia's founder, Yvon Chouinard, demonstrated sustainability leadership by transferring ownership of the company to a trust dedicated to fighting climate change, ensuring its profits are used for environmental protection.",
            },
            externalLink:
              "https://www.imd.org/scc/research-knowledge/articles/sustainability-leadership/",
          },
          {
            title: "Sustainability and Innovation",
            content:
              "The development of new technologies or processes to reduce ecological footprints, leveraging data-driven models to optimize resource use and enhance product lifecycle efficiency.",
            example: {
              title: "Real-World Example",
              text: "Tesla's development of electric vehicles and battery storage solutions is a key sustainability innovation aimed at reducing reliance on fossil fuels in transportation and energy.",
            },
            externalLink: "https://www.imd.org/sustainability-innovation/",
          },
          {
            title: "Sustainability and HR Practices",
            content:
              "The integration of eco-friendly policies into human resource management, utilizing workforce training data and performance metrics to promote green workplace cultures.",
            example: {
              title: "Real-World Example",
              text: "An HR department can promote sustainability by offering incentives for employees who commute via public transport, implementing a paperless office policy, and including sustainability goals in performance reviews.",
            },
            externalLink: "https://www.aihr.com/blog/sustainable-hrm/",
          },
          {
            title: "Introduction to Learning Outcomes of the Module",
            content:
              "A structured outline of educational goals, defining measurable skills and knowledge areas like sustainability principles and their practical applications in global contexts.",
            example: {
              title: "Analogy",
              text: "This is like the syllabus for a course. It tells you exactly what you should be able to know and do by the time you finish the module.",
            },
            externalLink:
              "https://www.cmu.edu/teaching/designteach/design/learningobjectives.html",
          },
          {
            title: "Sustainability Development Goals",
            content:
              "A set of 17 global targets established by the United Nations, quantified through indicators like carbon emissions reduction and access to clean energy to guide sustainable development.",
            example: {
              title: "Analogy",
              text: 'The SDGs are like a global to-do list for humanity. Each goal is a major task, like "End Poverty" or "Clean Water," that all countries have agreed to work on together.',
            },
            externalLink: "https://sdgs.un.org/goals",
          },
          {
            title: "The Pillars of Sustainability",
            content:
              "The foundational elements—environmental protection, social equity, and economic viability—interlinked through metrics to balance ecological health with human and financial needs.",
            example: {
              title: "Analogy",
              text: "Think of it as a three-legged stool. If one leg (environment, social, or economic) is shorter or weaker than the others, the stool becomes unstable and collapses. All three must be in balance.",
            },
            externalLink:
              "https://www.slideteam.net/blog/what-are-the-three-pillars-of-sustainability-and-why-are-they-important-for-your-business",
          },
          {
            title: "Circles of Sustainability",
            content:
              "A framework representing interconnected domains—ecology, economics, politics, and culture—analyzed through overlapping data sets to assess holistic sustainability impacts.",
            example: {
              title: "Analogy",
              text: "This is like a Venn diagram with four overlapping circles. A truly sustainable city project would need to be positive in all four areas: environmentally friendly (ecology), affordable (economics), supported by laws (politics), and respectful of local heritage (culture).",
            },
            externalLink:
              "https://www.circlesofsustainability.org/the-profile-method/",
          },
          {
            title: "Population Growth and Circular Economy",
            content:
              "The rise in global population driving demand for resource efficiency, supported by a circular economy model that reuses materials through closed-loop supply chain analytics.",
            example: {
              title: "Real-World Example",
              text: "Dell has a closed-loop recycling program where they recover plastics from old computers and use them to manufacture new parts, reducing waste and the need for new raw materials.",
            },
            externalLink:
              "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview",
          },
          {
            title: "Global Warming and Climate Change",
            content:
              "The increase in Earth’s average temperature due to greenhouse gas emissions, tracked through climate models and affecting weather patterns and ecological systems worldwide.",
            example: {
              title: "Analogy",
              text: "Think of the Earth as being wrapped in a blanket. Greenhouse gases make that blanket thicker, trapping more heat and causing the planet's temperature to rise, just like you would get warmer under a thicker blanket.",
            },
            externalLink:
              "https://www.un.org/en/climatechange/what-is-climate-change",
          },
          {
            title: "Global Warming; Effects on Business",
            content:
              "The impact of rising temperatures on corporate operations, measured through supply chain disruptions, energy cost increases, and regulatory compliance requirements.",
            example: {
              title: "Real-World Example",
              text: "A ski resort business faces direct threats from global warming due to less snowfall, shorter seasons, and increased costs for artificial snow-making, impacting its economic viability.",
            },
            externalLink:
              "https://www.hbs.edu/sustainability/Documents/climate-change-business.pdf",
          },
          {
            title: "Loss of Biodiversity",
            content:
              "The decline in species diversity due to habitat loss and pollution, quantified through ecological surveys and influencing ecosystem stability and resource availability.",
            example: {
              title: "Real-World Example",
              text: "The decline of bee populations (loss of biodiversity) directly threatens the agricultural industry, as many crops rely on bees for pollination. This impacts food supply and prices.",
            },
            externalLink:
              "https://www.nhm.ac.uk/discover/what-is-biodiversity.html",
          },
        ],
      },
      {
        title: "Corporate Strategy & Implementation",
        icon: (
          <Briefcase
            size={32}
            className="text-blue-600"
          />
        ),
        topics: [
          {
            title: "Organisational Identity and Corporate Image",
            content:
              "The unique characteristics and public perception of an organization, defined by its mission, values, and branding strategies, analyzed through stakeholder feedback and market data.",
            example: {
              title: "Analogy",
              text: "Organizational identity is who the company *truly is* on the inside (its personality). Corporate image is how the public *sees* the company (its reputation). The goal is to make the inside and outside match.",
            },
            externalLink:
              "https://hbr.org/2004/05/making-a-real-difference-with-corporate-branding",
          },
          {
            title: "Core Values and Sustainability",
            content:
              "Fundamental principles guiding an organization, integrated with sustainability goals, measured through environmental impact metrics and employee engagement surveys.",
            example: {
              title: "Real-World Example",
              text: 'The outdoor brand Patagonia embeds its core value of "build the best product, cause no unnecessary harm" into every decision, from material sourcing to political activism.',
            },
            externalLink:
              "https://sloanreview.mit.edu/article/how-to-build-sustainability-into-your-companys-dna/",
          },
          {
            title: "Corporate Sustainability and Creating Shared Value",
            content:
              "A business strategy that balances profit with social and environmental benefits, evaluated through shared value metrics like community impact and resource efficiency.",
            example: {
              title: "Real-World Example",
              text: "Nestlé’s work with smallholder coffee farmers to improve their crop yield and environmental practices creates shared value: farmers earn more, Nestlé gets a reliable supply of high-quality coffee, and the environment benefits.",
            },
            externalLink:
              "https://www.isc.hbs.edu/creating-shared-value/overview-of-creating-shared-value/",
          },
          {
            title: "Key Competencies of Sustainability Leadership",
            content:
              "Essential skills for leaders, including strategic planning, environmental analysis, and stakeholder collaboration, assessed through performance indicators and training outcomes.",
            example: {
              title: "Analogy",
              text: "A sustainability leader needs a toolbox of skills: a telescope for long-term vision, a microscope for detailed analysis, and a megaphone for communicating with all stakeholders.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbesbusinesscouncil/2021/08/12/15-key-competencies-of-a-sustainability-leader/",
          },
          {
            title: "Innovation Programs for Sustainability",
            content:
              "Structured initiatives to develop eco-friendly technologies or processes, tracked through R&D investment data and sustainability performance benchmarks.",
            example: {
              title: "Real-World Example",
              text: 'Google\'s "moonshot factory," X, works on sustainability innovations like Project Taara, which uses light beams to deliver high-speed internet, reducing the need for physical cables.',
            },
            externalLink:
              "https://www.un.org/en/academic-impact/innovation-and-sustainability",
          },
          {
            title: "Data Roadmaps for Sustainable Development",
            content:
              "Strategic plans outlining data collection and analysis for sustainability goals, utilizing metrics like carbon footprints and resource usage trends over time.",
            example: {
              title: "Analogy",
              text: "A data roadmap is like a GPS route for sustainability. It tells you where you are now (baseline data), where you want to go (sustainability goals), and the best path to get there (data collection and analysis plan).",
            },
            externalLink:
              "https://www.wbcsd.org/Programs/Redefining-Value/Measurement-and-Valuation/News/Data-driven-sustainability-A-roadmap-for-success",
          },
          {
            title: "Sustainability in Action",
            content:
              "Practical implementation of sustainability practices, monitored through real-time environmental data and operational efficiency reports across industries.",
            example: {
              title: "Real-World Example",
              text: 'Unilever\'s "Sustainable Living Plan" in action involves redesigning packaging to use less plastic, reformulating products to be biodegradable, and sourcing agricultural raw materials sustainably.',
            },
            externalLink: "https://www.unilever.com/planet-and-society/",
          },
          {
            title: "HR's Role in a Sustainable Strategy",
            content:
              "The human resources function’s contribution to sustainability, involving workforce training programs and diversity metrics to support eco-conscious policies.",
            example: {
              title: "Analogy",
              text: "If a company is a ship sailing towards sustainability, HR is in charge of training the crew, ensuring everyone knows their role, and keeping morale high for the long journey.",
            },
            externalLink:
              "https://www.shrm.org/hr-today/news/hr-magazine/winter2020/pages/hrs-role-in-sustainability.aspx",
          },
          {
            title: "Sustainability in Production and Design",
            content:
              "The incorporation of eco-friendly materials and processes in manufacturing, evaluated through lifecycle assessments and waste reduction statistics.",
            example: {
              title: "Real-World Example",
              text: "Interface, a carpet tile manufacturer, designs its products with recycled materials and a modular system, allowing customers to replace single worn-out tiles instead of the entire carpet, reducing waste.",
            },
            externalLink:
              "https://www.autodesk.com/sustainability/design-strategies",
          },
          {
            title: "Sustainability Reporting",
            content:
              "The systematic documentation of an organization’s environmental and social performance, standardized through frameworks like GRI and analyzed via key performance indicators.",
            example: {
              title: "Analogy",
              text: "A sustainability report is like a company's school report card, but instead of grades for math and science, it gets grades for how well it treats the environment and its community.",
            },
            externalLink: "https://globalreporting.org/about-gri/",
          },
        ],
      },
      {
        title: "Supply Chain & Ethical Practices",
        icon: (
          <Recycle
            size={32}
            className="text-orange-600"
          />
        ),
        topics: [
          {
            title: "The Importance of Supply Chain Management",
            content:
              "The critical role of coordinating supply chain activities to ensure efficiency, assessed through logistics data and delivery performance metrics.",
            example: {
              title: "Analogy",
              text: "A supply chain is like a relay race. Each runner (supplier, manufacturer, distributor) must pass the baton smoothly to the next. Supply chain management is the coach ensuring those handoffs are perfect.",
            },
            externalLink: "https://www.ibm.com/topics/supply-chain-management",
          },
          {
            title: "The 4 R's of Supply Chain Management",
            content:
              "Principles of Reduce, Reuse, Recycle, and Recover applied to supply chains, quantified through waste management and resource utilization rates.",
            example: {
              title: "Analogy",
              text: "The 4 R's are like a hierarchy of waste management. The best option is to Reduce your usage first. If you can't, then Reuse the item. If you can't reuse it, Recycle it. Finally, Recover energy from what's left.",
            },
            externalLink:
              "https://www.conserve-energy-future.com/4-rs-of-waste-management.php",
          },
          {
            title: "Supply Chain and Competitive Advantage",
            content:
              "The use of optimized supply chain strategies to gain market edge, measured through cost savings, delivery speed, and customer satisfaction data.",
            example: {
              title: "Real-World Example",
              text: "Amazon's competitive advantage is heavily built on its superior supply chain management, which allows for fast, reliable, and low-cost delivery that competitors struggle to match.",
            },
            externalLink:
              "https://hbr.org/2010/05/the-supply-chain-as-a-strategic-asset",
          },
          {
            title: "Green Supply Chain Management",
            content:
              "A supply chain approach focused on minimizing environmental impact, tracked through carbon emission reductions and sustainable sourcing percentages.",
            example: {
              title: "Real-World Example",
              text: "IKEA designs products to be flat-packed, allowing more items to fit on a single truck. This reduces transportation costs and carbon emissions, making its supply chain greener.",
            },
            externalLink:
              "https://www.investopedia.com/terms/g/green-supply-chain-management.asp",
          },
          {
            title: "MNC's Leading the Way in Sustainability and Supply Chain",
            content:
              "Multinational corporations driving sustainable practices, evaluated through global supply chain audits and sustainability ranking indices.",
            example: {
              title: "Real-World Example",
              text: "Schneider Electric consistently ranks as one of the world's most sustainable companies due to its focus on energy efficiency and circular economy principles throughout its global supply chain.",
            },
            externalLink:
              "https://www.corporateknights.com/rankings/global-100-rankings/2023-global-100-rankings/100-most-sustainable-corporations-of-2023/",
          },
          {
            title: "Sustainable Sourcing",
            content:
              "The procurement of materials with minimal environmental harm, assessed through supplier sustainability scores and ethical sourcing audits.",
            example: {
              title: "Real-World Example",
              text: "A chocolate company sourcing cocoa beans only from farms certified by the Rainforest Alliance is practicing sustainable sourcing, ensuring the beans are grown in an environmentally and socially responsible way.",
            },
            externalLink:
              "https://www.unido.org/our-focus-safeguarding-environment-circular-economy-and-resource-efficiency-sustainable-supply-chains/sustainable-sourcing-platform",
          },
          {
            title: "International Codes on Sustainability",
            content:
              "Global standards and guidelines, such as ISO 14001, providing frameworks for sustainable practices, enforced through compliance audits and certifications.",
            example: {
              title: "Analogy",
              text: 'International codes like ISO 14001 are like a rulebook for "good environmental behavior" for companies. Getting certified is like passing an exam that proves you know and follow the rules.',
            },
            externalLink:
              "https://www.iso.org/iso-14001-environmental-management.html",
          },
          {
            title: "Integrating Sustainability into Supply Chain Process",
            content:
              "The embedding of sustainability goals into supply chain operations, monitored through integrated KPIs like energy use and waste reduction across stages.",
            example: {
              title: "Analogy",
              text: "This is like weaving a green thread through every part of a rope. Sustainability isn't just one section; it's integrated into procurement, manufacturing, logistics, and delivery to make the whole supply chain strong and sustainable.",
            },
            externalLink:
              "https://sustainability.smeal.psu.edu/supply-chain/integrating-sustainability-into-the-supply-chain",
          },
          {
            title: "Global Best Practices in Ethical Sourcing",
            content:
              "Internationally recognized standards for procuring materials responsibly, evaluated through supplier audits and compliance with fair trade and labor metrics.",
            example: {
              title: "Real-World Example",
              text: "The Fairtrade International certification is a best practice in ethical sourcing. When you see their mark on coffee or chocolate, it signifies that the farmers received a fair price and the product was made under decent working conditions.",
            },
            externalLink: "https://www.fairtrade.net/",
          },
        ],
      },
      {
        title: "Broader Context: Economy, History, and CSR",
        icon: (
          <Scale
            size={32}
            className="text-purple-600"
          />
        ),
        topics: [
          {
            title: "Historical Context of Sustainability",
            content:
              "The evolution of sustainability concepts, traced through historical data on environmental policies and resource management practices from the industrial era onward.",
            example: {
              title: "Analogy",
              text: "The concept of sustainability didn't appear overnight. It grew from early conservation movements, was fueled by environmental disasters, and matured through scientific discovery and global conferences, like a tree growing from a seed over many decades.",
            },
            externalLink:
              "https://www.thesustainabilityboard.com/blog/a-brief-history-of-sustainability",
          },
          {
            title: "The Green Economy",
            content:
              "An economic system focused on reducing environmental impact, measured through indicators like renewable energy adoption and carbon-neutral production rates.",
            example: {
              title: "Analogy",
              text: "A green economy is like a garden. Instead of depleting the soil (resources), you enrich it through composting (recycling) and companion planting (synergies), ensuring it remains productive for years to come.",
            },
            externalLink:
              "https://www.unep.org/regions/asia-and-pacific/regional-initiatives/supporting-green-economy",
          },
          {
            title: "Introduction to CSR",
            content:
              "The foundation of Corporate Social Responsibility, encompassing voluntary business practices to address social and environmental issues, guided by global frameworks.",
            example: {
              title: "Real-World Example",
              text: "TOMS Shoes built its brand on a CSR model: for every pair of shoes purchased, the company donates a pair to a child in need. This social mission is central to their business.",
            },
            externalLink:
              "https://online.hbs.edu/blog/post/types-of-corporate-social-responsibility",
          },
          {
            title: "Concepts about CSR",
            content:
              "Core principles of CSR, including stakeholder engagement, ethical governance, and environmental stewardship, analyzed through corporate impact assessments.",
            example: {
              title: "Analogy",
              text: 'CSR is a company\'s "good citizen" plan. It outlines how the company will voluntarily contribute to society and the environment, beyond just making a profit and obeying the law.',
            },
            externalLink:
              "https://www.investopedia.com/terms/c/corp-social-responsibility.asp",
          },
          {
            title: "CSR Case Study on Price Water House Coopers",
            content:
              "A detailed analysis of PwC’s CSR initiatives, showcasing data-driven strategies for community development and sustainability in professional services.",
            example: {
              title: "Real-World Example",
              text: 'PwC\'s "New world. New skills." program is a CSR initiative aimed at upskilling people around the world to close the digital skills gap, which benefits society and also builds a potential future talent pool for the company.',
            },
            externalLink:
              "https://www.pwc.com/gx/en/about/corporate-responsibility.html",
          },
          {
            title: "Google 2018 Environmental Report",
            content:
              "A comprehensive document detailing Google’s environmental performance in 2018, highlighting energy usage, carbon emissions, and renewable energy investments.",
            example: {
              title: "Specific Data Point",
              text: "In their 2018 report, Google highlighted that they matched 100% of their annual electricity consumption with renewable energy purchases for the second year in a row.",
            },
            externalLink:
              "https://www.gstatic.com/gumdrop/sustainability/google-2018-environmental-report.pdf",
          },
          {
            title: "Green Supply Chain Management",
            content:
              "A supply chain approach prioritizing eco-friendly practices, tracked through metrics like waste reduction and sustainable transportation efficiency.",
            example: {
              title: "Real-World Example",
              text: "Patagonia works to reduce its environmental impact by using recycled materials, reducing water usage in dyeing processes, and offering repairs to extend the life of its products, all key parts of a green supply chain.",
            },
            externalLink:
              "https://www.investopedia.com/terms/g/green-supply-chain-management.asp",
          },
          {
            title: "CSR in a Developing Context",
            content:
              "The application of CSR in emerging markets, tailored to local economic and environmental challenges, assessed through community impact and resource use data.",
            example: {
              title: "Real-World Example",
              text: "A multinational beverage company might focus its CSR in a developing country on providing access to clean water for local communities, a direct response to a critical local need.",
            },
            externalLink:
              "https://www.unido.org/our-work-thematic-areas-safeguarding-environment/corporate-social-responsibility-market-integration",
          },
          {
            title: "MNC's and World Sustainability",
            content:
              "The role of multinational corporations in global sustainability, evaluated through aggregated data on their environmental policies and supply chain footprints.",
            example: {
              title: "Analogy",
              text: "MNCs are like the largest ships on the ocean. Their wakes (environmental and social impacts) are enormous, so a small change in their direction can have a massive positive or negative effect on the entire ocean (the world).",
            },
            externalLink:
              "https://www.weforum.org/agenda/2021/01/davos-agenda-2021-multinational-companies-stakeholder-capitalism/",
          },
          {
            title: "Sustainability as a Competitive Strategy",
            content:
              "A business approach using sustainability to gain market advantage, quantified through cost savings, brand reputation, and customer loyalty metrics.",
            example: {
              title: "Real-World Example",
              text: "Interface, the carpet company, turned sustainability into a competitive advantage by pioneering carpet recycling and leasing programs, which attracted environmentally conscious customers and reduced landfill costs.",
            },
            externalLink: "https://hbr.org/2011/05/the-sustainable-enterprise",
          },
          {
            title: "Business Ethics",
            content:
              "Moral principles guiding corporate behavior, encompassing integrity, transparency, and accountability, monitored through compliance and ethical audit scores.",
            example: {
              title: "Analogy",
              text: 'Business ethics are the "rules of the game" for a company. Just like in a sport, you can play to win, but you have to do it fairly and without cheating.',
            },
            externalLink:
              "https://www.investopedia.com/terms/b/business-ethics.asp",
          },
          {
            title: "Sustainable Development Goals",
            content:
              "A set of 17 global targets to address poverty, inequality, and climate change, measured through specific indicators like clean water access and emission reductions.",
            example: {
              title: "Real-World Example",
              text: 'Microsoft aligns its sustainability efforts with the SDGs, focusing on areas like "Climate Action" (Goal 13) by committing to be carbon negative, and "Quality Education" (Goal 4) through its digital skills programs.',
            },
            externalLink: "https://sdgs.un.org/goals",
          },
          {
            title: "Clarifying the Meaning of Sustainability",
            content:
              "A refined definition of sustainability as the balance of ecological, social, and economic systems, supported by long-term environmental and social data trends.",
            example: {
              title: "Analogy",
              text: "Sustainability isn't just about being \"green.\" It's about ensuring a business can thrive long-term without causing harm, like a well-tended garden that produces food year after year without depleting the soil or harming the surrounding ecosystem.",
            },
            externalLink:
              "https://www.un.org/en/academic-impact/sustainability",
          },
        ],
      },
    ],
  },
  strategicLeadership: {
    id: "strategicLeadership",
    title: "Module 2: Strategic Leadership & HR",
    description: "Aligning human capital with organizational goals and change.",
    icon: (
      <ClipboardList
        size={40}
        className="text-red-500"
      />
    ),
    sections: [
      {
        title: "HRM Fundamentals & Strategy",
        icon: (
          <Users
            size={32}
            className="text-red-600"
          />
        ),
        topics: [
          {
            title: "Origin and Purpose of HRM",
            content:
              "The historical development of Human Resource Management, aimed at optimizing workforce efficiency through structured recruitment, training, and policy enforcement.",
            example: {
              title: "Analogy",
              text: 'HRM started as a simple "personnel" department, like a file clerk for employee records. It has evolved into a strategic partner, like a coach who develops the team to win the championship (achieve business goals).',
            },
            externalLink:
              "https://www.aihr.com/blog/what-is-human-resource-management/",
          },
          {
            title: "Characteristics and Purpose of HRM",
            content:
              "Key traits of HRM including employee development, compliance, and performance management, designed to align human capital with organizational goals.",
            example: {
              title: "Analogy",
              text: "HRM acts as the central nervous system of a company's workforce, ensuring all parts (employees) are healthy, working together, and contributing to the overall body's (organization's) goals.",
            },
            externalLink:
              "https://www.forbes.com/advisor/business/what-is-human-resource-management-hrm/",
          },
          {
            title: "Functions of HRM",
            content:
              "Core activities like staffing, training, compensation, and employee relations, executed to enhance productivity and maintain workforce stability.",
            example: {
              title: "Analogy",
              text: "The functions of HRM are like the different departments on a cruise ship. Staffing gets the crew on board, training teaches them their jobs, compensation ensures they get paid, and employee relations keeps everyone working together smoothly.",
            },
            externalLink:
              "https://www.indeed.com/career-advice/career-development/functions-of-hrm",
          },
          {
            title: "Staffing HR Activities",
            content:
              "Processes for recruiting, selecting, and onboarding employees, utilizing job analysis and candidate evaluation techniques to build effective teams.",
            example: {
              title: "Real-World Example",
              text: "Google's staffing process is famous for its multiple rounds of interviews and data-driven approach to selecting candidates who not only have the right skills but also fit their innovative culture.",
            },
            externalLink:
              "https://www.shrm.org/resourcesandtools/tools-and-samples/toolkits/pages/staffing.aspx",
          },
          {
            title: "Development of HR",
            content:
              "The evolution of HR practices through continuous learning, career development programs, and skill enhancement initiatives to adapt to market changes.",
            example: {
              title: "Real-World Example",
              text: 'Companies like Amazon invest heavily in employee development, offering programs like "Career Choice" which prepays tuition for employees to learn new skills for high-demand fields, even if it means they leave the company.',
            },
            externalLink:
              "https://www.valamis.com/hub/human-resource-development",
          },
          {
            title: "Compensation HR Activities",
            content:
              "Systems for determining salaries, bonuses, and benefits, based on performance metrics, market benchmarks, and legal compliance standards.",
            example: {
              title: "Real-World Example",
              text: "Netflix is known for its high-compensation strategy, aiming to pay top-of-market salaries to attract and retain the best talent, believing that one top performer is more valuable than several average ones.",
            },
            externalLink:
              "https://www.investopedia.com/terms/c/compensation.asp",
          },
          {
            title: "SHRM Fundamentals",
            content:
              "Strategic Human Resource Management principles, focusing on aligning HR policies with long-term business objectives through data-driven planning.",
            example: {
              title: "Real-World Example",
              text: "If a tech company's strategy is to be the most innovative in its field, its SHRM strategy would be to recruit top PhDs, create a culture of experimentation, and offer R&D-focused bonuses, rather than just focusing on minimizing hiring costs.",
            },
            externalLink:
              "https://www.investopedia.com/terms/s/strategic-human-resource-management.asp",
          },
          {
            title: "Strategic Driven Practices Continues",
            content:
              "Ongoing strategies that integrate HR with business goals, emphasizing adaptability and continuous improvement through performance tracking.",
            example: {
              title: "Analogy",
              text: "This is like a ship captain constantly adjusting the sails (HR practices) based on the changing winds (market conditions) to stay on course towards the destination (business goals).",
            },
            externalLink:
              "https://www.forbes.com/sites/forbeshumanresourcescouncil/2021/04/09/15-ways-hr-can-be-a-better-strategic-partner-to-an-organization/",
          },
          {
            title: "Strategic HRM Practices",
            content:
              "Tactical HR approaches like talent management and succession planning, designed to support organizational growth and competitive positioning.",
            example: {
              title: "Real-World Example",
              text: "General Electric (GE) is famous for its rigorous succession planning, where it identifies and develops high-potential leaders years in advance to ensure a smooth transition for key executive roles.",
            },
            externalLink: "https://www.valamis.com/hub/strategic-hrm",
          },
          {
            title: "Cost Leadership and Differentiation Strategy",
            content:
              "Business strategies where cost leadership minimizes expenses and differentiation highlights unique offerings, both supported by HR-driven efficiency and innovation.",
            example: {
              title: "Real-World Example",
              text: "Walmart's HR supports a cost leadership strategy with efficient scheduling and standardized roles. Apple's HR supports differentiation by recruiting top designers and fostering a secretive, innovative culture.",
            },
            externalLink:
              "https://www.simplilearn.com/cost-leadership-and-differentiation-strategy-article",
          },
          {
            title: "Strategic HRM Trends",
            content:
              "Emerging patterns in HR, including digital transformation, remote work policies, and diversity initiatives, shaped by technological and societal shifts.",
            example: {
              title: "Real-World Example",
              text: "A major trend is using AI for recruiting to analyze resumes and conduct initial screenings, and adopting flexible remote work policies to attract a wider talent pool.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbeshumanresourcescouncil/2023/01/24/top-hr-trends-for-2023/",
          },
          {
            title: "Strategic HR Planning Overview",
            content:
              "A comprehensive process for forecasting HR needs, involving workforce analysis and alignment with corporate strategic goals over time.",
            example: {
              title: "Analogy",
              text: "Strategic HR planning is like a city planner deciding how many houses, schools, and hospitals to build. They analyze population growth (business growth) to ensure the city has the right resources (employees) for the future.",
            },
            externalLink:
              "https://www.shrm.org/resourcesandtools/tools-and-samples/toolkits/pages/developingstrategichrplans.aspx",
          },
          {
            title: "HR Planning Implementation",
            content:
              "The execution phase of HR planning, involving resource allocation, training schedules, and performance monitoring to meet organizational targets.",
            example: {
              title: "Analogy",
              text: "This is the construction phase of the city plan. It's about actually building the houses (hiring people), schools (training programs), and hospitals (compensation systems) that were planned.",
            },
            externalLink:
              "https://www.whatishumanresource.com/hr-planning-implementation",
          },
          {
            title: "HR Supply Demand & Forecasting Analysis",
            content:
              "Analytical methods to predict HR supply and demand, using statistical models and trend analysis to ensure workforce balance and readiness.",
            example: {
              title: "Analogy",
              text: 'This is like a weather forecast for talent. It predicts if you\'ll have a "sunny" period with enough skilled workers or if a "storm" of retirements and skill shortages is coming, so you can prepare.',
            },
            externalLink: "https://www.aihr.com/blog/demand-forecasting/",
          },
          {
            title: "HR Planning Evaluation",
            content:
              "The assessment of HR planning effectiveness, measured through key performance indicators like employee retention and goal achievement rates.",
            example: {
              title: "Analogy",
              text: "This is like checking the city's performance after construction. Are the schools improving graduation rates (productivity)? Are residents happy and staying (retention)? This feedback helps improve the next city plan.",
            },
            externalLink:
              "https://smallbusiness.chron.com/evaluate-hr-planning-38067.html",
          },
        ],
      },
      {
        title: "Leadership, Development & Legal Environment",
        icon: (
          <Briefcase
            size={32}
            className="text-orange-600"
          />
        ),
        topics: [
          {
            title: "Strategic Recruitment",
            content:
              "A targeted hiring process that aligns candidate skills with organizational needs, utilizing advanced sourcing techniques and assessment tools.",
            example: {
              title: "Analogy",
              text: "Strategic recruitment is like casting for a movie. You don't just hire any actor; you find the specific actor whose skills, style, and chemistry fit the role and the director's vision perfectly.",
            },
            externalLink: "https://www.aihr.com/blog/strategic-recruitment/",
          },
          {
            title: "Global HRM Strategy",
            content:
              "A framework for managing human resources across international markets, adapting to cultural, legal, and economic variations through centralized policies.",
            example: {
              title: "Real-World Example",
              text: "McDonald's has a global HRM strategy that standardizes core training and brand values worldwide but allows local franchises to adapt hiring practices and compensation to local laws and customs.",
            },
            externalLink:
              "https://www.allthingspeople.com/global-hrm-strategies/",
          },
          {
            title: "Role of HR in Organisations",
            content:
              "The function of HR in driving organizational success, encompassing talent management, policy enforcement, and employee engagement strategies.",
            example: {
              title: "Analogy",
              text: "HR is the engine room of the organization. While the captain on the bridge sets the direction, HR ensures the engine is well-maintained (talent management), running safely (compliance), and has enough fuel (employee engagement) to power the ship forward.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbeshumanresourcescouncil/2022/01/24/the-evolving-role-of-hr-in-modern-organizations/",
          },
          {
            title: "Evaluating HR Outcomes",
            content:
              "The measurement of HR effectiveness, analyzed through metrics like employee satisfaction, productivity gains, and turnover rates.",
            example: {
              title: "Analogy",
              text: "Evaluating HR outcomes is like a doctor checking a patient's vital signs. Metrics like turnover rate (heart rate), employee satisfaction (body temperature), and productivity (blood pressure) show the overall health of the workforce.",
            },
            externalLink:
              "https://www.shrm.org/hr-today/trends-and-forecasting/special-reports-and-expert-views/pages/evaluating-hr.aspx",
          },
          {
            title: "Impact of HRM on Organisational Development",
            content:
              "The influence of HR practices on organizational growth, tracked through improvements in culture, innovation, and operational efficiency.",
            example: {
              title: "Real-World Example",
              text: 'Google\'s famous "20% time" policy, an HRM initiative allowing employees to work on side projects, directly led to the development of major products like Gmail and AdSense, fueling organizational growth.',
            },
            externalLink:
              "https://www.linkedin.com/pulse/impact-human-resource-management-organizational-development-jha",
          },
          {
            title: "Legal Regulatory Environment",
            content:
              "The set of laws and regulations governing HR, including labor standards and workplace safety, monitored through compliance audits and updates.",
            example: {
              title: "Analogy",
              text: 'The legal environment is the "rulebook" of the game that HR must play by. It sets the boundaries for everything from hiring and firing to workplace safety, and ignoring it leads to penalties.',
            },
            externalLink:
              "https://www.shrm.org/resourcesandtools/legal-and-compliance/pages/default.aspx",
          },
          {
            title: "Managing Diversity",
            content:
              "The practice of fostering an inclusive workplace, supported by diversity metrics and training programs to enhance team collaboration and innovation.",
            example: {
              title: "Real-World Example",
              text: "Salesforce publishes its diversity statistics publicly and ties executive compensation to achieving diversity and inclusion goals, making it a measurable part of the business strategy.",
            },
            externalLink:
              "https://www.mckinsey.com/featured-insights/diversity-and-inclusion/diversity-wins-how-inclusion-matters",
          },
          {
            title: "Workplace Relationships",
            content:
              "The dynamics of employee interactions, managed through conflict resolution protocols and communication frameworks to maintain a positive environment.",
            example: {
              title: "Analogy",
              text: "Managing workplace relationships is like being a gardener. You need to provide the right conditions (clear communication), pull out the weeds (resolve conflicts), and ensure all the different plants (employees) have the space to grow together.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbescoachescouncil/2022/03/15/14-effective-ways-to-improve-workplace-relationships/",
          },
          {
            title: "Action Centered Leadership",
            content:
              "A leadership model focusing on task achievement, team building, and individual development, evaluated through project success and team cohesion data.",
            example: {
              title: "Analogy",
              text: "An action-centered leader is like a juggler keeping three balls in the air: the project deadline (Task), team morale (Team), and each person's skill growth (Individual). Dropping any one ball affects the others.",
            },
            externalLink:
              "https://www.mindtools.com/pages/article/action-centred-leadership.htm",
          },
          {
            title: "Leadership Development",
            content:
              "Structured programs to enhance leadership skills, utilizing feedback loops and performance assessments to prepare individuals for managerial roles.",
            example: {
              title: "Real-World Example",
              text: 'Companies like Deloitte have comprehensive leadership development "universities" where employees go through structured programs with simulations, coaching, and projects to build their leadership capabilities.',
            },
            externalLink:
              "https://ccl.org/articles/leading-effectively-articles/what-is-leadership-development/",
          },
          {
            title: "Leadership Grid",
            content:
              "A theoretical framework mapping leadership styles based on concern for people versus production, analyzed through behavioral observation and survey data.",
            example: {
              title: "Analogy",
              text: "The Leadership Grid is like a GPS for leaders. It shows your current position (e.g., high concern for production, low for people) and helps you navigate towards a more balanced style (high concern for both).",
            },
            externalLink:
              "https://www.expertprogrammanagement.com/2018/10/blake-mouton-managerial-grid/",
          },
          {
            title: "Leadership Career Stages",
            content:
              "The progression of leadership roles, defined by skill acquisition phases like novice, skilled, and expert, tracked through career milestone metrics.",
            example: {
              title: "Analogy",
              text: "A leadership career is like leveling up in a video game. You start as a novice learning basic moves, become skilled by mastering combos, and finally reach the expert level where you can invent new strategies.",
            },
            externalLink:
              "https://hbr.org/2004/01/the-seven-ages-of-the-leader",
          },
        ],
      },
      {
        title: "Leadership Styles & Change Management",
        icon: (
          <Recycle
            size={32}
            className="text-purple-600"
          />
        ),
        topics: [
          {
            title: "Leadership Fundamentals",
            content:
              "Core principles of effective leadership, including decision-making, communication, and vision-setting, assessed through leadership competency models.",
            example: {
              title: "Analogy",
              text: "Leadership fundamentals are like the foundation of a house. Without a strong base of clear communication, sound decision-making, and a compelling vision, any leadership structure built on top will eventually crumble.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbescoachescouncil/2023/02/10/16-fundamental-principles-of-leadership/",
          },
          {
            title: "Leadership Approaches",
            content:
              "Various methodologies like transformational and servant leadership, differentiated by their focus on inspiration versus service, evaluated via team outcomes.",
            example: {
              title: "Analogy",
              text: "Different leadership approaches are like different coaching styles. A transformational leader is the inspirational coach giving a halftime speech. A servant leader is the coach who carries the water bottles and ensures the players have everything they need to succeed.",
            },
            externalLink:
              "https://www.indeed.com/career-advice/career-development/leadership-approaches",
          },
          {
            title: "Leadership Styles",
            content:
              "Distinct patterns of leadership behavior, such as autocratic or democratic, characterized by decision-making authority and influence tactics.",
            example: {
              title: "Real-World Example",
              text: "An army general in a battle might use an autocratic style (giving direct orders). A tech startup brainstorming a new product would likely use a democratic style (encouraging team input).",
            },
            externalLink:
              "https://www.verywellmind.com/what-is-leadership-2795321",
          },
          {
            title: "Traits and Behavioral Styles",
            content:
              "Inherent qualities like confidence and learned behaviors like adaptability, identified through personality assessments and observational studies.",
            example: {
              title: "Analogy",
              text: "Leadership traits are the raw ingredients a person has (like confidence). Behavioral styles are how they choose to cook with those ingredients (their actions and decisions).",
            },
            externalLink:
              "https://www.ccl.org/articles/leading-effectively-articles/leadership-styles-and-traits/",
          },
          {
            title: "Situational Leadership",
            content:
              "A flexible leadership approach adjusting to team maturity levels, determined by task readiness and follower development stages.",
            example: {
              title: "Real-World Example",
              text: "A film director tells an extra exactly where to stand (directing), collaborates with the lead actor on their performance (coaching), supports the stunt team as they work (supporting), and trusts the Oscar-winning cinematographer to set up the shot (delegating).",
            },
            externalLink:
              "https://online.hbs.edu/blog/post/situational-leadership",
          },
          {
            title: "Shared and Group Leadership",
            content:
              "Collaborative leadership models distributing responsibility across teams, measured by group performance and decision-making efficiency.",
            example: {
              title: "Real-World Example",
              text: "Open-source software projects like Linux operate on a shared leadership model, where authority is distributed among key developers and contributors based on expertise and reputation, not a formal hierarchy.",
            },
            externalLink:
              "https://hbr.org/2011/04/when-to-use-a-team-and-when-not-to",
          },
          {
            title: "Transactional and Transformational Leadership",
            content:
              "Transactional leadership based on rewards and compliance, versus transformational leadership driving change through vision, both tracked via employee motivation metrics.",
            example: {
              title: "Analogy",
              text: "A transactional leader is like a vending machine: you put in the work (money) and get a predictable reward (a snack). A transformational leader is like a great mentor who inspires you to become a better version of yourself, beyond just getting the job done.",
            },
            externalLink:
              "https://www.verywellmind.com/what-is-transformational-leadership-2795313",
          },
          {
            title: "Introduction to Change Management",
            content:
              "The process of guiding organizations through transitions, involving planning, implementation, and evaluation phases to achieve desired outcomes.",
            example: {
              title: "Analogy",
              text: "Change management is like being the captain of a ship navigating from a familiar port to a new one. You need a map (plan), a crew that knows what to do (communication & training), and a way to handle storms (managing resistance).",
            },
            externalLink:
              "https://www.prosci.com/resources/articles/what-is-change-management",
          },
          {
            title: "Factors Driving Change",
            content:
              "External and internal forces like market trends and technological advances, analyzed through impact assessments and trend forecasting.",
            example: {
              title: "Real-World Example",
              text: "The rise of Netflix (a technological factor) drove massive change in the entertainment industry, forcing companies like Blockbuster to adapt or fail.",
            },
            externalLink:
              "https://www.managementstudyguide.com/change-management.htm",
          },
          {
            title: "Challenges of Change",
            content:
              "Obstacles such as resistance and resource constraints, identified through risk analysis and stakeholder feedback during transformation efforts.",
            example: {
              title: "Analogy",
              text: "Implementing change is like trying to move a large, heavy boulder. You face the challenge of its sheer weight (resource constraints) and the fact that it has been sitting in the same spot for years (resistance from inertia).",
            },
            externalLink:
              "https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/the-psychology-of-change-management",
          },
          {
            title: "Team Change",
            content:
              "The collective adaptation of a team to new processes, supported by collaboration tools and change readiness evaluations.",
            example: {
              title: "Analogy",
              text: "Team change is like a sports team learning a new playbook. It requires every player to understand their new role, practice together, and trust that the new strategy will work.",
            },
            externalLink:
              "https://www.culture-plus.co.uk/culture-blog/managing-team-through-change",
          },
          {
            title: "Resistance to Change",
            content:
              "The opposition to new initiatives, stemming from fear or inertia, measured through employee surveys and engagement levels.",
            example: {
              title: "Real-World Example",
              text: "When a company introduces new software, employees might resist because they are comfortable with the old system and fear they won't be able to learn the new one, potentially making them look incompetent or slowing down their work.",
            },
            externalLink:
              "https://hbr.org/2016/11/10-reasons-people-resist-change",
          },
          {
            title: "Conventional Change Management Theories",
            content:
              "Traditional models like Lewin’s Change Management, focusing on unfreezing, changing, and refreezing stages, based on historical organizational data.",
            example: {
              title: "Analogy",
              text: "Lewin's model is like changing the shape of an ice cube. You have to melt it first (unfreeze), pour the water into a new mold (change), and then freeze it again (refreeze).",
            },
            externalLink:
              "https://www.mindtools.com/pages/article/newPPM_94.htm",
          },
          {
            title: "Contemporary Change Management Theories",
            content:
              "Modern frameworks like Agile Change, emphasizing iterative adjustments and stakeholder involvement, validated through real-time performance metrics.",
            example: {
              title: "Analogy",
              text: "Contemporary (Agile) change is like building with LEGOs by trying a design, seeing how it looks, and then making small adjustments with constant feedback, rather than following a fixed instruction manual.",
            },
            externalLink:
              "https://www.cio.com/article/228811/what-is-agile-change-management.html",
          },
          {
            title: "Balancing Stakeholders Expectations During Change",
            content:
              "The process of aligning diverse stakeholder needs, assessed through negotiation outcomes and satisfaction surveys during transitions.",
            example: {
              title: "Analogy",
              text: "This is like being a diplomat negotiating a peace treaty. You have multiple parties (stakeholders) with different demands, and your job is to find a compromise that everyone can agree to, even if no one gets everything they want.",
            },
            externalLink:
              "https://www.pmi.org/learning/library/stakeholder-management-change-initiatives-6898",
          },
          {
            title: "Strategic Leadership and Change Management",
            content:
              "Leadership that drives strategic change, integrating vision with execution plans, evaluated through long-term organizational performance indicators.",
            example: {
              title: "Real-World Example",
              text: 'When Satya Nadella became CEO of Microsoft, he didn\'t just implement small changes; he strategically shifted the entire company\'s focus from "Windows-first" to "cloud-first," a massive change he led from the top.',
            },
            externalLink:
              "https://online.hbs.edu/blog/post/strategic-leadership",
          },
          {
            title: "Requirements of Successful Change Management",
            content:
              "Essential elements like clear communication, resource allocation, and training, measured by change adoption rates and project success metrics.",
            example: {
              title: "Analogy",
              text: "Successful change is like planting a tree. You need a good reason to plant it (vision), the right spot (planning), enough water and sunlight (resources), and you need to tell people what it will become (communication).",
            },
            externalLink:
              "https://www.prosci.com/resources/articles/7-requirements-for-successful-change",
          },
        ],
      },
    ],
  },
  marketing: {
    id: "marketing",
    title: "Module 3: Marketing",
    description: "Principles of strategy, branding, and consumer behavior.",
    icon: (
      <Megaphone
        size={40}
        className="text-teal-500"
      />
    ),
    sections: [
      {
        title: "Core Marketing Concepts",
        icon: (
          <Globe
            size={32}
            className="text-teal-600"
          />
        ),
        topics: [
          {
            title: "Introduction to Global Environment",
            content:
              "The global environment refers to worldwide factors affecting business operations, including economic, political, cultural and technological influences across borders.",
            example: {
              title: "Real-World Example",
              text: "A smartphone company like Apple must consider different electrical plug standards (technological), privacy laws like GDPR in Europe (political), and local language preferences (cultural) when selling iPhones globally.",
            },
            externalLink:
              "https://www.yourarticlelibrary.com/marketing/the-global-marketing-environment-and-its-major-components/48595",
          },
          {
            title: "Introduction to Marketing",
            content:
              "Marketing involves creating, communicating and delivering value to customers through products/services while building strong customer relationships.",
            example: {
              title: "Real-World Example",
              text: 'Nike does more than sell shoes; it markets a lifestyle of athleticism and determination through its "Just Do It" slogan, athlete endorsements, and community-building apps.',
            },
            externalLink:
              "https://www.ama.org/the-definition-of-marketing-what-is-marketing/",
          },
          {
            title:
              "Influence of the Changing Business Environment on Marketing",
            content:
              "Changing environments (technology, regulations, competition) require marketing to adapt strategies, channels and customer engagement approaches.",
            example: {
              title: "Real-World Example",
              text: "The rise of TikTok forced brands to shift from polished TV ads to creating short, authentic video content to engage with younger audiences, adapting their marketing channels and strategies.",
            },
            externalLink:
              "https://www.linkedin.com/pulse/impact-changing-business-environment-marketing-functions-ugwueze-ebuka",
          },
          {
            title: "Marketing Approaches in Marketplaces",
            content:
              "Approaches can be Local (focused on community needs), National (standardized country-wide), Regional (tailored for cultural/economic zones), or Global (worldwide standardized).",
            example: {
              title: "Real-World Example",
              text: "Coca-Cola uses a global approach for its brand logo and core product, but a local approach for advertising campaigns, which often feature local celebrities and cultural references.",
            },
            externalLink:
              "https://www.yourarticlelibrary.com/marketing/market-entry-strategies/global-marketing-approaches/48624",
          },
          {
            title: "Evolution of Marketing Concepts",
            content:
              "Marketing has evolved from a focus on Production (efficiency), to Product (quality), to Selling (promotion), and finally to the modern Marketing Concept (customer needs drive all decisions).",
            example: {
              title: "Analogy",
              text: "It's like the evolution of asking someone on a date. First, you just showed up (Production). Then, you focused on your cool car (Product). Then, you used cheesy pickup lines (Selling). Finally, you learned to listen and find a shared interest (Marketing).",
            },
            externalLink:
              "https://www.managementstudyguide.com/evolution-of-marketing.htm",
          },
          {
            title: "Evolving Marketing Concepts and Theories",
            content:
              "New approaches include relationship marketing, digital marketing, and sustainability-focused strategies responding to modern consumer values.",
            example: {
              title: "Real-World Example",
              text: "A subscription box service like Stitch Fix uses relationship marketing by building a profile of your style over time, and digital marketing through social media ads and email campaigns.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbesagencycouncil/2023/02/06/the-evolution-of-marketing-in-the-digital-age/",
          },
          {
            title: "International Marketing & Importance",
            content:
              "International marketing involves adapting strategies for foreign markets, crucial for business growth and competitive advantage globally.",
            example: {
              title: "Real-World Example",
              text: "Starbucks expanded into Italy, the home of espresso. To succeed, they had to adapt by offering more traditional espresso options and designing stores that respected Italian cafe culture, demonstrating the importance of international marketing.",
            },
            externalLink:
              "https://www.investopedia.com/terms/i/international-marketing.asp",
          },
          {
            title: "International Entry Modes",
            content:
              "Companies can enter foreign markets through Exporting, Licensing (allowing foreign firms to use IP), Joint Ventures (partnering with local businesses), or Direct Investment (establishing foreign operations).",
            example: {
              title: "Real-World Example",
              text: "McDonald's primarily uses franchising (a form of licensing) to expand globally, while a company like Toyota uses direct investment to build its own factories in foreign countries.",
            },
            externalLink:
              "https://www.investopedia.com/terms/m/market-entry-strategy.asp",
          },
          {
            title: "International Marketing Levels & Drivers",
            content:
              "Levels include Domestic, export, international, multinational, and global. Drivers include market saturation, competition, technology, and cost efficiencies.",
            example: {
              title: "Analogy",
              text: "A company's journey is like a person learning to swim. They start in the local pool (domestic), then dip their toes in the sea (export), then swim along the coast (international), and finally cross the ocean (global). Saturation in the pool drives them to the sea.",
            },
            externalLink:
              "https://www.managementstudyguide.com/international-marketing-introduction.htm",
          },
          {
            title: "International Marketing Task",
            content:
              "Tasks include market research, adaptation of marketing mix, compliance with local regulations, and managing cross-cultural differences.",
            example: {
              title: "Real-World Example",
              text: "When IKEA expanded to India, its marketing task included researching local furniture needs (e.g., more foldable items for smaller spaces) and adapting its marketing images to feature Indian families.",
            },
            externalLink:
              "https://www.yourarticlelibrary.com/marketing/international-marketing-concept-and-tasks-of-international-marketing-manager/22227",
          },
          {
            title: "International Marketing Elements",
            content:
              "Key elements include adapting Product, Price (currency, tariffs), Place (distribution channels), and Promotion (messaging) for different cultures.",
            example: {
              title: "Real-World Example",
              text: 'KFC adapts its menu (Product) in India to include vegetarian options like the "Paneer Zinger" and runs promotions (Promotion) centered around local festivals like Diwali.',
            },
            externalLink:
              "https://www.marketing91.com/international-marketing-mix/",
          },
        ],
      },
      {
        title: "Strategy, Planning & The Marketing Mix",
        icon: (
          <Target
            size={32}
            className="text-sky-600"
          />
        ),
        topics: [
          {
            title: "Scope of Marketing",
            content:
              "Marketing covers product development, pricing, distribution, promotion, and customer relationship management across all business sectors.",
            example: {
              title: "Analogy",
              text: 'The scope of marketing is not just the "advertising" tip of the iceberg that you see. It\'s the entire massive structure below the water, from designing the product to deciding its price and where to sell it.',
            },
            externalLink:
              "https://www.managementstudyguide.com/scope-of-marketing.htm",
          },
          {
            title: "The Marketing Process",
            content:
              "The 5-step process: 1) Understand customer needs 2) Design strategy 3) Create marketing program 4) Build relationships 5) Capture value from customers.",
            example: {
              title: "Analogy",
              text: "The marketing process is like planning a great party. You figure out who you want to invite and what they like (understand needs), decide on a theme (strategy), send out invitations and plan activities (program), make sure guests have a good time (build relationships), and enjoy the great memories and friendships (capture value).",
            },
            externalLink:
              "https://www.indeed.com/career-advice/career-development/5-step-marketing-process",
          },
          {
            title: "Sales Challenges",
            content:
              "Common challenges include price competition, changing customer preferences, product differentiation, and maintaining customer relationships in digital markets.",
            example: {
              title: "Real-World Example",
              text: "A local bookstore faces the challenge of price competition from Amazon, changing preferences as people shift to e-books, and the need to build customer relationships through events to avoid becoming obsolete.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbesbusinesscouncil/2023/02/01/15-of-the-biggest-challenges-sales-professionals-face-today/",
          },
          {
            title: "Marketing Vs Selling",
            content:
              "Marketing focuses on customer needs and long-term relationships while selling focuses on pushing products and short-term transactions.",
            example: {
              title: "Analogy",
              text: "Marketing is like farming: you cultivate the soil and plant seeds for a future harvest. Selling is the act of harvesting and taking the crops to market.",
            },
            externalLink:
              "https://hbr.org/2022/07/the-problem-with-sales-and-marketing",
          },
          {
            title: "Principles of Organizational and Environmental Audits",
            content:
              "Systematic reviews of internal capabilities (resources, processes) and external factors (market trends, competition) to inform marketing decisions.",
            example: {
              title: "Analogy",
              text: "This is like a doctor giving a patient a full check-up. The organizational audit checks the patient's internal health (strengths/weaknesses), and the environmental audit checks for external threats (like viruses or accidents).",
            },
            externalLink:
              "https://www.yourarticlelibrary.com/marketing/marketing-audit-meaning-features-and-principles/48634",
          },
          {
            title: "Marketing in New Economy",
            content:
              "Digital transformation has shifted marketing to emphasize e-commerce, social media, data analytics, and personalized customer experiences.",
            example: {
              title: "Real-World Example",
              text: 'Spotify excels at marketing in the new economy by using data analytics to create personalized playlists like "Discover Weekly," which provides immense value and keeps users engaged.',
            },
            externalLink:
              "https://www.ama.org/marketing-news/the-role-of-marketing-in-the-new-economy/",
          },
          {
            title: "Marketing Mix - 4Ps",
            content:
              "Product (Goods/services offered), Price (Value exchange amount), Place (Distribution channels), and Promotion (Communication strategies).",
            example: {
              title: "Real-World Example",
              text: "For a can of Coke: Product is the soda itself. Price is ~$1.50. Place is the vending machine or grocery store. Promotion is the TV commercial you saw.",
            },
            externalLink: "https://www.investopedia.com/terms/f/four-ps.asp",
          },
          {
            title: "Extended Marketing Mix",
            content:
              "Adds 3 new Ps to traditional mix: People (Staff/customer interactions), Process (Service delivery systems), and Physical Evidence (Tangible service aspects).",
            example: {
              title: "Real-World Example",
              text: "For a high-end restaurant: People (well-trained, attentive waiters), Process (easy reservation system, efficient food delivery), Physical Evidence (elegant decor, clean restrooms).",
            },
            externalLink:
              "https://www.professionalacademy.com/blogs/marketing-theories-the-7ps-of-the-marketing-mix/",
          },
          {
            title: "4Cs of marketing mix",
            content:
              "A customer-centric view: Customer solution (replaces Product), Cost (replaces Price), Convenience (replaces Place), and Communication (replaces Promotion).",
            example: {
              title: "Analogy",
              text: "The 4Cs flips the table around. Instead of looking from the company outwards (4Ps), it looks from the customer inwards, focusing on what solution they need, what it costs them in total (not just price), how convenient it is, and the communication they receive.",
            },
            externalLink:
              "https://www.indeed.com/career-advice/career-development/4-cs-of-marketing",
          },
          {
            title: "Market Segmentation",
            content:
              "Dividing markets into groups with similar needs/characteristics using demographics, psychographics, behavior, or geography.",
            example: {
              title: "Real-World Example",
              text: 'A car company segments its market: one segment is "families" (needs safety, space), another is "young professionals" (needs style, fuel efficiency), and another is "off-road enthusiasts" (needs durability, power).',
            },
            externalLink:
              "https://www.investopedia.com/terms/m/marketsegmentation.asp",
          },
          {
            title: "Target Marketing",
            content:
              "Selecting specific market segments to focus on based on company capabilities and segment attractiveness.",
            example: {
              title: "Real-World Example",
              text: 'After segmenting the market, the car company might decide to target the "families" segment with its new minivan and the "young professionals" segment with its new hybrid sedan.',
            },
            externalLink:
              "https://www.investopedia.com/terms/t/target-market.asp",
          },
          {
            title: "Marketing Positioning",
            content:
              "Creating a distinctive image for a product/brand in consumers' minds relative to competitors.",
            example: {
              title: "Real-World Example",
              text: 'Volvo has positioned itself as the "safest" car. Porsche has positioned itself as the "highest performance" sports car. Both sell cars, but they occupy different positions in the consumer\'s mind.',
            },
            externalLink: "https://www.shopify.com/blog/positioning-strategy",
          },
          {
            title: "Developing Marketing Strategies",
            content:
              "Process involves setting objectives, selecting target markets, creating value propositions, and allocating resources.",
            example: {
              title: "Analogy",
              text: "Developing a marketing strategy is like planning a military campaign. You set your objective (take the hill), choose your target (which part of the hill), define your unique advantage (value proposition), and then commit your troops and resources.",
            },
            externalLink:
              "https://www.forbes.com/advisor/business/marketing-strategy/",
          },
          {
            title: "Contents of a Marketing Plan",
            content:
              "Includes executive summary, situation analysis, objectives, strategies, action plans, budgets, and controls.",
            example: {
              title: "Analogy",
              text: "A marketing plan is the complete blueprint for the campaign. It has the one-page summary for the general (executive summary), the map of the battlefield (situation analysis), the mission goals (objectives), and the detailed instructions for every unit (action plans).",
            },
            externalLink:
              "https://www.sba.gov/business-guide/manage-your-business/write-your-business-plan",
          },
          {
            title: "SWOT Analysis",
            content:
              "Evaluates internal Strengths/Weaknesses and external Opportunities/Threats to guide strategy development.",
            example: {
              title: "Real-World Example",
              text: "For Tesla: Strength (brand recognition), Weakness (production bottlenecks), Opportunity (growing EV market), Threat (increased competition from legacy automakers).",
            },
            externalLink: "https://www.investopedia.com/terms/s/swot.asp",
          },
          {
            title: "PESTEL Analysis",
            content:
              "Examines Political, Economic, Social, Technological, Environmental, and Legal factors affecting business.",
            example: {
              title: "Analogy",
              text: "PESTEL analysis is like a weather forecast for your business. It checks for political storms, economic droughts, social trends (changing winds), technological advancements (new currents), and legal floods that could affect your journey.",
            },
            externalLink:
              "https://www.investopedia.com/terms/p/pestel-analysis.asp",
          },
          {
            title: "Ansoff Matrix",
            content:
              "A growth strategy framework with four options: Market Penetration, Market Development, Product Development, and Diversification.",
            example: {
              title: "Real-World Example",
              text: "Starbucks uses Market Penetration (selling more coffee to existing customers), Market Development (opening stores in new countries), Product Development (introducing new food items), and Diversification (selling coffee machines).",
            },
            externalLink:
              "https://www.ansoffmatrix.com/ansoff-matrix-a-powerful-tool-for-growth/",
          },
          {
            title: "BCG Matrix",
            content:
              "A portfolio analysis tool that classifies business units into Stars, Cash Cows, Question Marks, and Dogs.",
            example: {
              title: "Real-World Example",
              text: "For Apple: The iPhone is a Cash Cow, the Apple Watch is a Star, new ventures like the Vision Pro are Question Marks, and discontinued products like the iPod would be Dogs.",
            },
            externalLink:
              "https://www.bcg.com/about/our-history/growth-share-matrix",
          },
          {
            title: "Porter's Five Forces Model",
            content:
              "An industry analysis framework that examines competitive rivalry, threat of new entrants, threat of substitutes, buyer power, and supplier power.",
            example: {
              title: "Analogy",
              text: "Porter's Five Forces is like assessing your chances in a video game. You check out the other players (rivalry), see if new players can easily join (new entrants), check if there are other games they could play instead (substitutes), and see how much power the game-makers (suppliers) and the players (buyers) have.",
            },
            externalLink: "https://www.investopedia.com/terms/p/porter.asp",
          },
        ],
      },
      {
        title: "Branding, Consumers, and Products",
        icon: (
          <BrainCircuit
            size={32}
            className="text-violet-600"
          />
        ),
        topics: [
          {
            title: "Strategic Brand Management Process",
            content:
              "The systematic approach to building brand equity through identifying positioning, implementing marketing programs, measuring performance, and sustaining equity.",
            example: {
              title: "Analogy",
              text: "This is like raising a child to have a great reputation. You decide what you want them to be known for (positioning), provide education and experiences (marketing programs), check their report cards (measure performance), and continue to support their growth (sustain equity).",
            },
            externalLink:
              "https://www.brandingmag.com/2015/10/14/what-is-strategic-brand-management/",
          },
          {
            title: "Linking Brand Management to Consumer Behavior",
            content:
              "Brand strategies must align with how consumers think, feel and act, using psychological triggers that influence purchase decisions and brand loyalty.",
            example: {
              title: "Real-World Example",
              text: 'Apple\'s brand management focuses on simplicity, creativity, and being an "outsider," which aligns with the behavior and self-perception of its target consumers who see themselves in the same way.',
            },
            externalLink:
              "https://www.forbes.com/sites/forbesagencycouncil/2021/11/03/the-psychology-of-branding-how-to-create-a-brand-that-lasts/",
          },
          {
            title: "Customer Needs",
            content:
              "Understanding functional needs (basic requirements) and emotional needs (feelings/aspirations) that drive customer purchasing behavior.",
            example: {
              title: "Real-World Example",
              text: "When buying a car, the functional need is transportation. The emotional need might be the feeling of success from owning a luxury car or the feeling of security from owning a safe one.",
            },
            externalLink: "https://hbr.org/2016/09/the-elements-of-value",
          },
          {
            title: "Consumer Decision Making Process",
            content:
              "The 5 stages a consumer typically goes through: Need recognition > Information search > Evaluation of alternatives > Purchase decision > Post-purchase behavior.",
            example: {
              title: "Real-World Example",
              text: "You feel hungry (need), search for nearby restaurants on your phone (information), compare menus and reviews (evaluation), choose one and order (purchase), and then decide if you liked it enough to return (post-purchase).",
            },
            externalLink:
              "https://www.forbes.com/advisor/business/consumer-decision-making-process/",
          },
          {
            title:
              "Influence of Social Media Campaigns on Consumer Buying Behavior",
            content:
              "Social media shapes perceptions through peer reviews, influencer endorsements, and targeted ads that create awareness and desire.",
            example: {
              title: "Real-World Example",
              text: "A beauty brand sponsors an influencer's TikTok video showing them using a new foundation. Their followers see the review, trust the endorsement, and are influenced to buy the product.",
            },
            externalLink:
              "https://www.sproutsocial.com/insights/social-media-influence/",
          },
          {
            title: "Stages of Consumer Interaction",
            content:
              "The three stages are Pre-Purchase (research and consideration), Purchase-Interaction (the buying experience), and Post-Purchase Interaction (usage and feedback).",
            example: {
              title: "Analogy",
              text: "It's like a relationship. Pre-purchase is the dating phase. Purchase is the wedding day. Post-purchase is the actual marriage, where the long-term relationship is built.",
            },
            externalLink:
              "https://www.questionpro.com/blog/customer-journey-mapping/",
          },
          {
            title: "Product Life Cycle Strategies",
            content:
              "The stages a product goes through: Introduction (build awareness), Growth (expand market share), Maturity (defend position), and Decline (revive or discontinue).",
            example: {
              title: "Real-World Example",
              text: "The iPhone went through introduction, rapid growth, and is now in maturity, where Apple defends its position with incremental updates. The iPod is in decline.",
            },
            externalLink:
              "https://www.productplan.com/glossary/product-life-cycle/",
          },
          {
            title: "New Product Development Process",
            content:
              "The process includes idea generation, screening, concept testing, business analysis, product development, test marketing, and commercialization.",
            example: {
              title: "Analogy",
              text: "Developing a new product is like writing a book. You brainstorm ideas, discard the bad ones (screening), write an outline (concept testing), get a publisher contract (business analysis), write the book (development), let a few friends read it (test marketing), and then publish it for the world (commercialization).",
            },
            externalLink:
              "https://www.investopedia.com/terms/n/new-product-development.asp",
          },
          {
            title: "Product",
            content:
              "A tangible good or intangible service that satisfies customer needs, with core, actual and augmented product components.",
            example: {
              title: "Real-World Example",
              text: "When you buy an iPhone: The core product is communication. The actual product is the physical phone. The augmented product includes the warranty, iCloud service, and Apple Store support.",
            },
            externalLink:
              "https://marketing-insider.eu/three-levels-of-a-product/",
          },
          {
            title: "Services & Classification",
            content:
              "Intangible offerings classified by degree of customer involvement, customization level, and skill requirement.",
            example: {
              title: "Real-World Example",
              text: "A haircut is a high-involvement, highly customized service requiring professional skill. Buying a train ticket is a low-involvement, standardized service requiring minimal skill from the provider.",
            },
            externalLink:
              "https://www.yourarticlelibrary.com/services/services-marketing-meaning-and-classification-of-services/22216",
          },
          {
            title: "Pricing Strategies",
            content:
              "Methods include Premium pricing (high quality positioning), Penetration pricing (low initial price), Psychological pricing ($9.99 effect), and Bundle pricing (package deals).",
            example: {
              title: "Real-World Example",
              text: "Apple uses premium pricing for iPhones. A new streaming service might use penetration pricing for the first year. A software company uses bundle pricing by offering a suite of apps for less than the individual cost.",
            },
            externalLink:
              "https://www.forbes.com/advisor/business/pricing-strategies/",
          },
          {
            title: "Pricing Approaches & Objectives",
            content:
              "Pricing can be Cost-based (cover costs plus margin), Competition-based (match rivals), or Value-based (what customers will pay). Objectives can be profit, market share, or survival.",
            example: {
              title: "Real-World Example",
              text: "A generic drug manufacturer uses a cost-based approach. Pepsi uses a competition-based approach against Coke. A luxury brand uses a value-based approach.",
            },
            externalLink:
              "https://www.investopedia.com/terms/p/pricing-strategy.asp",
          },
          {
            title: "Marketing Communications",
            content:
              "The mix of advertising, PR, sales promotion, direct marketing and personal selling used to communicate value to customers.",
            example: {
              title: "Analogy",
              text: 'Marketing communications is the company\'s toolbox for talking to customers. Advertising is the megaphone, PR is getting others to talk about you, sales promotion is the "50% off" sign, and direct marketing is the personal letter in the mail.',
            },
            externalLink:
              "https://www.managementstudyguide.com/marketing-communication.htm",
          },
          {
            title: "Business Strategy & Marketing",
            content:
              "Marketing supports corporate strategy by identifying market opportunities and developing competitive positioning.",
            example: {
              title: "Analogy",
              text: "If the overall business strategy is to be the fastest ship, the marketing strategy is to find the best routes with the strongest winds (market opportunities) and to paint the ship in a way that makes it look fast and desirable (positioning).",
            },
            externalLink: "https://hbr.org/2014/07/what-is-marketing-strategy",
          },
          {
            title: "Distribution Strategy",
            content:
              "Decisions about direct/indirect channels, intensive/selective/exclusive distribution, and physical/digital delivery methods.",
            example: {
              title: "Real-World Example",
              text: "Coca-Cola uses intensive distribution (you can find it everywhere). Rolex uses exclusive distribution (only available at a few authorized dealers). Tesla uses a direct channel (sells from its own website and stores).",
            },
            externalLink: "https://www.shopify.com/blog/distribution-strategy",
          },
          {
            title: "Porters Generic Strategies",
            content:
              "Three strategies to achieve competitive advantage: Cost Leadership (lowest cost producer), Differentiation (unique value proposition), and Focus (niche market specialization).",
            example: {
              title: "Real-World Example",
              text: "Walmart is a Cost Leader. Apple is a Differentiator. A local, independent bookstore that only sells rare sci-fi novels is using a Focus strategy.",
            },
            externalLink:
              "https://www.investopedia.com/terms/p/porters-generic-strategies.asp",
          },
        ],
      },
    ],
  },
  projectManagement: {
    id: "projectManagement",
    title: "Module 4: Project Management",
    description: "Principles of project, operations, and quality management.",
    icon: (
      <Briefcase
        size={40}
        className="text-indigo-500"
      />
    ),
    sections: [
      {
        title: "Foundational Management Concepts",
        icon: (
          <Briefcase
            size={32}
            className="text-indigo-600"
          />
        ),
        topics: [
          {
            title: "Introduction to Operations Management",
            content:
              "Operations management involves planning, organizing, and supervising processes to produce goods and services efficiently. It ensures resources are used effectively to meet customer demands.",
            example: {
              title: "Real-World Example",
              text: "A car factory manager uses operations management to optimize the assembly line, ensuring that parts arrive on time, workers are efficient, and cars are produced at the target rate and quality.",
            },
            externalLink:
              "https://www.investopedia.com/terms/o/operations-management.asp",
          },
          {
            title: "Introduction to Project Management",
            content:
              "Project management is the practice of initiating, planning, executing, and closing projects. It focuses on achieving specific goals within a set timeline and budget.",
            example: {
              title: "Real-World Example",
              text: "Building a new mobile app is a project. The project manager ensures the app is designed, coded, tested, and launched by the deadline and without going over budget.",
            },
            externalLink:
              "https://www.pmi.org/about/learn-about-pmi/what-is-project-management",
          },
          {
            title: "Introduction to Operation Strategies",
            content:
              "Operation strategies are plans that align operational processes with business goals. They focus on improving efficiency, quality, and customer satisfaction.",
            example: {
              title: "Real-World Example",
              text: "A company like Rolex focuses on a high-quality strategy, using the best materials and craftsmanship. In contrast, a brand like Casio might focus on a cost-leadership strategy, optimizing for efficiency and affordability.",
            },
            externalLink:
              "https://www.indeed.com/career-advice/career-development/operations-strategy",
          },
          {
            title: "Introduction to Logistics and Warehousing",
            content:
              "Logistics involves managing the flow of goods from production to consumers, while warehousing focuses on storing products efficiently. Both are critical for supply chain management.",
            example: {
              title: "Real-World Example",
              text: "Amazon's mastery of logistics involves a vast network of warehouses strategically placed to reduce delivery times, coupled with sophisticated software to manage inventory and shipping routes.",
            },
            externalLink:
              "https://www.geodis.com/us/logistics-matters/what-logistics-and-warehousing",
          },
          {
            title: "Stakeholders Perspective on Operation Management",
            content:
              "Stakeholders, including customers, employees, and suppliers, have different expectations from operations. Effective operation management balances these perspectives to achieve organizational goals.",
            example: {
              title: "Analogy",
              text: "An operations manager is like a diplomat. Customers want high quality and low price, employees want good pay and work-life balance, and suppliers want timely payments. The manager must find a solution that keeps all parties reasonably happy.",
            },
            externalLink:
              "https://www.managementstudyguide.com/stakeholders-in-operations-management.htm",
          },
          {
            title: "Inputs and Outputs in Operation Management",
            content:
              "Inputs are resources like materials, labor, and technology used in production. Outputs are the finished goods or services delivered to customers. Managing inputs and outputs efficiently is key to operational success.",
            example: {
              title: "Analogy",
              text: "A bakery's inputs are flour, sugar, an oven, and a baker. The output is a cake. Operations management is the recipe and process that turns those inputs into a perfect cake with minimal wasted flour.",
            },
            externalLink:
              "https://www.cliffsnotes.com/study-guides/principles-of-management/operations-management/the-transformation-process",
          },
          {
            title: "Process Design and Product Design",
            content:
              "Process design involves creating efficient workflows for production, while product design focuses on developing products that meet customer needs. Both are essential for operational excellence.",
            example: {
              title: "Real-World Example",
              text: "Product design is deciding to make a smartphone with a folding screen. Process design is figuring out the exact assembly line steps, machinery, and quality checks needed to build that folding screen without defects.",
            },
            externalLink:
              "https://www.cleverism.com/product-process-design-development/",
          },
        ],
      },
      {
        title: "Project Management Techniques",
        icon: (
          <Target
            size={32}
            className="text-red-600"
          />
        ),
        topics: [
          {
            title: "Project Risk Management",
            content:
              "Project risk management identifies, assesses, and mitigates risks that could impact project success. It ensures projects are completed on time and within budget.",
            example: {
              title: "Real-World Example",
              text: "In a construction project, a potential risk is a delay in material delivery. The mitigation plan could be to identify an alternative, local supplier as a backup.",
            },
            externalLink:
              "https://www.pmi.org/learning/library/risk-management-project-success-7075",
          },
          {
            title: "Project Evaluation and Review Technique (PERT)",
            content:
              "This technique involves analyzing project tasks, timelines, and dependencies to ensure efficient execution. It helps in identifying critical paths and potential delays.",
            example: {
              title: "Analogy",
              text: "PERT is like creating a roadmap for a road trip with multiple stops. It helps you figure out the most efficient route and estimates your arrival time, accounting for potential traffic (delays).",
            },
            externalLink: "https://www.investopedia.com/terms/p/pert-chart.asp",
          },
          {
            title: "Project Communication Management",
            content:
              "Effective communication ensures all stakeholders are informed and aligned throughout the project lifecycle. It minimizes misunderstandings and keeps the project on track.",
            example: {
              title: "Analogy",
              text: "Project communication is the nervous system of a project. It transmits critical information between the brain (project manager), the limbs (team members), and the outside world (stakeholders) to ensure everything is coordinated.",
            },
            externalLink:
              "https://www.pmi.org/learning/library/effective-communication-management-projects-6493",
          },
          {
            title: "Project Quality Management",
            content:
              "Quality management ensures project deliverables meet the required standards. It involves planning, assurance, and control to achieve high-quality outcomes.",
            example: {
              title: "Real-World Example",
              text: "When building a new software application, the quality management plan would include steps for code reviews, automated testing, and user acceptance testing to ensure the final product is bug-free and meets user expectations.",
            },
            externalLink:
              "https://www.wrike.com/project-management-guide/faq/what-is-quality-management-in-project-management/",
          },
          {
            title: "Earned Value Management (EVM)",
            content:
              "Earned value management tracks project performance by comparing planned work, actual progress, and costs. It helps in identifying deviations and taking corrective actions.",
            example: {
              title: "Analogy",
              text: 'EVM is like a health tracker for your project. It doesn\'t just tell you how much time or money you\'ve spent; it tells you if you\'re getting the expected results for that investment, indicating if your project is "healthy" or "unhealthy".',
            },
            externalLink:
              "https://www.pmi.org/learning/library/earned-value-management-systems-analysis-8026",
          },
          {
            title: "Project Portfolio Management",
            content:
              "This involves managing multiple projects to align with organizational goals. It ensures optimal resource allocation, prioritizes high-value projects, and balances risk and return.",
            example: {
              title: "Analogy",
              text: "Project Portfolio Management is like being a stock market investor. You don't put all your money into one stock; you build a balanced portfolio of different projects (some high-risk/high-reward, some stable) that collectively achieve your financial goals.",
            },
            externalLink:
              "https://www.investopedia.com/terms/p/project-portfolio-management-ppm.asp",
          },
        ],
      },
      {
        title: "Quality & Process Improvement",
        icon: (
          <CheckSquare
            size={32}
            className="text-green-600"
          />
        ),
        topics: [
          {
            title: "Operation Management and Quality",
            content:
              "Operation management ensures efficient production and delivery of goods/services while maintaining high quality. It focuses on optimizing processes to meet customer expectations.",
            example: {
              title: "Real-World Example",
              text: "A fast-food chain like McDonald's uses strict operations management to ensure that a Big Mac has the same quality and is made with the same efficiency in any of its restaurants worldwide.",
            },
            externalLink:
              "https://www.asq.org/quality-resources/quality-management",
          },
          {
            title: "Impact of Total Quality Management in Operation",
            content:
              "Total Quality Management (TQM) enhances operational efficiency by reducing errors and waste. It involves everyone in the organization, fostering a culture of continuous improvement and customer satisfaction.",
            example: {
              title: "Real-World Example",
              text: "A luxury hotel chain like the Ritz-Carlton uses TQM by empowering every employee—from front desk to housekeeping—to resolve guest issues immediately and continuously improve the guest experience.",
            },
            externalLink:
              "https://asq.org/quality-resources/total-quality-management",
          },
          {
            title: "Tools in Total Quality Management",
            content:
              "Common tools include flowcharts (to map processes), Pareto charts (to identify key issues), and control charts (to monitor process stability). These tools help in analyzing and improving quality.",
            example: {
              title: "Analogy",
              text: 'TQM tools are like a doctor\'s diagnostic kit. A flowchart is like an X-ray of a process, a Pareto chart identifies the "biggest" health problems, and a control chart is like a heart monitor, checking for stability.',
            },
            externalLink: "https://asq.org/quality-resources/quality-tools",
          },
          {
            title: "The Fishbone Effect",
            content:
              "Also known as the Ishikawa diagram, it helps identify root causes of problems by categorizing causes into branches like methods, materials, manpower, and machinery. It’s useful for problem-solving and process improvement.",
            example: {
              title: "Analogy",
              text: 'A Fishbone diagram is like being a detective. The "head" of the fish is the problem (e.g., "the cake is burnt"), and the "bones" are the potential suspects you investigate (e.g., oven temperature, ingredients, baker\'s skill).',
            },
            externalLink: "https://www.whatissixsigma.net/fishbone-diagram/",
          },
          {
            title: "Value Engineering",
            content:
              "A systematic approach to improve product value by analyzing functions and reducing costs without compromising quality. It focuses on maximizing efficiency and customer satisfaction.",
            example: {
              title: "Real-World Example",
              text: "An automaker might use value engineering to discover that using a slightly different, cheaper, but equally strong type of steel for a car's frame maintains safety (function) while reducing production cost, thus increasing value.",
            },
            externalLink:
              "https://www.investopedia.com/terms/v/value-engineering.asp",
          },
          {
            title: "Failure Modes and Effect Analysis (FMEA)",
            content:
              "FMEA is a proactive method to identify potential failures in a process, assess their impact, and prioritize actions to mitigate risks. It’s widely used in industries to ensure reliability and safety.",
            example: {
              title: "Real-World Example",
              text: "Before manufacturing a new car airbag, engineers use FMEA to identify every possible way it could fail (e.g., not deploying, deploying late) and design countermeasures to prevent those failures.",
            },
            externalLink: "https://asq.org/quality-resources/fmea",
          },
          {
            title: "Introduction to Six Sigma",
            content:
              "Six Sigma is a data-driven methodology aimed at reducing defects and improving processes. It uses the DMAIC framework (Define, Measure, Analyze, Improve, Control) to achieve near-perfect quality.",
            example: {
              title: "Real-World Example",
              text: "Motorola, a pioneer of Six Sigma, used it to reduce defects in their manufacturing lines to fewer than 3.4 defects per million opportunities, drastically improving product quality and saving billions.",
            },
            externalLink: "https://www.investopedia.com/terms/s/six-sigma.asp",
          },
          {
            title: "Introduction to Six Sigma in Projects",
            content:
              "Six Sigma principles are applied in project management to minimize errors, improve efficiency, and ensure project success. It helps in delivering high-quality results within deadlines.",
            example: {
              title: "Analogy",
              text: "Applying Six Sigma to a project is like being a world-class archer. You don't just aim for the target; you use data and a precise method (DMAIC) to ensure almost every arrow hits the exact center of the bullseye (project goals).",
            },
            externalLink:
              "https://www.project-management-skills.com/six-sigma-in-project-management.html",
          },
        ],
      },
      {
        title: "Lean Operations & Supply Chain",
        icon: (
          <Truck
            size={32}
            className="text-purple-600"
          />
        ),
        topics: [
          {
            title: "Lean Management",
            content:
              "Lean management focuses on eliminating waste (like overproduction, waiting time, and defects) and optimizing processes to deliver maximum value to customers. It emphasizes continuous improvement.",
            example: {
              title: "Real-World Example",
              text: "The famous Toyota Production System is a prime example of Lean, focusing on producing only what is needed, when it is needed, with minimal waste.",
            },
            externalLink: "https://www.lean.org/whats-lean/",
          },
          {
            title: "Just in Time Inventory",
            content:
              "A strategy where materials are ordered and received only when needed in the production process. It reduces inventory costs and minimizes waste, improving overall efficiency.",
            example: {
              title: "Real-World Example",
              text: 'A Dell computer factory doesn\'t store thousands of hard drives. It orders them to arrive "just in time" to be installed in the computers being built that day, reducing storage costs and waste.',
            },
            externalLink: "https://www.investopedia.com/terms/j/jit.asp",
          },
          {
            title: "Towards a Pull System",
            content:
              "A pull system is a production approach where work is initiated based on actual demand rather than forecasts. It reduces overproduction, inventory costs, and waste, making processes more responsive.",
            example: {
              title: "Analogy",
              text: 'A traditional "push" system is a buffet where cooks make heaps of food hoping people will eat it. A "pull" system is a restaurant where the kitchen only starts cooking your meal after you place your order.',
            },
            externalLink: "https://www.investopedia.com/terms/p/pullsystem.asp",
          },
          {
            title: "The Aspect of Continuous Improvement",
            content:
              "Continuous improvement is an ongoing effort to enhance products, services, or processes. It involves both incremental changes and breakthrough innovations to achieve long-term success.",
            example: {
              title: "Analogy",
              text: 'Continuous improvement, or "Kaizen," is like a fitness journey. It\'s not about one massive workout, but about the small, consistent efforts every day—like taking the stairs or adding one more rep—that lead to major results over time.',
            },
            externalLink:
              "https://asq.org/quality-resources/continuous-improvement",
          },
          {
            title: "Operations Management and Supply Chain",
            content:
              "Operations management coordinates production processes while supply chain management oversees the flow of goods from suppliers to customers. Together they ensure efficient delivery of products/services.",
            example: {
              title: "Analogy",
              text: "Operations management is the kitchen staff perfectly cooking the meal. Supply chain management is ensuring the fresh ingredients arrive on time and that the waiter delivers the hot meal to the right table efficiently.",
            },
            externalLink: "https://www.ibm.com/topics/supply-chain-management",
          },
          {
            title: "The Goal of Supply Chain Management",
            content:
              "The main objective is to maximize customer value while minimizing costs. This involves optimizing logistics, inventory, and information flow across the entire supply network.",
            example: {
              title: "Real-World Example",
              text: "Zara's supply chain goal is speed and responsiveness. They optimize their entire network to get new designs from the runway to the store in weeks, maximizing value for fashion-conscious customers.",
            },
            externalLink:
              "https://www.oracle.com/scm/what-is-supply-chain-management/",
          },
          {
            title: "Uncertainty in Supply and Demand",
            content:
              "Supply chains face unpredictability in both supply (production delays) and demand (changing customer needs). Effective strategies include maintaining buffer stock and flexible production.",
            example: {
              title: "Analogy",
              text: "Managing supply chain uncertainty is like planning a picnic. You don't know if it will rain (demand uncertainty) or if there will be traffic (supply uncertainty), so you bring an umbrella (buffer stock) and have a backup location (flexible production).",
            },
            externalLink: "https://hbr.org/2004/05/the-triple-a-supply-chain",
          },
          {
            title: "Independent and Dependent Demand",
            content:
              "Independent demand comes from end customers (finished products), while dependent demand relates to components needed for production. Each requires different inventory management approaches.",
            example: {
              title: "Real-World Example",
              text: "The demand for a finished car is independent. The demand for the four tires and one engine needed to build that car is dependent on the number of cars being made.",
            },
            externalLink:
              "https://www.investopedia.com/terms/i/independent-demand.asp",
          },
          {
            title: "Factors Influencing Demand Forecasting",
            content:
              "Key factors include historical sales data, market trends, economic conditions, and competitor actions. Accurate forecasting helps optimize inventory and production planning.",
            example: {
              title: "Real-World Example",
              text: "An ice cream company forecasts summer demand based on last year's sales, current heatwave trends, the state of the economy (are people buying premium treats?), and whether a new competitor has opened nearby.",
            },
            externalLink:
              "https://www.netsuite.com/portal/resource/articles/inventory-management/demand-forecasting.shtml",
          },
          {
            title: "The Use of Material Requirement Planning (MRP)",
            content:
              "MRP systems calculate needed materials and schedule production based on demand forecasts. This minimizes inventory costs while ensuring materials are available when needed.",
            example: {
              title: "Analogy",
              text: "An MRP system is like a smart shopping list for a factory. Based on your meal plan (production schedule), it automatically calculates that you need to buy two pounds of flour and one dozen eggs, and tells you exactly when to buy them.",
            },
            externalLink: "https://www.oracle.com/erp/what-is-mrp/",
          },
          {
            title: "The Management of Risk in Supply Chain",
            content:
              "Risk management identifies potential disruptions (natural disasters, supplier issues) and develops contingency plans like alternative suppliers or safety stock.",
            example: {
              title: "Real-World Example",
              text: "After the 2011 tsunami in Japan disrupted many electronics suppliers, companies like Apple diversified their suppliers across different countries to manage the risk of a single geographic event halting their entire production.",
            },
            externalLink:
              "https://www.mckinsey.com/capabilities/operations/our-insights/a-new-approach-to-supply-chain-risk-management",
          },
          {
            title: "Management Information Systems (MIS)",
            content:
              "MIS collects and analyzes business data to support decision-making. It helps managers monitor operations and improve efficiency through data-driven insights.",
            example: {
              title: "Analogy",
              text: "An MIS is like the dashboard of a car. It gathers data from the engine, wheels, and fuel tank and presents it as simple, actionable information (speed, fuel level, warning lights) for the driver (manager) to make decisions.",
            },
            externalLink: "https://www.investopedia.com/terms/m/mis.asp",
          },
          {
            title: "The Five Elements of Management Information System",
            content:
              "1. Hardware (computers/devices) 2. Software (applications) 3. Data (information processed) 4. Procedures (usage guidelines) 5. People (users and IT staff)",
            example: {
              title: "Analogy",
              text: "Think of a restaurant kitchen. Hardware is the ovens and stoves. Software is the recipe book. Data is the customer's order. Procedures are the cooking steps. People are the chefs and staff who make it all work.",
            },
            externalLink:
              "https://www.indeed.com/career-advice/career-development/elements-of-management-information-system",
          },
          {
            title: "Enterprise Resource Planning (ERP)",
            content:
              "ERP integrates all business functions (finance, HR, operations) into one system. This improves coordination, reduces errors, and provides real-time data across departments.",
            example: {
              title: "Analogy",
              text: "An ERP system is like the central nervous system of a company. It connects all the different parts (finance, HR, sales) and allows them to communicate and work together seamlessly from a single source of information.",
            },
            externalLink: "https://www.sap.com/products/erp/what-is-erp.html",
          },
          {
            title: "The Role of a Project Manager",
            content:
              "Project managers plan, execute, and close projects successfully. They coordinate teams, manage resources, and ensure projects meet objectives on time and within budget.",
            example: {
              title: "Analogy",
              text: "A project manager is like the director of a movie. They don't operate the camera or act, but they are responsible for making sure the entire production—from script to final cut—comes together successfully on schedule and budget.",
            },
            externalLink:
              "https://www.pmi.org/about/learn-about-pmi/what-is-project-management",
          },
          {
            title: "Knowledge Domains in Project Management",
            content:
              "Key areas include scope, time, cost, quality, risk, and stakeholder management. Each domain has specific processes and tools for effective project execution.",
            example: {
              title: "Analogy",
              text: "The knowledge domains are the different subjects a project manager must master. Scope is knowing what to build, Time is the schedule, Cost is the budget, Quality is making sure it's good, and so on. A great PM is an expert in all of them.",
            },
            externalLink:
              "https://www.project-management.com/what-are-the-10-knowledge-areas-of-project-management/",
          },
          {
            title: "Project Stakeholder Management",
            content:
              "This involves identifying all stakeholders, understanding their needs, and maintaining engagement throughout the project to ensure support and alignment.",
            example: {
              title: "Real-World Example",
              text: "For a new public park project, stakeholders include local residents, the city council, construction companies, and environmental groups. The project manager must communicate with all of them to manage their expectations and ensure the project succeeds.",
            },
            externalLink:
              "https://www.pmi.org/learning/library/stakeholder-management-strategy-basics-6 stakeholder-management",
          },
          {
            title: "Work Breakdown Structure",
            content:
              "WBS breaks projects into smaller, manageable tasks. This hierarchical structure helps in planning, assigning responsibilities, and tracking progress.",
            example: {
              title: "Analogy",
              text: 'A WBS is like the recipe for a complex dish. It breaks down the final meal ("Bake a Cake") into major steps ("Mix Batter," "Bake"), and those steps into smaller tasks ("Get eggs," "Preheat oven").',
            },
            externalLink:
              "https://asana.com/resources/work-breakdown-structure",
          },
          {
            title: "Project Scope Management",
            content:
              "Defines and controls what's included/excluded in a project. Prevents scope creep by setting clear boundaries and requirements from the start.",
            example: {
              title: "Analogy",
              text: "Scope management is like putting a fence around your construction site. It clearly defines what you are going to build inside the fence and prevents people from asking you to also build a shed next door (scope creep) using the same budget.",
            },
            externalLink:
              "https://www.wrike.com/project-management-guide/faq/what-is-scope-management-in-project-management/",
          },
        ],
      },
    ],
  },
  blockchain: {
    id: "blockchain",
    title: "Module 5: Blockchain Fundamentals",
    description:
      "Core concepts of blockchain, cryptography, and decentralized tech.",
    icon: (
      <Boxes
        size={40}
        className="text-blue-500"
      />
    ),
    sections: [
      {
        title: "Core Concepts & History",
        icon: (
          <Boxes
            size={32}
            className="text-blue-600"
          />
        ),
        topics: [
          {
            title: "Introduction to Blockchain",
            content:
              "Blockchain is a decentralized digital ledger technology that records transactions across multiple computers. It enables secure, transparent and tamper-proof record keeping without central authority.",
            example: {
              title: "Analogy",
              text: "Imagine a shared digital notebook that, once written in, can never be erased. Every entry is linked to the one before it, creating an unbreakable chain of records that everyone in the group trusts implicitly.",
            },
            externalLink: "https://www.ibm.com/topics/what-is-blockchain",
          },
          {
            title: "History of Blockchain",
            content:
              "Blockchain technology emerged in 2008 with Bitcoin's whitepaper by Satoshi Nakamoto. It evolved from cryptographic concepts dating back to the 1990s, with major developments occurring after Bitcoin's 2009 launch.",
            example: {
              title: "Real-World Example",
              text: "The 2008 financial crisis created deep distrust in traditional financial institutions, setting the stage for Satoshi Nakamoto to publish the Bitcoin whitepaper, proposing a system for peer-to-peer electronic cash without needing a bank.",
            },
            externalLink: "https://bitcoin.org/bitcoin.pdf",
          },
          {
            title: "Definition of Blockchain",
            content:
              "A blockchain is a growing list of records (blocks) linked using cryptography. Each block contains transaction data, timestamp, and cryptographic hash of the previous block, forming an immutable chain.",
            example: {
              title: "Analogy",
              text: "Think of each block as a page in a book. Each page has a unique fingerprint (hash) of its contents and also includes the fingerprint of the previous page. If you try to change a page, its fingerprint changes, which breaks the link to the next page, revealing the tamper.",
            },
            externalLink: "https://ethereum.org/en/developers/docs/blocks/",
          },
          {
            title: "Transaction Flow in Blockchain",
            content:
              "The flow is: 1) Transaction initiation, 2) Verification by network nodes, 3) Grouping into a block, 4) Block validation through consensus, 5) Adding to chain, 6) Network updating.",
            example: {
              title: "Analogy",
              text: "It's like a class project. You suggest an idea (initiation), the class checks if it's good (verification), the teacher groups good ideas onto a page (block), the whole class votes to approve the page (consensus), it's added to the project binder (chain), and everyone gets a copy.",
            },
            externalLink: "https://www.investopedia.com/terms/b/blockchain.asp",
          },
          {
            title: "Attributes of Blockchain",
            content:
              "Key attributes include Decentralization (no single controller), Immutability (data cannot be altered retroactively), Transparency (all participants can view transaction history), Security (cryptographic techniques protect against hacking), and Consensus-based validation.",
            example: {
              title: "Analogy",
              text: "Think of it as a shared public diary. Everyone has a copy (Decentralization). Once something is written, it can't be erased (Immutability). Everyone can read the entries (Transparency). The diary is written in a secret code (Security), and a new entry is only added if everyone agrees it's true (Consensus).",
            },
            externalLink:
              "https://www.coursera.org/articles/blockchain-technology",
          },
          {
            title: "Characteristics of Blockchain",
            content:
              "Key characteristics are Distributed ledger technology (shared across nodes), Peer-to-peer network (no intermediaries), Consensus mechanisms (rules like PoW/PoS), Smart contract capability, and Permissioned/permissionless variants.",
            example: {
              title: "Real-World Example",
              text: "Bitcoin is a permissionless network with a PoW consensus mechanism. Hyperledger Fabric is a permissioned network used by businesses, often with a different consensus mechanism, that supports smart contracts (chaincode).",
            },
            externalLink:
              "https://www.techtarget.com/searchcio/definition/blockchain",
          },
          {
            title: "Types of Blockchain Network",
            content:
              "Types are Public (open to all like Bitcoin), Private (restricted access, typically for enterprises), Consortium (controlled by a group of organizations), and Hybrid (combines features of public and private chains).",
            example: {
              title: "Analogy",
              text: "A public chain is the internet. A private chain is a company's internal intranet. A consortium chain is a shared network between a few partner companies, like a secure extranet.",
            },
            externalLink:
              "https://www.investopedia.com/terms/p/permissioned-blockchains.asp",
          },
          {
            title: "Blockchain Evolution",
            content:
              "Phase 1: Cryptocurrencies (Bitcoin). Phase 2: Smart Contracts (Ethereum). Phase 3: Enterprise adoption (industry integration). Phase 4: Web3 (decentralized apps and user-owned data).",
            example: {
              title: "Analogy",
              text: "It's like the evolution of the web. Phase 1 was basic text websites (Bitcoin). Phase 2 was interactive sites with e-commerce (Ethereum). Phase 3 was businesses using the web for operations (Enterprise). Phase 4 is the modern social, user-driven internet (Web3).",
            },
            externalLink:
              "https://hbr.org/2022/05/how-blockchain-is-changing-money-and-business",
          },
        ],
      },
      {
        title: "Cryptography, Wallets & Transactions",
        icon: (
          <Lock
            size={32}
            className="text-green-600"
          />
        ),
        topics: [
          {
            title: "What is Cryptography I & II",
            content:
              "Cryptography is the practice of secure communication through encryption. Modern cryptography uses complex algorithms like SHA-256 and ECDSA to convert data into secure formats that are extremely difficult to reverse-engineer without proper keys.",
            example: {
              title: "Real-World Example",
              text: "End-to-end encrypted messaging apps like Signal use cryptography to scramble your messages, ensuring only you and the recipient have the keys to unscramble and read them.",
            },
            externalLink:
              "https://www.kaspersky.com/resource-center/definitions/what-is-cryptography",
          },
          {
            title: "Cryptography in Blockchain I & II",
            content:
              "Blockchain uses cryptography for securing wallet addresses (public/private keys), creating digital signatures (proving authenticity), hashing block data (creating unique fingerprints), and maintaining chain integrity by linking blocks with hashes.",
            example: {
              title: "Analogy",
              text: 'Cryptography provides the "trust" in blockchain. Your private key is your unique signature, hashing is a tamper-proof seal on every block, and linking those seals together creates an unbreakable chain of evidence.',
            },
            externalLink:
              "https://www.geeksforgeeks.org/cryptography-in-blockchain/",
          },
          {
            title: "What are Wallets?",
            content:
              "Wallets are software or hardware tools that manage private and public keys. They enable users to send, receive, and store blockchain assets like cryptocurrencies.",
            example: {
              title: "Analogy",
              text: "A crypto wallet doesn't hold your money like a physical wallet. It holds your keys. Your public key is like your bank account number you share to receive money. Your private key is like your secret PIN you use to authorize sending money.",
            },
            externalLink: "https://ethereum.org/en/wallets/",
          },
          {
            title: "What is an Account Address",
            content:
              "An account address is a unique string (public key derivative) identifying a user’s wallet on the blockchain. It’s used to send or receive transactions securely.",
            example: {
              title: "Real-World Example",
              text: "An Ethereum address looks like this: `0x1A...c3dE`. It functions like an email address for money; you can share it publicly for people to send you assets.",
            },
            externalLink:
              "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-address",
          },
          {
            title: "UTXO Accounting Method",
            content:
              "Unspent Transaction Output (UTXO) tracks unspent transaction outputs as the basis for new transactions. Each UTXO is spent entirely, with change returned as a new UTXO (e.g., in Bitcoin).",
            example: {
              title: "Analogy",
              text: 'The UTXO model is like paying with cash. If a coffee costs $3 and you pay with a $5 bill, you "spend" the entire $5 bill and get $2 back as a new "unspent" piece of cash (change).',
            },
            externalLink: "https://www.investopedia.com/terms/u/utxo.asp",
          },
          {
            title: "Balances Accounting Method",
            content:
              "The account-based model tracks balances directly, like a bank account (e.g., in Ethereum). Transactions deduct from the sender’s balance and add to the recipient’s, with smart contracts often involved.",
            example: {
              title: "Analogy",
              text: 'The account model is like using a debit card. The system simply checks your total balance, subtracts the transaction amount, and adds it to the recipient\'s balance. There are no individual "bills" involved.',
            },
            externalLink: "https://ethereum.org/en/developers/docs/accounts/",
          },
          {
            title: "Types of Wallets",
            content:
              "Hot wallets are online and convenient but less secure. Cold wallets are offline and more secure. Custodial wallets are managed by third parties, while non-custodial wallets give you full control.",
            example: {
              title: "Analogy",
              text: "A hot wallet is like the cash in your pocket (convenient, but risky). A cold wallet is like money in a safe at home (secure, but less accessible). A custodial wallet is like money in a bank (a third party holds it for you).",
            },
            externalLink:
              "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet",
          },
        ],
      },
      {
        title: "Network, Consensus & Governance",
        icon: (
          <Cpu
            size={32}
            className="text-red-600"
          />
        ),
        topics: [
          {
            title: "What is a Blockchain Network?",
            content:
              "A blockchain network is a decentralized system of computers (nodes) that collectively maintain a shared ledger. It ensures secure, transparent, and tamper-proof record-keeping without a central authority.",
            example: {
              title: "Analogy",
              text: "A blockchain network is like a neighborhood watch program where every resident has a copy of the logbook of events. To add a new event, a majority of residents must agree it happened exactly as described.",
            },
            externalLink: "https://www.ibm.com/topics/blockchain-network",
          },
          {
            title: "Classification of Nodes I & II",
            content:
              "Nodes can be Full (store entire blockchain), Light (store partial data), Archival (store full history), Mining (solve puzzles in PoW), Staking (validate in PoS), or Masternodes (provide extra services).",
            example: {
              title: "Analogy",
              text: "In a library, a full node is the head librarian with a copy of every book. A light node is a patron with a library card and access to the catalog. A mining/staking node is the person operating the printing press to create new pages.",
            },
            externalLink:
              "https://www.quicknode.com/guides/infrastructure/blockchain-nodes/types-of-nodes-in-a-blockchain-network",
          },
          {
            title: "What is Consensus Mechanism",
            content:
              "A consensus mechanism is a set of rules that allows blockchain nodes to agree on the validity of transactions and the state of the ledger, ensuring trust in a decentralized system.",
            example: {
              title: "Analogy",
              text: "A consensus mechanism is the voting system used by a group of people to agree on a decision without a single leader. It could be majority rule (like PoW) or another agreed-upon method.",
            },
            externalLink:
              "https://ethereum.org/en/developers/docs/consensus-mechanisms/",
          },
          {
            title: "Why Consensus Mechanism is Needed",
            content:
              "It prevents double-spending, maintains ledger integrity across all nodes, and enables trustless agreement without a central authority.",
            example: {
              title: "Analogy",
              text: "Without consensus, it would be like a shared bank account where everyone could write checks without the balance being updated. A consensus mechanism ensures everyone agrees on the current balance before a new check is cleared.",
            },
            externalLink:
              "https://www.investopedia.com/terms/c/consensus-mechanism-cryptocurrency.asp",
          },
          {
            title: "Types of Consensus Mechanism I & II",
            content:
              "Common types are Proof of Work (PoW), Proof of Stake (PoS), Delegated PoS (DPoS), Practical Byzantine Fault Tolerance (PBFT), Proof of Authority (PoA), and Proof of Elapsed Time (PoET).",
            example: {
              title: "PoW vs. PoS",
              text: "PoW is like a race where the first person to solve a hard puzzle wins. PoS is like a lottery where the more tickets you own (staked coins), the higher your chance of winning.",
            },
            externalLink:
              "https://www.forbes.com/advisor/investing/cryptocurrency/proof-of-work-vs-proof-of-stake/",
          },
          {
            title: "Genesis Block",
            content:
              "The genesis block is the first block in a blockchain, created at the network’s launch. It has no previous block reference and often contains initial parameters or tokens.",
            example: {
              title: "Analogy",
              text: "The Genesis Block is like the first page of a new, empty book. It has no page before it and might contain a dedication or preface (initial parameters) from the author.",
            },
            externalLink:
              "https://www.investopedia.com/terms/g/genesis-block.asp",
          },
          {
            title: "Forking in Blockchain",
            content:
              "Forking occurs when a blockchain splits into two or more separate chains due to protocol changes or disagreements, leading to different transaction histories.",
            example: {
              title: "Analogy",
              text: "A hard fork is like a language splitting into two new dialects; speakers of the old language can't understand the new one. A soft fork is like adding new slang; old speakers might not use it, but they can still understand the conversation.",
            },
            externalLink:
              "https://www.investopedia.com/terms/f/fork-blockchain.asp",
          },
          {
            title: "Types of Mining",
            content:
              "Solo mining (individual), Pool mining (combined resources), Cloud mining (renting power), and ASIC mining (using specialized hardware).",
            example: {
              title: "Analogy",
              text: "Mining is like fishing. Solo mining is one person with one rod. Pool mining is a group on a big boat sharing the catch. Cloud mining is paying to use someone else's high-tech boat. ASIC mining is using a custom-built, highly efficient fishing trawler.",
            },
            externalLink:
              "https://www.investopedia.com/terms/c/cryptocurrency-mining.asp",
          },
        ],
      },
      {
        title: "Ethereum & Hyperledger",
        icon: (
          <FileJson
            size={32}
            className="text-violet-600"
          />
        ),
        topics: [
          {
            title: "Evolution of Ethereum",
            content:
              "Ethereum launched in 2015 by Vitalik Buterin, introducing smart contracts. It transitioned from Proof of Work to Proof of Stake in 2022 (The Merge), improving scalability and energy efficiency.",
            example: {
              title: "Real-World Example",
              text: "The Merge was a historic event in crypto, comparable to replacing the engine of a running airplane mid-flight. It successfully moved Ethereum to a more sustainable PoS consensus mechanism.",
            },
            externalLink: "https://ethereum.org/en/history/",
          },
          {
            title: "Components of Ethereum",
            content:
              "Key components are the Ethereum Virtual Machine (EVM) for executing smart contracts, Ether (ETH) as the native currency for gas fees, and user-controlled (EOA) or contract accounts.",
            example: {
              title: "Analogy",
              text: 'The EVM is the "operating system" for Ethereum. Smart contracts are the "apps" that run on it. ETH is the "fuel" needed to run those apps.',
            },
            externalLink:
              "https://ethereum.org/en/developers/docs/intro-to-ethereum/",
          },
          {
            title: "Types of Transaction Part I & II",
            content:
              "Transactions can be simple ETH transfers, contract deployments, or contract interactions. They include gas fees, a nonce (counter), a data field for instructions, and a digital signature.",
            example: {
              title: "Analogy",
              text: "A simple transaction is like sending a letter. A contract deployment is like filing the paperwork to create a new company. A contract interaction is like using one of that company's services.",
            },
            externalLink:
              "https://ethereum.org/en/developers/docs/transactions/",
          },
          {
            title: "Ethereum Networks",
            content:
              "Networks include the Mainnet (primary public chain), Testnets (like Sepolia, for testing), Private networks (for enterprise), and Layer 2s (scaling solutions like Arbitrum or Optimism).",
            example: {
              title: "Analogy",
              text: "Mainnet is the real highway with real cars. A Testnet is a closed race track where you can test your car without consequences. A Layer 2 is like a high-speed express lane built on top of the main highway.",
            },
            externalLink: "https://ethereum.org/en/developers/docs/networks/",
          },
          {
            title: "Decentralized Applications (DApps)",
            content:
              "DApps are applications running on blockchain with smart contracts. They are open-source, decentralized, and often incentivize users with tokens (e.g., Uniswap, Aave).",
            example: {
              title: "Real-World Example",
              text: "Uniswap is a DApp that functions as a decentralized crypto exchange. Instead of a central company matching buyers and sellers, it uses smart contracts and user-provided liquidity pools.",
            },
            externalLink: "https://ethereum.org/en/dapps/",
          },
          {
            title: "Token Protocols",
            content:
              "These are standards for tokens, like ERC-20 (fungible), ERC-721 (NFTs), ERC-1155 (multi-token), and various standards for account abstraction (ERC-4337) and other functionalities.",
            example: {
              title: "Analogy",
              text: "Token protocols are like USB standards. Because everyone agrees on the standard (e.g., USB-C), any device can connect to any port, ensuring interoperability. Similarly, any ERC-20 token can work with any wallet that supports the standard.",
            },
            externalLink:
              "https://ethereum.org/en/developers/docs/standards/tokens/",
          },
          {
            title: "Hyperledger Foundation",
            content:
              "An open-source collaborative project under the Linux Foundation, focused on developing enterprise-grade blockchain frameworks and tools for industries like finance and supply chain.",
            example: {
              title: "Analogy",
              text: "If Ethereum is like the public internet (a global, permissionless system), Hyperledger is like the tools to build a secure, private corporate intranet for a specific group of companies.",
            },
            externalLink: "https://www.hyperledger.org/about",
          },
          {
            title: "Hyperledger Projects",
            content:
              "Projects include Fabric (modular framework), Besu (Ethereum-compatible), Sawtooth (scalable), and Indy (decentralized identity).",
            example: {
              title: "Real-World Example",
              text: "Hyperledger Fabric is used by major companies like IBM for its Food Trust network and Maersk for its TradeLens shipping platform, showcasing its enterprise focus.",
            },
            externalLink: "https://www.hyperledger.org/projects",
          },
          {
            title: "Hyperledger Fabric Framework & Components",
            content:
              "A permissioned platform with Peers (host ledger), Orderers (ensure consensus), Channels (private sub-networks), and a Certificate Authority (manages identities).",
            example: {
              title: "Analogy",
              text: "Fabric is like a private business club. The Certificate Authority is the bouncer checking IDs at the door. Peers are the members with a copy of the club's rulebook. Channels are the private rooms where specific groups of members can have confidential meetings.",
            },
            externalLink:
              "https://hyperledger-fabric.readthedocs.io/en/release-2.2/what-is-fabric.html",
          },
          {
            title: "Fabric Transaction Flow",
            content:
              "The flow is: 1) Client proposes a transaction to endorsing peers, 2) Peers simulate and sign it (Endorsement), 3) Transaction is sent to Orderers, 4) Orderers create a block, 5) Peers validate and commit the block.",
            example: {
              title: "Analogy",
              text: "It's like getting a document approved in a corporation. You draft it (proposal), get signatures from relevant department heads (endorsement), send it to the main office to be officially sequenced (ordering), and then it's distributed to all departments to be added to their official records (validation).",
            },
            externalLink:
              "https://hyperledger-fabric.readthedocs.io/en/release-2.2/txflow.html",
          },
        ],
      },
    ],
  },
  blockchainApplications: {
    id: "blockchainApplications",
    title: "Module 6: Application of Blockchain",
    description: "Exploring real-world use cases and enterprise solutions.",
    icon: (
      <AppWindow
        size={40}
        className="text-cyan-500"
      />
    ),
    sections: [
      {
        title: "Core Concepts & Financial Applications",
        icon: (
          <DollarSign
            size={32}
            className="text-cyan-600"
          />
        ),
        topics: [
          {
            title: "Demystifying Blockchain",
            content:
              "A decentralized ledger technology that uses a chain of blocks, each containing a timestamp, a hash of the previous block, and transaction data, secured by cryptographic hashing to ensure immutability.",
            example: {
              title: "Analogy",
              text: "Think of it as a digital public notary that isn't run by one person, but by thousands. Every document they notarize is linked to the previous one, creating an unbreakable chain of trust.",
            },
            externalLink: "https://www.investopedia.com/terms/b/blockchain.asp",
          },
          {
            title: "Blockchain Future Potential",
            content:
              "The capability of blockchain to scale through advanced virtual machine execution, layer-2 solutions, and sharding, with future adaptations like quantum-resistant cryptography to enhance performance and security.",
            example: {
              title: "Analogy",
              text: "Early internet was slow (dial-up). Its future potential was realized through broadband and Wi-Fi (scaling solutions). Blockchain is in a similar phase, with Layer-2s and Sharding acting as its broadband moment.",
            },
            externalLink:
              "https://www.forbes.com/sites/forbestechcouncil/2022/12/21/the-future-of-blockchain-technology/",
          },
          {
            title: "Blockchain Adoption National Blockchain Strategies",
            content:
              "Government-led initiatives to integrate blockchain using permissioned or consortium models, leveraging standardized APIs and interoperable consensus protocols for scalable, regulated national applications.",
            example: {
              title: "Real-World Example",
              text: 'The UAE\'s "Emirates Blockchain Strategy 2021" aims to move 50% of government transactions onto a blockchain platform to improve efficiency and security.',
            },
            externalLink:
              "https://www.oecd.org/finance/oecd-blockchain-policy-centre.htm",
          },
          {
            title: "Blockchain Adoption Success Stories",
            content:
              "Real-world implementations of blockchain showcasing high-throughput transaction processing, fault-tolerant architectures, and enterprise integration for use cases like supply chain or identity management.",
            example: {
              title: "Real-World Example",
              text: "Walmart uses blockchain to track food provenance for leafy greens. In case of an outbreak, they can trace the source in seconds instead of days, improving food safety.",
            },
            externalLink:
              "https://www.ibm.com/topics/blockchain-supply-chain/success-stories",
          },
          {
            title: "Blockchain Use Case Categorization",
            content:
              "A classification system for blockchain applications, organizing them into categories with specific data structures and functions tailored to industries like finance or healthcare for modular deployment.",
            example: {
              title: "Analogy",
              text: "This is like sorting your tools into different toolboxes. You have one for plumbing (finance use cases), one for electrical work (healthcare use cases), and one for carpentry (supply chain), each with specialized tools.",
            },
            externalLink:
              "https://www.gartner.com/en/articles/the-4-phases-of-the-blockchain-technology-adoption-cycle",
          },
          {
            title: "What is Tokenization?",
            content:
              "The process of converting real-world or digital assets into unique digital tokens, represented by identifiers or balances linked to metadata, enabling fractional ownership and transferability.",
            example: {
              title: "Analogy",
              text: "Tokenization is like turning a physical painting into a thousand digital puzzle pieces. Each piece is a token that represents a small share of the painting, and you can buy, sell, or trade your pieces easily.",
            },
            externalLink:
              "https://www.forbes.com/advisor/investing/cryptocurrency/tokenization/",
          },
          {
            title: "What is Cryptocurrency?",
            content:
              "A digital or token-based asset with a defined total supply, tracked via balances, secured by consensus mechanisms to prevent double-spending, and incentivized by rewards for network participation.",
            example: {
              title: "Real-World Example",
              text: "Bitcoin is the most famous cryptocurrency. It exists purely in digital form, has a fixed supply of 21 million coins, and is secured by a global network of computers through a process called mining.",
            },
            externalLink:
              "https://www.investopedia.com/terms/c/cryptocurrency.asp",
          },
          {
            title: "Cryptocurrency Wallets and Exchange",
            content:
              "Digital storage for private-public key pairs to hold cryptocurrency balances, paired with exchange platforms that maintain order books and use matchmaking algorithms for secure trade execution.",
            example: {
              title: "Analogy",
              text: "A crypto wallet is like your bank account, holding your money. An exchange is like the stock market, where you go to trade your money for other types of assets (different cryptocurrencies).",
            },
            externalLink:
              "https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet",
          },
          {
            title: "DeFi: An Alternative to Financial Industry",
            content:
              "A decentralized finance ecosystem that replaces traditional intermediaries with liquidity pools, supporting lending, borrowing, and yield farming through price oracles and risk mitigation strategies.",
            example: {
              title: "Real-World Example",
              text: "Platforms like Aave and Compound allow users to lend their crypto assets and earn interest, or borrow against their holdings, all without needing to go through a traditional bank.",
            },
            externalLink: "https://ethereum.org/en/defi/",
          },
          {
            title: "DeFi Applications",
            content:
              "Specific decentralized applications within DeFi, including lending platforms, exchanges, and insurance protocols, utilizing real-time data feeds and optimized transaction processing for financial services.",
            example: {
              title: "Real-World Example",
              text: "Uniswap is a popular DeFi application that acts as a decentralized exchange (DEX), allowing users to swap different types of tokens directly without a central intermediary.",
            },
            externalLink:
              "https://www.coinbase.com/learn/crypto-basics/what-is-defi",
          },
          {
            title: "DeFi Applications Security",
            content:
              "Protective measures in DeFi applications, involving reentrancy prevention, access controls, multi-signature approvals, and auditing integration to safeguard against vulnerabilities and exploits.",
            example: {
              title: "Analogy",
              text: "DeFi security is like fortifying a castle. Audits are like inspecting the walls for weaknesses, access controls are the gatekeepers, and multi-signature approvals mean several generals must agree before opening the main gate.",
            },
            externalLink:
              "https://www.slowmist.com/en/security-audit-smart-contract.html",
          },
          {
            title: "Token",
            content:
              "A digital asset defined by a standard with a balance tracking mechanism, governed by rules like supply limits or burning, designed for compatibility with wallets and exchange systems.",
            example: {
              title: "Analogy",
              text: "A token is like a digital voucher or arcade token. It represents a specific value or right within a particular system (like a specific game or platform) and can be traded or used according to that system's rules.",
            },
            externalLink: "https://www.investopedia.com/terms/t/token.asp",
          },
          {
            title: "NFT - Non Fungible Token",
            content:
              "A unique digital asset identified by a specific token ID linked to an owner and metadata URI, distinguished from fungible tokens by its indivisible and non-interchangeable nature.",
            example: {
              title: "Real-World Example",
              text: 'The artist Beeple sold an NFT of his digital artwork "Everydays: The First 5000 Days" for $69 million at Christie\'s auction. The NFT serves as a public, verifiable proof of ownership for that specific digital file.',
            },
            externalLink:
              "https://www.investopedia.com/non-fungible-tokens-nft-5115211",
          },
          {
            title: "Enterprise Blockchain Prominent Use Cases",
            content:
              "Specialized blockchain deployments for businesses, utilizing permissioned access, private data channels, and efficient consensus like PBFT for applications in supply chain, healthcare, or banking.",
            example: {
              title: "Real-World Example",
              text: "Maersk's TradeLens platform is a prominent enterprise blockchain that brings together shipping companies, ports, and customs authorities to create a shared, secure record of global trade events.",
            },
            externalLink: "https://www.ibm.com/topics/enterprise-blockchain",
          },
        ],
      },
      {
        title: "Enterprise Blockchain & Sector-Specific Use Cases",
        icon: (
          <Building2
            size={32}
            className="text-indigo-600"
          />
        ),
        topics: [
          {
            title: "Enterprise Blockchain in Finance and Insurance",
            content:
              "A specialized blockchain deployment tailored for financial and insurance sectors, leveraging private or consortium networks to handle sensitive data with enhanced security and compliance.",
            example: {
              title: "Real-World Example",
              text: "The B3i consortium of insurers uses a shared blockchain ledger to streamline the process of transferring risk between insurance companies, reducing administrative costs and errors.",
            },
            externalLink:
              "https://www.pwc.com/us/en/industries/financial-services/fintech/blockchain-in-insurance.html",
          },
          {
            title: "Permissioned Blockchain Framework",
            content:
              "A controlled blockchain architecture restricting node access through predefined permissions, utilizing identity verification and access control to ensure trust and privacy in enterprise settings.",
            example: {
              title: "Analogy",
              text: "A public blockchain like Bitcoin is a public park anyone can enter. A permissioned blockchain is like a private corporate campus; you need a keycard (permission) to get in and access different buildings.",
            },
            externalLink: "https://www.ibm.com/topics/permissioned-blockchain",
          },
          {
            title: "How to choose a Blockchain use case and types of Framework",
            content:
              "A decision-making process to select blockchain applications based on use case needs, involving framework types like public, private, or hybrid, each with distinct consensus and scalability characteristics.",
            example: {
              title: "Analogy",
              text: "Choosing a blockchain framework is like choosing a vehicle. For a public race (decentralization), you need a Formula 1 car (public blockchain). For a secure company delivery route, you need an armored truck (private blockchain).",
            },
            externalLink:
              "https://hbr.org/2019/03/how-to-choose-the-right-blockchain-for-your-business",
          },
          {
            title: "Blockchain as a Service (BaaS)",
            content:
              "A cloud-based blockchain offering providing pre-configured infrastructure, APIs, and tools for rapid deployment, enabling enterprises to utilize blockchain without managing underlying hardware.",
            example: {
              title: "Real-World Example",
              text: "Microsoft Azure and Amazon Web Services (AWS) both offer BaaS platforms, allowing companies to quickly set up and manage their own blockchain networks without needing to be experts in the underlying infrastructure.",
            },
            externalLink:
              "https://www.investopedia.com/terms/b/blockchain-as-a-service-baas.asp",
          },
          {
            title: "Blockchain Application in BFSI",
            content:
              "Blockchain implementations in Banking, Financial Services, and Insurance (BFSI), utilizing distributed ledgers for secure transactions, smart contracts, and data sharing across financial ecosystems.",
            example: {
              title: "Real-World Example",
              text: "J.P. Morgan's Onyx platform uses blockchain for wholesale payments, allowing for the instantaneous transfer and settlement of value between financial institutions.",
            },
            externalLink:
              "https://www.tcs.com/what-we-do/industries/banking/trends/blockchain-applications-in-bfsi",
          },
          {
            title: "Blockchain Use case Global Payment",
            content:
              "A blockchain application facilitating cross-border payments, leveraging real-time settlement, reduced intermediaries, and cryptographic security to enhance global transaction efficiency.",
            example: {
              title: "Real-World Example",
              text: "RippleNet is a network that uses blockchain technology to allow banks and payment providers to send money across borders instantly and with lower fees than traditional correspondent banking systems.",
            },
            externalLink: "https://ripple.com/ripplenet/",
          },
          {
            title: "Blockchain Case Study World Wire on Global Payment",
            content:
              "A practical example of blockchain technology in action, where World Wire by IBM uses a distributed ledger to streamline global payments with faster settlement and lower costs.",
            example: {
              title: "Specific Function",
              text: "World Wire used the Stellar blockchain protocol to allow financial institutions to clear and settle cross-border payments in near real-time, converting digital assets to and from traditional currency.",
            },
            externalLink:
              "https://www.ibm.com/blogs/blockchain/2019/03/introducing-ibm-blockchain-world-wire/",
          },
          {
            title: "Blockchain in Trade Finance",
            content:
              "A blockchain solution for trade finance, employing digital records and smart contracts to automate documentation, verify authenticity, and accelerate international trade processes.",
            example: {
              title: "Real-World Example",
              text: "Platforms like we.trade and Marco Polo Network use blockchain to connect buyers, sellers, and banks on a single network, replacing slow, paper-based letters of credit with transparent, digital smart contracts.",
            },
            externalLink: "https://www.tradefinanceglobal.com/blockchain/",
          },
          {
            title: "Application of Blockchain in Trade Finance",
            content:
              "The use of blockchain to digitize trade finance operations, integrating with supply chain data to ensure transparency, reduce fraud, and optimize letter of credit processes.",
            example: {
              title: "Analogy",
              text: "This is like upgrading from sending mail with a horse and buggy (paper-based trade finance) to sending instant, encrypted emails that everyone involved can see and trust simultaneously (blockchain-based trade finance).",
            },
            externalLink:
              "https://www.iccwbo.org/news-publications/news/the-transformative-power-of-blockchain-in-trade-finance",
          },
          {
            title: "Blockchain Success Stories in Trade Finance",
            content:
              "Real-world examples of blockchain improving trade finance, showcasing reduced processing times, enhanced trust, and cost savings through implementations like trade digitization platforms.",
            example: {
              title: "Real-World Example",
              text: "In 2018, HSBC executed the world's first commercially viable trade-finance transaction using blockchain for a shipment of soybeans, reducing the process time from 5-10 days to just 24 hours.",
            },
            externalLink:
              "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/hsbc-completes-first-blockchain-enabled-trade-deal-in-china-50692790",
          },
          {
            title: "Blockchain In Insurance Industry I",
            content:
              "The application of blockchain in insurance to automate claims processing, using immutable records to verify policy details and prevent fraud in the first phase of industry transformation.",
            example: {
              title: "Analogy",
              text: 'This initial phase is like giving all parties in an insurance claim (the customer, the insurer, the repair shop) a shared, un-editable notebook where they log every step. It eliminates "he said, she said" arguments.',
            },
            externalLink:
              "https://www.ey.com/en_gl/insurance/how-blockchain-is-transforming-the-insurance-industry",
          },
          {
            title: "Blockchain In Insurance Industry II",
            content:
              "An advanced stage of blockchain in insurance, enabling peer-to-peer insurance models, smart contract-based payouts, and data sharing across insurers for improved risk assessment.",
            example: {
              title: "Analogy",
              text: "This advanced phase is like creating a community-owned insurance pool where rules are code. If your flight is delayed (verified by a trusted data source), a smart contract automatically pays out your claim without you needing to file any paperwork.",
            },
            externalLink:
              "https://www.pwc.com/us/en/industries/financial-services/fintech/blockchain-in-insurance.html",
          },
        ],
      },
      {
        title: "Supply Chain & Identity Applications",
        icon: (
          <Truck
            size={32}
            className="text-pink-600"
          />
        ),
        topics: [
          {
            title: "Blockchain In Non-Financial Industry",
            content:
              "A technology framework for managing data across sectors like supply chain and healthcare, leveraging distributed ledgers to ensure integrity and operational efficiency.",
            example: {
              title: "Real-World Example",
              text: "Everledger uses blockchain to track the provenance of diamonds and other valuable goods, creating an immutable record of their journey to combat theft and fraud.",
            },
            externalLink:
              "https://www.forbes.com/sites/bernardmarr/2018/03/23/how-blockchain-will-transform-the-supply-chain-and-logistics-industry/",
          },
          {
            title: "Enterprise Blockchain use case Automotive Supply Chain",
            content:
              "A controlled ledger system for tracking automotive components, providing real-time visibility and quality assurance across manufacturing and distribution networks.",
            example: {
              title: "Real-World Example",
              text: "The MOBI consortium, which includes major automakers like BMW and Ford, develops blockchain standards to track vehicle parts and history, ensuring authenticity and creating a trusted vehicle identity.",
            },
            externalLink: "https://dlt.mobi/",
          },
          {
            title: "Enterprise Blockchain use cases Cross Border Supply Chain",
            content:
              "A decentralized platform for monitoring goods across international borders, utilizing synchronized logs to enhance transparency and reduce customs delays.",
            example: {
              title: "Real-World Example",
              text: "IBM's Food Trust platform allows retailers like Walmart to track food items from farm to store. This enhances food safety and provides consumers with verifiable information about their products.",
            },
            externalLink: "https://www.ibm.com/topics/blockchain-supply-chain",
          },
          {
            title: "Drug Traceability",
            content:
              "A distributed tracking system for pharmaceuticals, using unique identifiers to ensure product authenticity and monitor movement from production to patient.",
            example: {
              title: "Real-World Example",
              text: "The MediLedger Network is a blockchain-based system used by pharmaceutical giants like Pfizer and Amgen to track prescription medicines, helping to combat counterfeiting and comply with the U.S. Drug Supply Chain Security Act.",
            },
            externalLink:
              "https://www.leewayhertz.com/drug-traceability-using-blockchain/",
          },
          {
            title: "Asset Provenance and Authentication In Supply Chain",
            content:
              "A ledger-based method for verifying the origin and legitimacy of assets, employing cryptographic records to trace ownership and prevent counterfeiting.",
            example: {
              title: "Real-World Example",
              text: "De Beers, a major diamond company, uses their Tracr blockchain platform to track diamonds from the mine to the retailer, assuring customers of their conflict-free origin.",
            },
            externalLink: "https://www.tracr.com/",
          },
          {
            title: "Luxury Goods Authentication",
            content:
              "A secure registry for high-value items, using immutable logs and digital certificates to confirm authenticity and protect against replication.",
            example: {
              title: "Real-World Example",
              text: "LVMH, the luxury goods conglomerate, co-founded the Aura Blockchain Consortium to provide customers with a digital certificate of authenticity for products from brands like Louis Vuitton and Bvlgari.",
            },
            externalLink: "https://auraluxuryblockchain.com/",
          },
          {
            title: "Sustainable Supply Chain",
            content:
              "A data-driven system for optimizing resource use in supply chains, tracked through environmental impact metrics and circular economy principles.",
            example: {
              title: "Real-World Example",
              text: 'Provenance is a platform that uses blockchain to help brands like Unilever track their materials and verify sustainability claims, such as "sustainably sourced palm oil," providing transparency to consumers.',
            },
            externalLink: "https://www.provenance.org/",
          },
          {
            title: "Contract Management in Supply Chain",
            content:
              "A digital framework for overseeing agreements, utilizing structured data to automate terms enforcement and monitor compliance across supply chain partners.",
            example: {
              title: "Analogy",
              text: "Using smart contracts on a blockchain for contract management is like having a digital referee that automatically enforces the rules of the game. If a shipment is delivered on time (verified by data), the payment is automatically released.",
            },
            externalLink:
              "https://www.leewayhertz.com/smart-contracts-in-supply-chain/",
          },
          {
            title: "Warranty Management In Supply Chain",
            content:
              "A centralized record system for warranty details, enabling efficient claims processing and product lifecycle tracking through standardized data entries.",
            example: {
              title: "Analogy",
              text: "Blockchain creates a golden record for a product's warranty. When you buy a car, the warranty information is logged immutably. When you sell it, the warranty seamlessly transfers to the new owner, and claims can be processed instantly against that trusted record.",
            },
            externalLink:
              "https://www.tcs.com/what-we-do/services/blockchain/solutions/warranty-and-service-management",
          },
          {
            title: "Land Records",
            content:
              "A tamper-proof database for property ownership, maintained with cryptographic timestamps to ensure accurate and dispute-free land title management.",
            example: {
              title: "Analogy",
              text: "Using blockchain for land records is like carving property deeds into a giant stone tablet that everyone can see but no one can alter. It prevents fraud and makes ownership clear and permanent.",
            },
            externalLink:
              "https://www.geospatialworld.net/blogs/blockchain-for-land-records-management/",
          },
          {
            title: "Academic Credential Verification",
            content:
              "A decentralized repository for educational certificates, using cryptographic hashes to validate authenticity and enable secure sharing across institutions.",
            example: {
              title: "Real-World Example",
              text: "MIT offers digital versions of its diplomas via a blockchain application, allowing graduates to securely and instantly share a verifiable proof of their degree with employers.",
            },
            externalLink:
              "https://news.mit.edu/2017/mit-debuts-secure-digital-diploma-using-bitcoin-blockchain-1017",
          },
          {
            title: "Healthcare Records",
            content:
              "A distributed system for storing patient data, employing encrypted logs to ensure privacy, accessibility, and historical accuracy for medical use.",
            example: {
              title: "Analogy",
              text: "Blockchain for healthcare records is like giving each patient a universal key that can unlock their medical history at any hospital or clinic they visit, but only when they give permission. It ensures the data is complete, secure, and controlled by the patient.",
            },
            externalLink: "https://www.ibm.com/topics/blockchain-in-healthcare",
          },
          {
            title: 'Concept of SSI "Self Sovereign Identity"',
            content:
              "A user-controlled identity model, utilizing cryptographic keys and decentralized storage to grant individuals ownership and management of their personal data.",
            example: {
              title: "Analogy",
              text: "SSI is like having a digital wallet for your identity. Instead of a company holding your driver's license data, you hold a verifiable digital version. You can then show just your age to a bar without revealing your address or full name.",
            },
            externalLink: "https://www.ibm.com/topics/self-sovereign-identity",
          },
        ],
      },
    ],
  },
};

// --- REUSABLE UI COMPONENTS ---

const SectionTitle = ({ icon, children }) => (
  <div className="flex items-center gap-4 mt-12">
    {icon}
    <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
      {children}
    </h3>
  </div>
);

// Updated component to render simple Markdown and accept a className
const SimpleMarkdownRenderer = ({ text, className }) => {
  // Regex to split by **bold** and *italic* text, keeping the delimiters
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <p className={className || "whitespace-pre-wrap"}>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </p>
  );
};

const TopicCard = ({ topic, topicKey, activeTopic, setActiveTopic }) => {
  const [isActive, setIsActive] = useState(false);
  const [eli5, setEli5] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsActive(topicKey === activeTopic);
  }, [activeTopic, topicKey]);

  const toggleAccordion = () => {
    setActiveTopic(isActive ? null : topicKey);
  };

  const fetchEli5Explanation = async (e) => {
    e.stopPropagation();
    if (eli5) {
      // Clear if already exists
      setEli5("");
      return;
    }
    setIsLoading(true);
    setError("");
    setEli5("");

    const prompt = `Explain the business concept "${topic.title}" in very simple terms, as if you were explaining it to a 5-year-old. Use a simple analogy. The original definition is: "${topic.content}"`;

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
        setEli5(result.candidates[0].content.parts[0].text);
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch explanation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg bg-white">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none cursor-pointer">
        <span className="text-lg font-semibold text-gray-800">
          {topic.title}
        </span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
          size={24}
          color={isActive ? "#3b82f6" : "#6b7280"}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? "max-h-[1500px]" : "max-h-0"
        }`}>
        <div className="p-6 border-t border-gray-200">
          <p className="text-gray-700 mb-4">{topic.content}</p>
          {topic.example && (
            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 my-4 rounded-r-lg">
              <strong className="font-semibold block mb-1">
                {topic.example.title}
              </strong>
              <p className="text-sm">{topic.example.text}</p>
            </div>
          )}
          {topic.imageUrl && (
            <div className="my-4">
              <img
                src={topic.imageUrl}
                alt={topic.title}
                className="rounded-lg w-full object-cover border border-gray-200"
              />
            </div>
          )}
          {topic.externalLink && (
            <a
              href={topic.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold mt-4 transition-colors text-blue-600 hover:text-blue-800">
              <LinkIcon size={16} /> Learn More
            </a>
          )}
          <div className="mt-6">
            <button
              onClick={fetchEli5Explanation}
              disabled={isLoading}
              className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
              {isLoading ? (
                <LoaderCircle
                  className="animate-spin"
                  size={16}
                />
              ) : (
                <Sparkles size={16} />
              )}
              {isLoading
                ? "Thinking..."
                : eli5
                ? "Hide Simple Explanation"
                : "✨ Explain Like I'm 5"}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {eli5 && (
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg animate-fade-in">
                <SimpleMarkdownRenderer
                  text={eli5}
                  className="text-yellow-800 whitespace-pre-wrap"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ModuleContent = ({ module }) => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [caseStudy, setCaseStudy] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState({ caseStudy: false, quiz: false });
  const [error, setError] = useState({ caseStudy: "", quiz: "" });
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const fetchCaseStudy = async () => {
    setIsLoading((prev) => ({ ...prev, caseStudy: true }));
    setError((prev) => ({ ...prev, caseStudy: "" }));
    setCaseStudy("");

    const topicTitles = module.sections
      .flatMap((s) => s.topics.map((t) => t.title))
      .join(", ");
    const prompt = `Generate a short, insightful business case study (around 200 words) for an MBA student. This case study should apply the following concepts from ${module.title}: ${topicTitles}. The case study should present a business problem and how these concepts were used to address it.`;

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });
      if (!response.ok)
        throw new Error(`API request failed with status ${response.status}`);
      const result = await response.json();
      if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
        setCaseStudy(result.candidates[0].content.parts[0].text);
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (err) {
      setError((prev) => ({
        ...prev,
        caseStudy: err.message || "Failed to fetch case study.",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, caseStudy: false }));
    }
  };

  const fetchQuiz = async () => {
    setIsLoading((prev) => ({ ...prev, quiz: true }));
    setError((prev) => ({ ...prev, quiz: "" }));
    setQuiz(null);
    setUserAnswers({});
    setShowResults(false);

    const context = module.sections
      .flatMap((s) =>
        s.topics.map((t) => `Title: ${t.title}\nContent: ${t.content}`)
      )
      .join("\n\n");
    const prompt = `Based on the following content, create a multiple-choice quiz with exactly 3 questions. For each question, provide 4 options and clearly indicate the correct answer.

Context:
${context}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            quiz: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  question: { type: "STRING" },
                  options: { type: "ARRAY", items: { type: "STRING" } },
                  correctAnswer: { type: "STRING" },
                },
                required: ["question", "options", "correctAnswer"],
              },
            },
          },
        },
      },
    };

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok)
        throw new Error(`API request failed with status ${response.status}`);
      const result = await response.json();
      if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
        const parsedJson = JSON.parse(
          result.candidates[0].content.parts[0].text
        );
        setQuiz(parsedJson.quiz);
      } else {
        throw new Error("Unexpected API response structure for quiz.");
      }
    } catch (err) {
      setError((prev) => ({
        ...prev,
        quiz: err.message || "Failed to fetch quiz.",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, quiz: false }));
    }
  };

  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    return quiz.reduce((score, question, index) => {
      return userAnswers[index] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  return (
    <div className="mt-8 animate-fade-in">
      {module.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <SectionTitle icon={section.icon}>{section.title}</SectionTitle>
          <div>
            {section.topics.map((topic, topicIndex) => (
              <TopicCard
                key={topicIndex}
                topic={topic}
                topicKey={`${sectionIndex}-${topicIndex}`}
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
              />
            ))}
          </div>
        </section>
      ))}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          AI Learning Tools
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={fetchCaseStudy}
            disabled={isLoading.caseStudy}
            className="flex-1 flex cursor-pointer items-center justify-center gap-2 px-4 py-3 text-md font-semibold text-white bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg shadow-md hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            {isLoading.caseStudy ? (
              <LoaderCircle
                className="animate-spin"
                size={20}
              />
            ) : (
              <FileText size={20} />
            )}
            {isLoading.caseStudy ? "Generating..." : "✨ Generate Case Study"}
          </button>
          <button
            onClick={fetchQuiz}
            disabled={isLoading.quiz}
            className="flex-1 flex cursor-pointer items-center justify-center gap-2 px-4 py-3 text-md font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            {isLoading.quiz ? (
              <LoaderCircle
                className="animate-spin"
                size={20}
              />
            ) : (
              <HelpCircle size={20} />
            )}
            {isLoading.quiz ? "Building..." : "✨ Create a Quiz"}
          </button>
        </div>
        {error.caseStudy && (
          <p className="text-red-500 text-sm mt-2">{error.caseStudy}</p>
        )}
        {caseStudy && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg animate-fade-in">
            <h4 className="font-bold mb-2">Case Study:</h4>
            <SimpleMarkdownRenderer
              text={caseStudy}
              className="text-gray-800 whitespace-pre-wrap"
            />
          </div>
        )}

        {error.quiz && (
          <p className="text-red-500 text-sm mt-2">{error.quiz}</p>
        )}
        {quiz && (
          <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg text-black">
            <h4 className="font-bold mb-4 text-xl">Module Quiz</h4>
            {quiz.map((q, i) => (
              <div
                key={i}
                className="mb-6">
                <p className="font-semibold mb-2">
                  {i + 1}. {q.question}
                </p>
                <div className="space-y-2 cursor-pointer">
                  {q.options.map((option, optIndex) => {
                    const isSelected = userAnswers[i] === option;
                    let buttonClass =
                      "bg-white hover:bg-gray-100 cursor-pointer";
                    if (showResults) {
                      if (option === q.correctAnswer) {
                        buttonClass = "bg-green-200 border-green-500";
                      } else if (isSelected) {
                        buttonClass = "bg-red-200 border-red-500";
                      }
                    } else if (isSelected) {
                      buttonClass = "bg-blue-200 border-blue-500";
                    }
                    return (
                      <button
                        key={optIndex}
                        onClick={() =>
                          !showResults && handleAnswerSelect(i, option)
                        }
                        disabled={showResults}
                        className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${buttonClass}`}>
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Submit Quiz
              </button>
            ) : (
              <div className="p-4 bg-blue-100 rounded-lg text-center">
                <p className="text-xl font-bold">
                  Your Score: {calculateScore()} / {quiz.length}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN HOME COMPONENT ---

export default function Home() {
  const [activeModule, setActiveModule] = useState(null);

  const handleModuleClick = (moduleId) => {
    setActiveModule((prev) => (prev === moduleId ? null : moduleId));
  };

  return (
    <div className="bg-slate-100 min-h-screen font-sans">
      <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
      <div className="container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            MBA in Blockchain Management Notes
          </h1>
          <p className="text-lg text-gray-600">
            From the University of Studies Guglielmo Marconi & UniAthena
            Platform
          </p>
        </header>
        {/* center the grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.values(allModulesData).map((module) => (
            <div
              key={module.id}
              onClick={() => handleModuleClick(module.id)}
              className={`p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
                activeModule === module.id
                  ? "bg-white scale-105 shadow-2xl ring-2 ring-indigo-400"
                  : "bg-white hover:shadow-xl"
              }`}>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                {module.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {module.title}
              </h2>
              <p className="text-sm text-gray-500">{module.description}</p>
            </div>
          ))}
        </div>

        <main className="flex-grow">
          {activeModule && (
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <ModuleContent module={allModulesData[activeModule]} />
            </div>
          )}
        </main>

        <footer className="text-center py-8 mt-16 border-t border-gray-200">
          <p className="text-gray-500">
            Vibe coded with
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl text-purple-600 hover:underline mx-2">
              ✨Gemini✨
            </a>
            by
            <a
              href="https://moayaan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl text-teal-600 hover:underline mx-2">
              ♦moayaan.eth♦
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
