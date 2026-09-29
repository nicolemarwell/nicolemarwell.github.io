/* ============================================================
   Nicole P. Marwell — publications data
   Fields: id, year, title, authors[], container, detail?, type,
           themes[], url?, urlLabel?, pdf?, award?, forthcoming?, abstract?
   pdf: path from the site root to a self-hosted copy, e.g.
        'papers/internet-futuring.pdf'. Renders a "PDF ↓" button and tells
        Google Scholar where the full text is (citation_pdf_url).
   type: book | article | chapter | proceedings | essay | review | working
   themes: 'nonprofit' | 'internet'   (AI group has no publications yet)
   ============================================================ */
window.PUBS = [

  /* ── BOOKS ─────────────────────────────────────────────── */
  {
    id: 'mismeasuring', year: 2025, type: 'book', themes: ['nonprofit'],
    title: 'Mismeasuring Impact: How Randomized Controlled Trials Threaten the Nonprofit Sector',
    authors: ['Nicole P. Marwell', 'Jennifer E. Mosley'],
    container: 'Stanford University Press',
    url: 'https://www.sup.org/books/mismeasuring-impact', urlLabel: 'Publisher',
    abstract: 'The push to demonstrate effectiveness has made randomized controlled trials the presumed “gold standard” for nonprofit evaluation. Drawing on extensive interviews with nonprofit managers, evaluators, and foundation officers, this book explains why RCTs are so often the wrong tool for the sector — what happens inside organizations that adopt them, the equity problems they create, and what to do instead.'
  },
  {
    id: 'bargaining', year: 2007, type: 'book', themes: ['nonprofit'],
    title: 'Bargaining for Brooklyn: Community Organizations in the Entrepreneurial City',
    authors: ['Nicole P. Marwell'],
    container: 'University of Chicago Press',
    url: 'https://press.uchicago.edu/ucp/books/book/chicago/B/bo4299967.html', urlLabel: 'Publisher',
    award: 'Honorable Mention, Robert E. Park Distinguished Scholarly Book Award (ASA)',
    abstract: 'Through ethnographic fieldwork at eight community-based organizations in Williamsburg and Bushwick, Marwell shows how the relationships these groups form with larger political and economic institutions outside the neighborhood shape the lives of the poor. The book widens the lens of urban poverty research from individuals and families to the organizations that collectively drive urban life.'
  },

  /* ── ARTICLES, CHAPTERS & PROCEEDINGS ──────────────────── */
  {
    id: 'configuring-geography', year: 2026, type: 'article', themes: ['nonprofit'],
    title: 'Configuring the Geography of Social Service Provision: Neighborhood Characteristics, Nonprofit Spatial Strategies, and Public Funding',
    authors: ['Nicole P. Marwell', 'Kevin Credit', 'Ethan Park'],
    container: 'Nonprofit and Voluntary Sector Quarterly',
    url: 'https://doi.org/10.1177/08997640261472467', urlLabel: 'DOI',
    abstract: 'Social services in the United States are delivered jointly by government and nonprofits. Prior research examines either the location or the resources of nonprofits; it rarely examines how these factors jointly influence social service availability or access. We leverage a unique dataset linking nonprofit headquarters and service site locations, along with organizational and neighborhood data. We find most nonprofits demonstrate neighborhood homophily, locating headquarters and service sites in demographically similar neighborhoods. However, we also find a distinctive set of nonprofits headquartered in affluent neighborhoods providing services in disadvantaged communities. Organizations serving neighborhoods with predominantly Black and Asian/immigrant populations are exposed to heightened fiscal vulnerability. Our study demonstrates how inequalities in access to nonprofit social services are shaped by the combination of where nonprofits provide services, the manner in which nonprofits spatially organize services across various sites, and the overall capacity of these organizations.'
  },
  {
    id: 'less-is-more', year: 2026, type: 'proceedings', themes: ['internet'],
    title: 'Less is More: Optimizing Probe Selection Using Shared Latency Anomalies',
    authors: ['Taveesh Sharma', 'Andrew Chu', 'Paul Schmitt', 'Francesco Bronzino', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'Proceedings of the ACM on Networking (CoNEXT)', detail: 'Vol. 4, Article 18',
    url: 'https://doi.org/10.1145/3808666', urlLabel: 'DOI',
    abstract: 'Latency anomalies—persistent or transient increases in round-trip time (RTT)—are a common feature of residential Internet performance. When multiple users simultaneously experience anomalies at the same destination, it may indicate shared infrastructure issues, routing behavior, or congestion. However, inferring such shared behavior is challenging in practice. This is because the magnitude of these anomalies can vary significantly across devices, even within the same ISP and geographic area, and detailed network topology information is often unavailable due to platform limitations or privacy constraints. In this work, we study whether devices that experience a shared latency anomaly observe similar changes in RTT magnitude using a topology-agnostic approach. Using a four-month dataset of high-frequency RTT measurements from 99 residential probes in Chicago, we detect shared anomalies and analyze their consistency in amplitude and duration without relying on traceroutes or explicit path information. Building on prior change-point detection techniques, we find that many shared anomalies affect users similarly in amplitude, particularly within the same ISP. Leveraging this insight, we develop a sampling algorithm that reduces redundancy in detected anomalies by selecting representative devices under user-defined constraints. Our approach covers 95% of aggregate anomaly impact with less than half the total probes used in our deployment. Compared to two baselines, we show that our approach selects a significantly higher number of unique anomalies at similar coverage levels. Additionally, our analysis suggests that geographic diversity can play an important role in selecting probes for a single ISP even within a single city. These findings highlight the potential of using anomaly amplitude and duration as topology-independent signals for scalable monitoring, troubleshooting, and cost-effective sampling designs in residential Internet performance measurement.'
  },
  {
    id: 'spatial-variation', year: 2026, type: 'proceedings', themes: ['internet'],
    title: 'Characterizing Spatial Variation in Internet Access Latency: A Multilevel Approach',
    authors: ['Jonatas Marques', 'Jared N. Schachner', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'Proceedings of the 2026 ACM Internet Measurement Conference', detail: 'pp. 1169–1182',
    url: 'https://doi.org/10.1145/3777912.3809140', urlLabel: 'DOI',
    abstract: 'Crowdsourced datasets are vital for analyzing variation in Internet access performance across geographic areas and addressing these spatial disparities. Prior research using these data and pursuing similar objectives often examines performance variation between single spatial units, such as census tracts, and scrutinizes a limited set of sociodemographic variables like race or class composition to explain it. However, this approach may be insufficiently precise to characterize the patterns of, and explanations for, spatial differences in Internet performance. We argue that multilevel, multivariate models better represent Internet performance as a spatial phenomenon; these models decompose its variance at multiple spatial scales and permit inclusion of multiple explanatory factors at each level. To demonstrate the utility of this approach, we use multilevel, multivariate models to analyze spatial patterns of Internet latency (idle and under load) and jitter drawn from crowdsourced Ookla Speedtest data collected between 2022 and 2023. Despite prior research’s emphasis on neighborhood variation in Internet performance, our multilevel models on crowdsourced data reveal that latency and jitter varies far more within neighborhoods than between them. Moreover, demographic differences in residential populations explain only a small portion of the modest neighborhood-level variance in Internet performance we estimate. Variation in infrastructure across counties and states appears to stratify performance to a far greater extent.'
  },
  {
    id: 'internet-futuring', year: 2026, type: 'article', themes: ['internet'],
    title: 'Internet Futuring: How Communities are Connecting Themselves',
    authors: ['Henna Zamurd Butt', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'Digital Culture & Society', detail: 'Vol. 11(2), pp. 145–166',
    url: 'https://doi.org/10.14361/dcs-2025-0207', urlLabel: 'DOI',
    pdf: 'papers/internet-futuring.pdf',
    abstract: 'In the United States, high-speed internet connectivity is ubiquitous in many places yet markedly absent in others. In the wake of the Covid-19 pandemic, renewed federal efforts toward universal broadband have mobilized billions of dollars aimed at closing infrastructural gaps. We bring together the cases of Detroit, Michigan and a Northern Michigan Tribe (NMT) — two communities where broadband has not yet fully arrived — to consider how ambitions for connectivity are articulated and realized in practice. Efforts to achieve more equitable distribution of the internet’s benefits cannot be meaningfully disengaged from questions of power and control over the internet as both a discursive and material architecture. Adopting a decolonizing stance, this paper situates the contemporary experiences of these two differently marginalized communities within longer histories of settler colonialism and dispossession. Internet futuring and internet management operate as a dialectical analytic, attuned to the ways that power arrangements are unsettled through practices of futuring and stabilized through managerial mechanisms. In Detroit, we trace the Hope Village plan for an open access, municipally owned fibre network, a highly anticipated project that stalled before it began. Further north, in Michigan’s Upper Peninsula, we follow NMT’s path to build a fibre network to serve Tribal members across the region, whilst navigating multiple setbacks and policy constraints. Across both sites, we observe internet management operating through mechanisms of hypervisibility, conditional recognition, and temporality that structure the field of possibility for connectivity. Internet futuring emerges as a localized, relational, and iterative practice of self-determination, producing distinct connectivity demands and outcomes.'
  },
  {
    id: 'beyond-data-points', year: 2025, type: 'proceedings', themes: ['internet'],
    title: 'Beyond Data Points: Regionalizing Crowdsourced Latency Measurements',
    authors: ['Taveesh Sharma', 'Paul Schmitt', 'Francesco Bronzino', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'ACM SIGMETRICS', detail: 'pp. 1–14',
    url: 'https://dl.acm.org/doi/10.1145/3700416', urlLabel: 'DOI',
    abstract: 'Despite significant investments in access network infrastructure, universal access to high-quality Internet connectivity remains a challenge. Policymakers often rely on large-scale, crowdsourced measurement datasets to assess the distribution of access network performance across geographic areas. These decisions typically rest on the assumption that Internet performance is uniformly distributed within predefined social boundaries, such as zip codes, census tracts, or neighborhood units. However, this assumption may not be valid for two reasons: (1) crowdsourced measurements often exhibit non-uniform sampling densities within geographic areas; and (2) predefined social boundaries may not align with the actual boundaries of Internet infrastructure. In this paper, we present a spatial analysis on crowdsourced datasets for constructing stable boundaries for sampling Internet performance. We hypothesize that greater stability in sampling boundaries will reflect the true nature of Internet performance disparities than misleading patterns observed as a result of data sampling variations. We apply and evaluate a series of statistical techniques to: (1) aggregate Internet performance over geographic regions; (2) overlay interpolated maps with various sampling unit choices; and (3) spatially cluster boundary units to identify contiguous areas with similar performance characteristics. We assess the effectiveness of the techniques we apply by comparing the similarity of the resulting boundaries for monthly samples drawn from the dataset. Our evaluation shows that the combination of techniques we apply achieves higher similarity compared to directly calculating central measures of network metrics over census tracts or neighborhood boundaries. These findings underscore the important role of spatial modeling in accurately assessing and optimizing the distribution of Internet performance, which can better inform policy, network operations, and long-term planning decisions.'
  },
  {
    id: 'fcc-challenge', year: 2024, type: 'proceedings', themes: ['internet'],
    title: 'Are We Up to the Challenge? An Analysis of the FCC Broadband Data Collection Fixed Internet Availability Challenges',
    authors: ['Jonatas Marques', 'Alexis Schrubbe', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'Proceedings of the 52nd Research Conference on Communications, Information and Internet Policy (TPRC)',
    url: 'https://arxiv.org/abs/2404.04189', urlLabel: 'arXiv',
    abstract: 'In 2021, the Broadband Equity, Access, and Deployment (BEAD) program allocated $42.45 billion to enhance high-speed internet access across the United States. As part of this funding initiative, The Federal Communications Commission (FCC) developed a national coverage map to guide the allocation of BEAD funds. This map was the key determinant to direct BEAD investments to areas in need of broadband infrastructure improvements. The FCC encouraged public participation in refining this coverage map through the submission of “challenges” to either locations on the map or the status of broadband at any location on the map. These challenges allowed citizens and organizations to report discrepancies between the map’s data and actual broadband availability, ensuring a more equitable distribution of funds. In this paper, we present a study analyzing the nature and distribution of these challenges across different access technologies and geographic areas. Among several other insights, we observe, for example, that the majority of challenges (about 58%) were submitted against terrestrial fixed wireless technologies as well as that the state of Nebraska had the strongest engagement in the challenge process with more than 75% of its broadband-serviceable locations having submitted at least one challenge.'
  },
  {
    id: 'hitchhikers', year: 2024, type: 'proceedings', themes: ['internet'],
    title: 'The Hitchhiker’s Guide to Analyzing the FCC Broadband Data Collection',
    authors: ['Jonatas Marques', 'Alexis Schrubbe', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'Proceedings of the 52nd Research Conference on Communications, Information and Internet Policy (TPRC)',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913799', urlLabel: 'SSRN',
    abstract: 'The FCC Broadband Data Collection (BDC) program has had—and will continue to have—tremendous impact on directing policy interventions and funding towards the goal of achieving broadband equity, access, and deployment across the United States. In this paper, we share our experience analyzing the data disseminated by the FCC as part of this program. We focus on discussing the challenges and limitations that one may encounter when exploring the datasets made publicly available as part of this program. Examples are the lack of direct, public data on the fabric layer; the retroactive removal of availability records from past data releases; and the purely file-based data serving model. We provide recommendations to stakeholders on ways to overcome these challenges and cope with limitations. These recommendations seek to introduce best practices for processing and analyzing the BDC data. Where appropriate, we also bring suggestions to the FCC on approaches to eliminate data limitations and lower barriers to analysis. These suggestions involve changes to how BDC data is published, served, updated, and summarized by the FCC.'
  },
  {
    id: 'rct-equity', year: 2024, type: 'article', themes: ['nonprofit'],
    title: 'Impact, Equity and Philanthropic Foundations: Can Randomized Controlled Trials Help Account for the Democratic Deficit?',
    authors: ['Jennifer E. Mosley', 'Nicole P. Marwell', 'Emily Claypool', 'Cameron Day'],
    container: 'VOLUNTAS: International Journal of Voluntary and Nonprofit Organizations',
    url: 'https://doi.org/10.1007/s11266-024-00673-4', urlLabel: 'DOI',
    abstract: 'Philanthropic foundations in the USA have long wrestled with how to demonstrate they contribute to the public good in a democratic society given the outsized voice their wealth provides. Evaluating the work of their grantees is one way that foundations can demonstrate what that contribution is; the data drawn from evaluation are used to give accounts about the value of their work. Recently, foundations have confronted the evidence-based policy movement which promotes randomized controlled trials as an evaluation tool that can help reveal “what works” in the realm of social services. This provides a path for foundations to more firmly establish that they are benefiting society by providing impact but also presents risks around entrenching inequities and diminishing the voice of community partners. Drawing on interviews from 2019 with program officers from large U.S. foundations that fund social services evaluation, we find that, perhaps surprisingly, the majority of these foundations have serious concerns about RCT-based evaluation, are not giving impact-based accounts of their contributions, and instead rely on equity-based accounts, presenting grantees as partners and recognizing pluralist forms of knowledge. This approach offers a different, less top-down, solution to ongoing demands that foundations demonstrate their value in a democracy.'
  },
  {
    id: 'hyperlocal', year: 2023, type: 'proceedings', themes: ['internet'],
    title: 'A First Look at the Spatial and Temporal Variability of Internet Performance Data in Hyperlocal Geographies',
    authors: ['Taveesh Sharma', 'Jonatas Marques', 'Nick Feamster', 'Nicole P. Marwell'],
    container: 'Proceedings of the 51st Research Conference on Communications, Information and Internet Policy (TPRC)',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4568668', urlLabel: 'SSRN',
    abstract: 'Measuring Internet access network performance has been a persistent challenge for researchers and policymakers alike. Unfortunately, existing “speed test” datasets typically lack comprehensive data across both space and time. Specifically, our past work has highlighted that tools like Ookla’s Speed Test and Measurement Lab’s NDT rely heavily on convenience samples (user-initiated tests from self-selected participants), resulting in a sample that may not generalize across either time or geography. Our ongoing research seeks to address these issues by developing innovative sampling methods and statistical models to provide a more holistic view of Internet performance. Initial findings, focusing on end-to-end latency across hyper-local regions within a single large city in the United States (Chicago, Illinois), reveal that spatial proximity often does not correlate with simultaneous performance anomalies. These insights underscore the need for advanced methods to generalize Internet performance data across time and space. Improved methods can ultimately enable a better understanding of the effects of infrastructure investments on the evolution of Internet performance.'
  },
  {
    id: 'ookla', year: 2023, type: 'proceedings', themes: ['internet'],
    title: 'A Comparative Analysis of Ookla Speedtest and Measurement Lab’s Network Diagnostic Test (NDT7)',
    authors: ['Kyle MacMillan', 'Tarun Mangla', 'James Saxon', 'Nicole P. Marwell', 'Nick Feamster'],
    container: 'ACM SIGMETRICS',
    url: 'https://dl.acm.org/doi/10.1145/3579448', urlLabel: 'DOI',
    abstract: 'Consumers, regulators, and ISPs all use client-based “speed tests” to measure network performance, both in single-user settings and in aggregate. Two prevalent speed tests, Ookla’s Speedtest and Measurement Lab’s Network Diagnostic Test (NDT), are often used for similar purposes, despite having significant differences in both the test design and implementation, and in the infrastructure used to perform measurements. In this paper, we present the first-ever comparative evaluation of Ookla and NDT7 (the latest version of NDT), both in controlled and wide-area settings. Our goal is to characterize when and to what extent these two speed tests yield different results, as well as the factors that contribute to the differences. To study the effects of the test design, we conduct a series of controlled, in-lab experiments under a comprehensive set of network conditions and usage modes (e.g., TCP congestion control, native vs. browser client). Our results show that Ookla and NDT7 report similar speeds under most in-lab conditions, with the exception of networks that experience high latency, where Ookla consistently reports higher throughput. To characterize the behavior of these tools in wide-area deployment, we collect more than 80,000 pairs of Ookla and NDT7 measurements across nine months and 126 households, with a range of ISPs and speed tiers. This first-of-its-kind paired-test analysis reveals many previously unknown systemic issues, including high variability in NDT7 test results and systematically under-performing servers in the Ookla network.'
  },
  {
    id: 'benchmarks', year: 2022, type: 'proceedings', themes: ['internet'],
    title: 'Benchmarks or Equity? A New Approach to Measuring Internet Performance',
    authors: ['Nick Feamster', 'Nicole P. Marwell'],
    container: 'Proceedings of the 50th Research Conference on Communications, Information and Internet Policy (TPRC)',
    abstract: 'A longstanding approach to measuring Internet performance is to directly compare throughput against pre-defined benchmarks (e.g., 25 megabits per second downstream, 3 megabits per second upstream). In this paper, we advocate, develop, and demonstrate a different approach: rather than focusing on whether speeds meet a particular threshold, we develop techniques to determine whether a variety of Internet performance metrics (including throughput, latency, and loss rate) are comparable across geographies. We define these metrics and apply them across a longitudinal dataset of Internet performance measurements comprising approximately 30 neighborhoods across the City of Chicago. The metrics we define show some geographical disparities, indicating that such comparative metrics may be promising for studying questions of equitable Internet access across neighborhoods.'
  },
  {
    id: 'internet-inequity', year: 2022, type: 'proceedings', themes: ['internet'],
    title: 'Internet Inequity in Chicago: Adoption, Affordability, and Availability',
    authors: ['Kyle MacMillan', 'Tarun Mangla', 'Nick Feamster', 'Nicole P. Marwell'],
    container: 'Proceedings of the 50th Research Conference on Communications, Information and Internet Policy (TPRC)',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4182994', urlLabel: 'SSRN',
    abstract: 'Lack of access to high-quality Internet connectivity affects how people participate in all aspects of life, from education to work to recreation; disparities in Internet access thus carry over into many other aspects of life. Historically, the discussions on Internet inequity centers mainly around the rural vs. urban divide in the United States. The Covid-19 pandemic has also brought the prevalence of Internet inequity in urban areas to the broader collective attention. To further the study of this issue, this paper characterizes the state of Internet equity in Chicago, focusing on different dimensions of Internet equity, including availability, affordability, and adoption. To this end, we combine multiple existing datasets to understand the digital divide in Chicago and the contributing factors. Our findings show disparity in broadband adoption rates across neighborhoods in Chicago: Broadband adoption varies between 58–93% across community areas, with low access areas mostly concentrated in South and West Chicago. Furthermore, adoption rates are positively correlated with income and education level and negatively correlated with age. The former highlights the need to provide affordable Internet access, while the latter suggests introducing technology training programs, especially for the elderly. We also find disparity in broadband availability—with the number of ISP options in a census block significantly varying across the city, indicating infrastructure equity issues.'
  },
  {
    id: 'health-service', year: 2022, type: 'article', themes: ['nonprofit'],
    title: 'Does Health Service Funding Go Where the Need Is? A Prototype Spatial Access Analysis for New Urban Contracts Data',
    authors: ['Julia Koschinsky', 'Nicole P. Marwell', 'Raed Mansour'],
    container: 'BMC Health Services Research', detail: '22(45), 1–12',
    url: 'https://doi.org/10.1186/s12913-021-07370-8', urlLabel: 'DOI',
    abstract: 'Background: Much of spatial access research measures the proximity to health service locations. We advance this research by focusing on whether health service funding is within walkable reach of neighborhoods with high hardship. This is made possible by a new administrative data source: financial contracts data for those human services that are delivered by nonprofits under contract with the government. Methods: In a prototypical spatial access study we apply a classic 2-step floating area catchment model for walkable network access to analyze 2018 data about contracted nonprofit health services funded by the Chicago Department of Public Health (CDPH). CDPH collected the data for the purpose of this study. Results: We find that the common container approach of aggregating contract amounts by provider headquarter locations in a given area (ignoring satellite service sites) underestimates the share of funding that goes to Chicago neighborhoods with higher hardship. Once service sites and spatial access are taken into account, a larger share of CDPH funds was found to be within walkable reach of Chicago’s high hardship areas. This was followed by low hardship areas (which could be driven by more headquarter locations there that do serve areas throughout the city). Medium hardship areas trail both, perhaps warranting closer attention. We explore these results by program type and neighborhood with a spatial decision support system developed for the health department. Conclusions: The typical approach for analyzing human service contracts based on headquarters is misleading — in fact, we find that results are reversed when service sites and walkable access are taken into account. This prototype provides an alternative framework for avoiding these misleading results.'
  },
  {
    id: 'micro-relations', year: 2020, type: 'article', themes: ['nonprofit'],
    title: 'The Micro-Relations of Urban Governance: Patronage and Partnership',
    authors: ['Nicole P. Marwell', 'Erez Aharon Marantz', 'Delia Baldassarri'],
    container: 'American Journal of Sociology', detail: '125, 1559–1601',
    url: 'https://doi.org/10.1086/709250', urlLabel: 'DOI',
    abstract: 'The classic urban ecological paradigm envisioned the articulation of the social organization of neighborhoods with that of the city as a whole. This article offers novel empirical evidence in support of this proposition. We analyze the microrelations of governance across two key urban domains, politics and nonprofit organizations, and identify the district-based politician as a key actor linking neighborhood-based and citywide forms of social organization. Using data of contracts allocated by city council members to nonprofits in New York City, analysis of the social network system linking these two types of actors shows two distinct relational dynamics: a patronage dynamic characterized by exclusive and long-lasting relationships between a council member and his/her local constituency and a partnership dynamic characterized by citywide relationships that are short-lived and fostered by organizational differentiation and embeddedness. Furthermore, politicians and nonprofits differently accommodate the copresence of these two models of resource allocation.'
  },
  {
    id: 'urban-poverty-review', year: 2020, type: 'article', themes: ['nonprofit'], award: 'Invited Review',
    title: 'Organizations and the Governance of Urban Poverty',
    authors: ['Nicole P. Marwell', 'Shannon Morrissey'],
    container: 'Annual Review of Sociology', detail: '46, 233–250',
    url: 'https://doi.org/10.1146/annurev-soc-121919-054708', urlLabel: 'DOI',
    abstract: 'Many recent sociological studies of urban poverty have drawn inspiration from the Chicago School model of social disorganization. Studies of urban poverty and formal organizations have been profoundly shaped by this theoretical perspective, casting organizations as components of neighborhoods and thus relevant for study as potential contributors to neighborhood social control. We argue that this approach obscures many ways in which formal organizations are involved in the production and management of urban poverty. In order to take advantage of the many insights offered by sociological studies of organizations, we propose that students of urban poverty expand their theoretical perspective on formal organizations. We develop such an approach, an amalgamation of key concepts from two existing theoretical frameworks rarely discussed in urban poverty studies: urban governance and strategic action fields. This perspective offers new directions for research on urban poverty and urges greater integration with related studies from political science and geography.'
  },
  {
    id: 'governance-framework', year: 2020, type: 'chapter', themes: ['nonprofit'],
    title: 'Toward a Governance Framework for Government–Nonprofit Relations',
    authors: ['Nicole P. Marwell', 'Maoz Brown'],
    container: 'The Nonprofit Sector: A Research Handbook (3rd ed.), Stanford University Press', detail: 'Chapter 9, pp. 231–252',
    abstract: 'The dominant sector-based approach to government–nonprofit relations—rooted in economic theories of voluntary, government, and contract failure—has generated important insights but has increasingly obscured the complex, boundary-blurring realities of how government agencies and nonprofit organizations actually engage with each other. This chapter proposes governance—defined as the relationships, interactions, conditions, and rules between government and nonprofit organizations that give rise to goal-setting, steering, and implementation of public issues—as a more analytically productive framework. Reviewing recent scholarship along three orientations (institutional conditions, individual motivations, and interorganizational relations), the authors show how a governance lens advances research on the four normative stakes most critical in the current period: fairness, effectiveness, accountability, and legitimacy.'
  },
  {
    id: 'what-works', year: 2019, type: 'article', themes: ['nonprofit'],
    title: 'How the “What Works” Movement is Failing Human Service Organizations, and What Social Work Can Do to Fix It',
    authors: ['Jennifer E. Mosley', 'Nicole P. Marwell', 'Marci Ybarra'],
    container: 'Human Service Organizations: Management, Leadership & Governance', detail: '43(1), 326–335',
    url: 'https://doi.org/10.1080/23303131.2019.1672598', urlLabel: 'DOI',
    abstract: 'The social work profession has a long history of seeking legitimacy by adopting frameworks and methods from higher status professions. This quest has led to concerns about social work’s strengths potentially being sacrificed for broader professional approval. In this commentary we explore a contemporary iteration of this phenomenon—social work’s participation in the “What Works” movement, which promotes greater use of evidence-based practice (EBP) and policy—and discuss the impact of increasingly linking government funding for human service organizations (HSOs) to the use of EBPs. At risk are three foundations of social work practice: valuing community-based knowledge; preserving staff autonomy and a pipeline for social work trained managers; and making program decisions with a thorough understanding of organizational and community context. We argue that an organizational learning perspective may help HSOs maintain social work values while also drawing on evidence to improve the lives of consumers and their communities.'
  },
  {
    id: 'deficit-model', year: 2015, type: 'article', themes: ['nonprofit'],
    title: 'A Deficit Model of Collaborative Governance: Government-Nonprofit Fiscal Relations in the Provision of Child Welfare Services',
    authors: ['Nicole P. Marwell', 'Thad Calabrese'],
    container: 'Journal of Public Administration Research and Theory', detail: '25, 1031–1058',
    url: 'https://doi.org/10.1093/jopart/muu047', urlLabel: 'DOI',
    abstract: 'Much existing scholarship on nonprofit organizations’ receipt of government funds appears to assume that there is something highly problematic about this relationship. Although rarely articulated in these studies, the concern about the negative effects of government funding turns on a view of nonprofits that privileges their private character. In this article, rather than examining how public funds constrain private action, we inquire about how government deploys private organizations, via the mechanism of government funding, to secure a public good. Using a case study of the nonprofit child welfare sector in New York State, we theorize a deficit model of collaborative governance in which nonprofits have been deputized by the state to secure children’s social rights but do not receive sufficient resources to cover the costs of securing those rights. Then, we connect this theory to organization-level financial management practices that pose challenges to the nonprofits of both survival and service quality. This nonprofit organizational instability concerns the state insofar as it threatens the securing of individuals’ social rights.'
  },
  {
    id: 'people-place', year: 2013, type: 'article', themes: ['nonprofit'],
    title: 'People, Place and System: Organizations and the Renewal of Urban Social Theory',
    authors: ['Nicole P. Marwell', 'Michael McQuarrie'],
    container: 'Annals of the American Academy of Political and Social Science', detail: '126–143',
    url: 'https://doi.org/10.1177/0002716212474795', urlLabel: 'DOI',
    abstract: 'This article offers a theoretical framework for thinking about how organizations matter for the production, reproduction, and amelioration of urban poverty. We draw on the classical concept of integration, in both its social and systemic versions, as an important tool for advancing urban social theory. A key challenge for urban organizational analysts is to keep within view the processes of both social and systemic integration, while empirically investigating how they are connected (or not). Too many urban researchers focus on one or the other, with little conceptualization of the importance of linking the two. We argue that urban organizations of all kinds provide a strategic site for observing processes of both social and systemic integration, and that urban organizational research should examine many of them to better understand the multiple urban transformations currently in process.'
  },
  {
    id: 'inequality-spatial', year: 2013, type: 'article', themes: ['nonprofit'],
    title: 'Inequality in the Spatial Allocation of Social Services: Government Contracts to New York City Nonprofit Organizations',
    authors: ['Nicole P. Marwell', 'Aaron Gullickson'],
    container: 'Social Service Review', detail: '87, 319–353',
    url: 'https://doi.org/10.1086/670910', urlLabel: 'DOI',
    abstract: 'Publicly funded social services are an increasingly important component of social provision spending, accounting for approximately one-fifth of today’s welfare state expenditures. These funds are often allocated through purchase of service contracts between state and municipal agencies and third-party providers, usually nonprofit organizations. This study uses a unique dataset of government contracts with nonprofit organizations in New York City between 1997 and 2001 to study the relationship between the allocation of social services funding across neighborhoods and neighborhood need. We distinguish between local organizations serving their immediate neighborhoods and distributive organizations serving multiple neighborhoods. Overall, contract dollars allocated to both organizational types are positively associated with socioeconomic disadvantage, although distributive organizations are less likely to be physically located in needy neighborhoods. However, contract dollars for services targeted to specific populations are sometimes negatively associated with the prevalence of these targeted populations, especially when those contracts go to distributive organizations.'
  },
  {
    id: 'political-change', year: 2010, type: 'chapter', themes: ['nonprofit'],
    title: 'Political Change and the Institutionalization of the Nonprofit Service Delivery Infrastructure',
    authors: ['Nicole P. Marwell'],
    container: 'Politics and Partnerships (Clemens & Guthrie, eds.), University of Chicago Press', detail: '209–236',
    abstract: 'Traces how the privatization of welfare-state functions produced an extensive nonprofit service-delivery infrastructure in New York City, and how contracting-out from the 1970s–1990s institutionalized a dense system of community organizations intertwined with local government.'
  },
  {
    id: 'missing-org', year: 2009, type: 'article', themes: ['nonprofit'],
    title: 'The Missing Organizational Dimension in Urban Sociology',
    authors: ['Michael McQuarrie', 'Nicole P. Marwell'],
    container: 'City & Community', detail: '8(3), 247–268',
    url: 'https://doi.org/10.1111/j.1540-6040.2009.01288.x', urlLabel: 'DOI',
    abstract: 'Our article takes issue with the treatment of organizations in much urban sociology. We argue that both Marxian political economists and Chicagoan ethnographers and quantitative analysts treat organizations as derivative rather than productive of urban social relations. This problem is not epistemological or methodological. Instead, it is rooted in the objects of analysis that urban sociologists choose. Drawing on key elements of structuration theory, we attempt to lay the groundwork for improving the treatment of organizations in urban sociology by flagging some of the key insights in the sociology of organizations. We do not view this intellectual borrowing as a one–way street, and we emphasize that urbanists have a contribution to make to sociological thinking about organizations. Correcting these problems is essential if we are to understand the link between contemporary institutional transformations and urban neighborhoods.'
  },
  {
    id: 'nonprofit-forprofit', year: 2005, type: 'article', themes: ['nonprofit'],
    title: 'The Nonprofit/For-Profit Continuum: Theorizing the Dynamics of Mixed-Form Markets',
    authors: ['Nicole P. Marwell', 'Paul-Brian McInerney'],
    container: 'Nonprofit and Voluntary Sector Quarterly', detail: '34(1), 7–28',
    url: 'https://doi.org/10.1177/0899764004269739', urlLabel: 'DOI',
    abstract: 'A growing body of research has emerged on “mixed-form” markets—markets for goods and services in which for-profit, nonprofit, and government providers coexist. This article seeks to understand the dynamics between nonprofit and for-profit organizations operating within the same market. The authors propose a five-step theoretical framework that includes both nonprofit and for-profit actors to capture what is fundamentally a temporal process: market identification; market growth; increasing cost for goods/services; increasing price for goods/services; and cross-sector competition. The authors use data from extended qualitative investigations in distinct service markets to analyze the unique contributions and capacities of each organizational form, and the transformation of market structure over time. The authors conclude that the dynamic interplay between nonprofit and for-profit forms within markets produces three possible outcomes: stratified, displaced, and defended markets.'
  },
  {
    id: 'privatizing', year: 2004, type: 'article', themes: ['nonprofit'], award: 'Winner, Robert E. Park Distinguished Scholarly Article Award (ASA)',
    title: 'Privatizing the Welfare State: Nonprofit Community-Based Organizations as Political Actors',
    authors: ['Nicole P. Marwell'],
    container: 'American Sociological Review', detail: '69, 265–291',
    url: 'https://doi.org/10.1177/000312240406900206', urlLabel: 'DOI',
    abstract: 'This paper examines a form of state social provision that has been neglected by current sociological theory: publicly funded supportive services. Federal policies of privatization and devolution, embraced since the Reagan years, have made private, nonprofit organizations the primary deliverers of these services. Public supportive services are distributed via competitive state- and local-level allocative processes that send government contracts to specific nonprofit community-based organizations (CBOs), which in turn serve specific neighborhoods and individuals. I describe a model by which CBOs generate greater contract revenues by adding electoral politics to their more traditional roles of providing services and building communities. This model produces a new kind of CBO: the machine politics CBO. By reciprocally distributing services to residents and binding residents to the organization, machine politics CBOs create reliable voting constituencies for local elected officials. These officials trade these constituencies at higher levels of the governmental system and steer government human service contracts to favored CBOs. Through this process, nonprofit CBOs can influence the allocation of service-based social provision in cities and therefore impact individuals’ ability to access these services.'
  },
  {
    id: 'ethnic-politics', year: 2004, type: 'chapter', themes: [],
    title: 'Ethnic and Post-Ethnic Politics in New York City: The Dominican Second Generation',
    authors: ['Nicole P. Marwell'],
    container: 'Becoming New Yorkers (Kasinitz, Waters & Mollenkopf, eds.), Russell Sage Foundation', detail: '257–284'
  },

  /* ── INVITED ESSAYS & REPORTS ──────────────────────────── */
  {
    id: 'rct-problem', year: 2025, type: 'essay', themes: ['nonprofit'],
    title: 'The Nonprofit Sector Has an RCT Problem',
    authors: ['Nicole P. Marwell', 'Jennifer E. Mosley'],
    container: 'Stanford Social Innovation Review', detail: 'Fall, 58–67',
    url: 'https://ssir.org/articles/entry/the-problem-with-randomized-controlled-trials', urlLabel: 'Open Access'
  },
  {
    id: 'emerging-directions', year: 2022, type: 'essay', themes: [],
    title: 'Emerging Directions in the Study of the Data-Society Interface',
    authors: ['Nicole P. Marwell', 'Cameron Day'],
    container: 'Robert Wood Johnson Foundation',
    url: 'https://crownschool.uchicago.edu/sites/default/files/2022-10/Data-Society_Interface_Report_081722.pdf', urlLabel: 'PDF',
    abstract: 'This report surveys the emerging landscape of the “data-society interface” — the ways that new forms of data and analytic methods are transforming social life, governance, and the distribution of power. Challenging the assumption that data are neutral representations of reality, it argues that data are always produced through human choices and embed social and political values, with real consequences for equity, freedom, and democracy. The report poses three overarching questions about surveillance, data standards, and algorithmic decision-making; reviews descriptive, causal, and predictive approaches to analysis; and concludes with a call for urgent investment in data ethics and regulation.'
  },
  {
    id: 'rethinking-state', year: 2016, type: 'essay', themes: ['nonprofit'],
    title: 'Rethinking the State in Urban Outcasts',
    authors: ['Nicole P. Marwell'],
    container: 'Urban Studies', detail: '53, 1095–1098',
    url: 'https://doi.org/10.1177/0042098015613256', urlLabel: 'DOI',
    abstract: 'Wacquant’s treatment of the state’s role in producing urban marginality rests on outdated assumptions about a centralised state operating uniformly across one nation’s urban territories. More than a decade’s worth of urban scholarship focuses on a process more productively labelled ‘governance,’ which points to the multiplex relations among government, business, nongovernmental organisations and hybrid organisational forms in the production of urban inequality. While Wacquant gestures towards these ideas, a greater engagement with the range of extant empirical work on this subject is warranted.'
  },
  {
    id: 'bodega', year: 2009, type: 'essay', themes: [],
    title: 'On Bodega Dreams',
    authors: ['Nicole P. Marwell'],
    container: 'Sociological Forum', detail: '24(2), 461–464'
  },
  {
    id: 'robert-moses', year: 2007, type: 'essay', themes: [],
    title: 'Looking for Robert Moses',
    authors: ['Nicole P. Marwell'],
    container: 'Contexts', detail: '6, 75–77',
    url: 'https://doi.org/10.1525/ctx.2007.6.3.75', urlLabel: 'DOI'
  },
  {
    id: 'univ-community', year: 2003, type: 'essay', themes: ['nonprofit'],
    title: 'University-Community Partnerships: New York City University-Nonprofit Information Transfer Project Report',
    authors: ['Nicole P. Marwell', 'Françoise Jacobsohn', 'Susan J. Neva', 'Mineko Okamoto'],
    container: 'Center for Urban Research and Policy, Columbia University (Working Paper Series)'
  },
  {
    id: 'honky', year: 2002, type: 'essay', themes: [],
    title: 'Sociological Uses of a Sociological Memoir: Honky by Dalton Conley',
    authors: ['Nicole P. Marwell'],
    container: 'Qualitative Sociology', detail: '25(1), 139–143'
  },
  {
    id: 'social-networks', year: 1999, type: 'essay', themes: ['nonprofit'],
    title: 'Social Networks and Social Capital as Resources for Community Revitalization: Initial Insights',
    authors: ['Nicole P. Marwell'],
    container: 'Aspen Institute Nonprofit Sector Research Fund (Working Paper Series)'
  },

  /* ── BOOK REVIEWS ──────────────────────────────────────── */
  { id: 'r-thinking-economist', year: 2023, type: 'review', themes: [], title: 'Review of Thinking like an Economist: How Efficiency Replaced Equality in U.S. Public Policy (Elizabeth Popp-Berman)', authors: ['Nicole P. Marwell'], container: 'Social Service Review' },
  { id: 'r-redistributing', year: 2022, type: 'review', themes: [], title: 'Review of Redistributing the Poor: Jails, Hospitals, and the Crisis of Law and Fiscal Austerity (Armando Lara-Millán)', authors: ['Nicole P. Marwell'], container: 'Social Forces' },
  { id: 'r-automating', year: 2020, type: 'review', themes: [], title: 'Review of Automating Inequality: How High-Tech Tools Profile, Police, and Punish the Poor (Virginia Eubanks)', authors: ['Nicole P. Marwell'], container: 'Social Service Review', detail: '94, 175–180' },
  { id: 'r-follow-money', year: 2013, type: 'review', themes: [], title: 'Review of Follow the Money: How Foundation Dollars Change Public School Politics (Sarah Reckhow)', authors: ['Nicole P. Marwell'], container: 'City & Community', detail: '12, 408–409' },
  { id: 'r-philadelphia', year: 2012, type: 'review', themes: [], title: 'Review of The Philadelphia Barrio: The Arts, Branding and Neighborhood Transformation (Frederick Wherry)', authors: ['Nicole P. Marwell'], container: 'Social Service Review', detail: '86, 708–709' },
  { id: 'r-streetwise', year: 2010, type: 'review', themes: [], title: 'Review of Streetwise for Book Smarts: Grassroots Organizing and Education Reform in the Bronx (Celina Su)', authors: ['Nicole P. Marwell'], container: 'Contemporary Sociology', detail: '39, 607–608' },
  { id: 'r-cracks', year: 2010, type: 'review', themes: [], title: 'Review of Cracks in the Pavement: Social Change and Resistance in Poor Neighborhoods (Martín Sánchez-Jankowski)', authors: ['Nicole P. Marwell'], container: 'Social Service Review', detail: '84, 326–328' },
  { id: 'r-double-trouble', year: 2006, type: 'review', themes: [], title: 'Review of Double Trouble: Black Mayors, Black Communities, and the Call for a Deep Democracy (J. Phillip Thompson)', authors: ['Nicole P. Marwell'], container: 'City & Community', detail: '5, 460–462' },
  { id: 'r-no-fire', year: 2004, type: 'review', themes: [], title: 'Review of No Fire Next Time: Black-Korean Conflicts and the Future of America’s Cities (Patrick Joyce)', authors: ['Nicole P. Marwell'], container: 'Political Science Quarterly', detail: '118, 699–700' },
  { id: 'r-settlement', year: 2003, type: 'review', themes: [], title: 'Review of Settlement Houses Under Siege: The Struggle to Sustain Community Organizations in New York City (Fabricant & Fisher)', authors: ['Nicole P. Marwell'], container: 'Urban Studies', detail: '40, 1383–1385' },
  { id: 'r-street-level', year: 2002, type: 'review', themes: [], title: 'Review of Street Level Democracy (Jonathan Barker et al.)', authors: ['Nicole P. Marwell'], container: 'Voluntas', detail: '13, 319–321' },

  /* ── UNDER REVIEW & WORKING PAPERS ─────────────────────── */
  {
    id: 'evidence-clearinghouses', year: 2025, type: 'working', themes: ['nonprofit'],
    title: 'Evidence Clearinghouses as Policy Tools: How Equity Concerns Undermine Legitimacy',
    authors: ['Ariel Maschke', 'Lehn Benjamin', 'Nicole P. Marwell', 'Jennifer E. Mosley', 'Mary Kay Gugerty'],
    container: 'Revise & resubmit, Public Management Review'
  },
  {
    id: 'digital-divide-covid', year: 2025, type: 'working', themes: ['internet'],
    title: 'Heterogeneous Effects of Closing the Digital Divide During COVID-19 on Student Engagement and Achievement',
    authors: ['Jared N. Schachner', 'Nicole P. Marwell', 'Marisa de la Torre', 'Julia Gwynne', 'Elaine Allensworth'],
    container: 'Revise & resubmit, Nature: Humanities and Social Sciences Communications',
    url: 'https://edworkingpapers.com/ai25-1153', urlLabel: 'Working paper'
  },
  {
    id: 'contextual-moderators', year: 2025, type: 'working', themes: ['internet'],
    title: 'Contextual Moderators of Educational Disruption Effects',
    authors: ['Jared N. Schachner', 'Nicole P. Marwell', 'Elaine Allensworth'],
    container: 'In progress'
  }

];
