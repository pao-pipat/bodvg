---
Date:
  - 12-12-2024
tags:
  - PCR
  - BoDV-1
  - Cloning
  - GelExtraction
  - Fab
  - Analytical
  - Digestion
  - Restriction
  - Enzymes
---
## Goal

The goal of this protocol is to clone 5 antigen-binding fragments (Fabs)' heavy and light chains into a pHLsec plasmid (See [info here](https://www.addgene.org/99845/) and, and also a [paper](https://pubmed.ncbi.nlm.nih.gov/17001101/)). 

The pHLsec plasmid:

![[Pasted image 20241218165316.png]]

This is from the supplementary from the paper. In pHLsec, the MCS is modified as below:

![[Pasted image 20241213163449.png]]

So the MCS becomes **...-Kozak-signal peptide-AgeI-...insert...-KpnI-K-6His-STOP-STOP-...-XhoI-...**

>[! Design]
> In [[Primers]], the light chain DNA template was designed such that the target sequence integrates at **XhoI** at the C-terminal to avoid His-tag. For heavy chain DNA template, the target sequence was designed to integrate at **KpnI** on the C-terminal side.

The plasmid backbone is retrieved from STRUBI. It is the pHLsec-LORVR plasmid prepared with GigaPrep at concentration of 2.83 mg/ml.

> [!tldr] Method Summary
Target DNA inserts encoding BoDV-1 Fabs 8B11, 5G5, 6F6, 2G10, and 6C4 were first PCR amplified with Phusion®️ High-Fidelity PCR Master Mix with HF Buffer. The insert DNA templates were designed such that the heavy chain (HC) for each Fab was integrated at AgeI and KpnI restriction sites, while the template for light chain (LC) was integrated at AgeI and XhoI sites. Hence, the translated LCs do not possess 6$\times$His overhang, unlike the HCs. The amplified DNA templates were then purified with QIAquick®️ Gel Extraction Kit. Then, the templates were digested with AgeI-HF®️+KpnI-HF®️ for HC insert or AgeI-HF®️+XhoI for LC insert at 37$\degree$C for 1 hour. The pHLsec-LORVR plasmid was also digested under the same conditions with either of the restriction enzymes mixtures to produce suitable backbones for ligation with HC and LC DNA inserts. The digestion products were then purified and subjected to ligation with Quick Ligation Kit™️ for 5 minutes at room temperature. Then, the ligation products were added to 50 $\mu$L of competent cells. The cells were then transformed by heat shock at 42$\degree$C and plated onto ampicillin-containing LB-agar selection plates and incubated overnight at 37$\degree$C. The colonies were then picked and incubated to out-compete background in 500 $\mu$L SOC medium at 37$\degree$C with ~250 rpm shaking before transferring into a 5 mL of LB medium with 1$\times$ampicillin. The bacterial mixtures were then incubated overnight. The plasmids were then purified from the bacteria with QIAprep®️ Miniprep Spin Kit.

### Materials

| Name                                                  | Provider |
| ----------------------------------------------------- | -------- |
| Phusion®️ High-Fidelity PCR Master Mix with HF Buffer | NEB      |
| QIAquick®️ Gel Extraction Kit                         | QIAGEN   |
| QIAprep®️ Miniprep Spin Kit                           | QIAGEN   |
| AgeI-HF®️                                             | NEB      |
| KpnI-HF®️                                             | NEB      |
| XhoI                                                  | NEB      |
| Quick Ligation™️ KIt                                  | NEB      |
| Competent Cells (TBA)                                 |          |
| Ampicillin (TBA)                                      |          |
| Agarose (TBA)                                         |          |

---
## PCR of BoDV-1 Fabs: 8B11, 5G5, 6F6, 2G10, and 6C4 

