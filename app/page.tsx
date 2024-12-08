'use client'

import Image from 'next/image'
import {Button} from "@/components/ui/button"
import {AnimatedText} from '@/components/animated-text'
import {CharacterCard} from '@/components/character-card'

const characters = [
    {
        name: "艾丽斯",
        role: "主角",
        description: "一位神秘的黑客,拥有操控电子设备的能力。",
        imageUrl: "/FF14.png?height=400&width=300",
        skills: [
            {name: "黑客入侵", description: "能够入侵任何电子设备", power: 95},
            {name: "数据分析", description: "快速处理和分析大量数据", power: 90},
            {name: "电子干扰", description: "干扰敌人的电子设备", power: 85}
        ]
    },
    {
        name: "杰克",
        role: "战士",
        description: "前特种部队成员,精通各种武器和格斗技巧。",
        imageUrl: "/FF14.png?height=400&width=300",
        skills: [
            {name: "近身格斗", description: "精通多种格斗技巧", power: 95},
            {name: "枪械专家", description: "精通各种枪械的使用", power: 90},
            {name: "战术分析", description: "快速分析战场局势", power: 85}
        ]
    },
    {
        name: "莉莉",
        role: "科学家",
        description: "天才生物工程师,致力于研究人类增强技术。",
        imageUrl: "/FF14.png?height=400&width=300",
        skills: [
            {name: "基因工程", description: "改造生物基因", power: 95},
            {name: "医疗急救", description: "快速治疗队友伤势", power: 90},
            {name: "药物研发", description: "研发各种强化药剂", power: 85}
        ]
    }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center bg-background">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/FF14.png?height=1080&width=1920"
                        alt="Cyberpunk city background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-50 dark:opacity-30"
                    />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold mb-4 animate-pulse">绝区零</h1>
                    <p className="text-xl mb-8">
                        <AnimatedText text="探索未来都市的秘密"/>
                    </p>
                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        开始冒险
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-background">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="未来都市"
                        description="探索充满霓虹和高科技的未来都市"
                        icon="🏙️"
                    />
                    <FeatureCard
                        title="激烈战斗"
                        description="体验快节奏、流畅的动作战斗系统"
                        icon="⚔️"
                    />
                    <FeatureCard
                        title="丰富剧情"
                        description="沉浸在扣人心弦的故事情节中"
                        icon="📖"
                    />
                </div>
            </section>

            {/* Characters Section */}
            <section className="py-16 px-4 bg-muted">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">游戏角色</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {characters.map((character, index) => (
                            <CharacterCard
                                key={index}
                                name={character.name}
                                role={character.role}
                                description={character.description}
                                imageUrl={character.imageUrl}
                                skills={character.skills}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* World Section */}
            <section className="py-16 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">游戏世界</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">新世纪都市</h3>
                            <p className="text-muted-foreground mb-6">
                                在这个充满高科技和低生活的未来世界中,巨型企业掌控着一切,而普通人则在霓虹灯下挣扎求生。街头充满了危险与机遇,每个人都在寻找属于自己的一席之地。
                            </p>
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                探索世界
                            </Button>
                        </div>
                        <div className="relative h-64 md:h-96">
                            <Image
                                src="/FF14.png?height=600&width=800"
                                alt="New Century City"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted text-center py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-4">关于我们</h4>
                            <p className="text-muted-foreground">绝区零是一款充满未来感的动作角色扮演游戏,由顶尖团队精心打造。</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">快速链接</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-muted-foreground hover:text-foreground">新闻公告</a>
                                </li>
                                <li><a href="#" className="text-muted-foreground hover:text-foreground">常见问题</a>
                                </li>
                                <li><a href="#" className="text-muted-foreground hover:text-foreground">联系我们</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">关注我们</h4>
                            <div className="flex justify-center space-x-4">
                                <a href="#" className="text-muted-foreground hover:text-foreground">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                         aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                         aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-muted-foreground">&copy; 2023 绝区零. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({title, description, icon}) {
    return (
        <div
            className="bg-card p-6 rounded-lg hover:bg-accent transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