[![Antibody Structure, classes and functions_AntibodySystem](https://www.antibodysystem.com/storage/20210823/bf17e1700825ed291f0dad04f111f0b8.png)

- The Fabs sequences and primers are in [[Primers]].
- 10 PCR reactions amplified DNA sequences for the heavy and light chains of **8B11**, **5G5**, **6F6**, **2G10**, and **6C4**.
- Primer solutions were suspended in milliQ water to 100 $\mu$M stock solution.
	- 1:10 diluted solutions were stored in the fridge. -> Take 2.5 $\mu$L of this solution for PCR reaction. **(100 $\mu$L)**
- Templates were needed for only 10 ng, but the concentrations were 300 - 500 ng/$\mu$L -> 1:100 dilution gives 3 - 5 ng/$\mu$L -> Take 2 $\mu$L for ~ 10 ng. **(100 $\mu$L)**
- In total, 5 $\mu$L of primers were added (forward + reverse) and 2 $\mu$L of template was added for each reaction. So, for a 50 $\mu$L reaction, you'd need 43 $\mu$L of master mix
- Use the same reverse primer for light (no His-tag, XhoI res site) chains, and the same for heavy chains (with His-tag, KpnI res site). All forward primers have AgeI res site.
- **Over-expression of light chain causes aggregation within the cell so it needs to be expressed alongside heavy chain. Hence, we only purify the fully assembled form of Fab.**
- Master Mix $\times$ 11 (10 + 1 allowing for error) *Use [Phusion(R) High-Fidelity PCR Master Mix with HF Buffer](https://www.neb.com/en-gb/protocols/2012/09/06/protocol-phusion-high-fidelity-pcr-master-mix-with-hf-buffer-m0531)*

| Concentration | Reagent       | $\mu$L (50 $\mu$L rxn) | $\mu$L (11 rxns) |
| ------------- | ------------- | ---------------------- | ---------------- |
| 2$\times$     | Phusion       | 25                     | 275              |
| 100%          | DMSO          | 1.5                    | 16.5             |
|               | milliQ H$_2$O | 16.5                   | 181.5            |

- PCR programme (1 kb = 15 s - 30 s)

| Stage | Step | Temperature ($\degree$C)     | Duration |
| ----- | ---- | ---------------------------- | -------- |
| 1     | 1    | 98                           | 30 s     |
| 2     | 1    | 98                           | 10 s     |
| 2     | 2    | 65 (Annealing)               | 20 s     |
| 2     | 3    | 72                           | 30 s     |
| -     | -    | Repeat *stage 2* $\times$ 4  | -        |
| 3     | 1    | 98                           | 10 s     |
| 3     | 2    | 72                           | 1 min    |
| -     | -    | Repeat *stage 3* $\times$ 30 | -        |
| 4     | 1    | 4                            | Hold     |

-------
## Gel Electrophoresis (For Gel extraction)

- Mix 15 g of Agarose and 150 ml of 1$\times$TAE together (1% gel, but this can be changed). Then, microwave until almost boiled. Add 15 $\mu$L of SyBR SAFE (10,000$\times$). Then, swirl until all agarose is molten. Cast the gel. Cool down for 30 minutes at room temperature. Then, it should be ready.
- 50$\times$TAE (gel running buffer) should be on the bench somewhere. But 10$\times$TAE is also available at Weng Lab's bench.
- Use 6$\times$ Gel Loading Dye -> Add 6 $\mu$L into 30 $\mu$L of PCR products. DO the same for the ladder (for ladder: 4$\mu$L milliQ water + 1 $\mu$L DNA + 1 $\mu$L Dye)
- Run with the small tank -> **IMPORTANT**: Run at 110 V for 40 minutes.

>[!tip] Running gel
> For Agarose gel electrophoresis, it is recommended to usually use 10 V/cm of the gel. Because the gel was approximately 10 cm, 100-110 V and 10-15 minutes should be applied to avoid overheating/degradation of DNA.
> 
> For SDS-PAGE, 10-15 V/cm is usually recommended.


----
## Gel Extraction

- Cut the band under UV-light (dark room).

>[!tip] No need to run gel actually!
>If the products run on gel contain only 1 important band in each lane (i.e. directly from the first PCR), gel electrophoresis can be skipped and Buffer QG can be used in place of Buffer PB and proceed with the same purification protocol. So for example, you can make 2$\times$ PCR reactions to get 100 $\mu$L reaction volume and add 300 $\mu$L of buffer QG. Note that buffer PB from the PCR cleanup kit cannot be used fro melting gels.

- Follow the protocol from [*QIAquick Gel Extraction Kit*](HB-0901-003-1114358_PCard_QQ_PCR_Gel_Cleanup_Kit_0718_WW.pdf) which can be downloaded [here](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.qiagen.com/cn/resources/download.aspx%3Fid%3Da72e2c07-7816-436f-b920-98a0ede5159a%26lang%3Den&ved=2ahUKEwjojL73xaSKAxXTSUEAHS77KOUQFnoECBoQAQ&usg=AOvVaw1MHRCE-ETc-ZTr41aVvRew). Briefly, 3 gel volumes (100 mg = 100 $\mu$L for our purposes) of Buffer QG and melt at 50$\degree$C for 10 minutes. Add 1 volume of isopropanol and transfer to the QIAGEN collection tube, spin, discard flow-through. Add 500 $\mu$L of Buffer QG, spin, discard flow-through. Add 750 $\mu$L Buffer PE, spin, discard flow-through. Elute by adding buffer EB directly to the centre of the column and incubate at room temperature for 5 minutes. Then, spin and collect flow-through.

>[!tip] Elution with less volume (30 $\mu$L)
> Elute with 30 $\mu$L instead of the recommended 50 $\mu$L will result in higher concentration of DNA. And to reduce wasteful DNA preparation, you can also use **all** of the DNA for further use.

- Prepare the DNA for sequencing as well to check PCR products. No need to run another gel again. Elute DNA with Buffer EB (10 mM Tris-HCl, pH 8.5).
- Each outcome is the DNA insert containing either a heavy or light chain DNA template of the specific Fab.
### PCR amplification results 16/12/2024

- Success: 5G5 HC, 5G5 LC, 6F6 HC, 6F6 LC, 2G10 LC (not recovered because it was lost in the dark room)
- Troubleshooting: Probably, the first batch I ran with the weird gels got all the products and the rest 20 $\mu$L that I ran got less than half (or none) of the results.

| Sample | Concentration (ng/$\mu$L) | 1 $\mu$g    |
| ------ | ------------------------- | ----------- |
| 5G5 HC | 19.5                      | 51.2 $\mu$L |
| 5G5 LC | 51.6                      | 19.4 $\mu$L |
| 6F6 HC | 31.3                      | 31.9 $\mu$L |
| 6F6 LC | 21.4                      | 46.7 $\mu$L |

### PCR amplification results 17/12/2024

- All reactions worked but heavy chain DNAs were slightly inefficient to amplify. Hence, less DNA yield for some.
- Here is the list of all PCRs that worked (Too low means the digestion mixture won't fit in the 50 $\mu$L reaction size):


| Sample  | Concentration (ng/$\mu$L) | 1 $\mu$g    |
| ------- | ------------------------- | ----------- |
| 8B11 HC | 23.0                      | 43.5 $\mu$L |
| 8B11 LC | 43.7                      | 22.9 $\mu$L |
| 5G5 HC  | 5.4                       | Too low     |
| 5G5 LC  | 41.7                      | 23.9 $\mu$L |
| 6F6 HC  | 24.2                      | 41.3 $\mu$L |
| 6F6 LC  | 37.1                      | 27.0 $\mu$L |
| 2G10 HC | 12.5                      | Too low     |
| 2G10 LC | 3.2                       | Too low     |
| 6C4 HC  | 11.4                      | Too low     |
| 6C4 LC  | 43.8                      | 22.8 $\mu$L |


----
## Restriction Enzyme Digestion

- Two sets of DNA are needed: The Fab fragment and the DNA plasmid template, in this case, pHLsec-LORVR (in 3.38 mg/mL stock solution) is used. The goal here is to swap out the gene for LORVR and replace it by the gene for Fab heavy or light chains.
- For heavy chain DNA sequence digestion: Use AgeI and KpnI (so His-tag overhang at C-terminal is included)
- For light chain DNA sequence digestion: Use AgeI and XhoI (no His-tag).
- Same digestion for the plasmid used for heavy and light chains. Do this in a bigger reaction for each chain of Fab.
- Setup for Heavy chain (1 hour incubation at 37$\degree$C). 
- This is generated from [NEBCloner website](https://nebcloner.neb.com/#!/protocol/re/double/AgeI,XhoI).

| Concentration   | Reagent      | Amount (50 $\mu$L rxn) |
| --------------- | ------------ | ---------------------- |
| vary            | DNA          | 1 $\mu$g               |
| 10$\times$      | rCutSmart    | 5 $\mu$L               |
| 5 units/$\mu$L  | AgeI         | 5 units = 1 $\mu$L     |
| 20 units/$\mu$L | KpnI         | 20 units = 1 $\mu$L    |
|                 | milliQ water | to 50 $\mu$L           |
- Setup for Light chain (1 hour incubation at 37$\degree$C). 
- This is generated from [NEBCloner website](https://nebcloner.neb.com/#!/protocol/re/double/AgeI,KpnI).

| Concentration   | Reagent      | Amount (50 $\mu$L rxn) |
| --------------- | ------------ | ---------------------- |
| vary            | DNA          | 1 $\mu$g               |
| 10$\times$      | rCutSmart    | 5 $\mu$L               |
| 5 units/$\mu$L  | AgeI         | 5 units = 1 $\mu$L     |
| 20 units/$\mu$L | XhoI         | 20 units = 1 $\mu$L    |
|                 | milliQ water | to 50 $\mu$L           |
- No need for heat inactivation of enzymes.
- Then, another gel extraction step. Now, the products are (1) excised plasmids with complementary overhangs, (2) excised target inserts with complementary overhangs.
- Purify the plasmid backbone (should be the band that migrates slowest) and the target inserts using [the gel extraction kit](HB-0901-003-1114358_PCard_QQ_PCR_Gel_Cleanup_Kit_0718_WW.pdf).

---
## Ligation

- Need to make 1:5 vector:insert molar ratio (minimum is 1:3, but 1:5 if you have enough DNA).
- Use molecular weight of dsDNA = (number of base pairs of dsDNA x average molecular weight of a base pair) + 36.04 g/mol
- average molecular weight of a bp = 617.96 g/mol
- The insert size is ~ 650 - 700 bp -> 650 bp for a more conservative approximate (i.e. adding more DNA than needed).

| Component                                                       | 20 $\mu$L reaction    |
| --------------------------------------------------------------- | --------------------- |
| Quick Ligase Reaction Buffer (2X); Thawed and resuspended at RT | 10 $\mu$L             |
| pHLSec (4.5 kb)                                                 | 0.020 pmol = 55.6 ng  |
| insert (650 bp)                                                 | 0.100 pmol = 40.1 ng  |
| milliQ water                                                    | to 20 $\mu$L          |
| Quick Ligase                                                    | 1 $\mu$L              |

### Ligation 17/12/2024 -> in Diamond's -20$\degree$C freezer!
 ---
 