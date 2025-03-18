"use client"

import { motion } from "framer-motion"
import { Award, Code, Trophy, ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import styles from "./achievements.module.css"

const ACHIEVEMENTS = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Top 4.2% LeetCoder in 2024",
    description: "Solved problems for 100+ consecutive days",
    badge: "100-Day Streak",
    badgeColor: "bg-gradient-to-r from-yellow-500 to-amber-500",
    leetcodeStats: {
      percentile: 95.8,
      rank: "Top 5%",
      color: "from-yellow-500 to-amber-500",
    },
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Top 6.9% LeetCoder in 2024",
    description: "Solved problems for 50+ consecutive days",
    badge: "50-Day Streak",
    badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
    leetcodeStats: {
      percentile: 93.1,
      rank: "Top 10%",
      color: "from-blue-500 to-indigo-500",
    },
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "HackerRank Problem Solving",
    subtitle: "Intermediate Certification",
    description: "Strengthened my problem-solving ability with verified skills in algorithms and data structures.",
    link: "https://www.hackerrank.com/certificates/iframe/74287f8e776a", // Replace with your actual certification link
    linkText: "View Certificate",
    certBadge: true,
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "LeetCode Problem Solver",
    description: "Solved 200+ problems, demonstrating strong algorithmic skills",
    badge: "250+ Problems",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Competitive Programming",
    description: "Ranked in top 10% in multiple coding contests",
    badge: "Top 10%",
    badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <motion.h2
        className="section-title text-4xl font-bold text-center mb-12 text-foreground relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 relative z-10">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className={`${styles.achievementCard} bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start">
              <div
                className={`achievement-icon ${achievement.certBadge ? "bg-gradient-to-br from-yellow-400 to-orange-500" : "bg-gradient-to-br from-primary/80 to-primary"} text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4 shrink-0 shadow-md`}
              >
                {achievement.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <h3 className="text-xl font-bold text-primary dark:text-primary">{achievement.title}</h3>

                  {achievement.badge && (
                    <span
                      className={`text-xs ${achievement.badgeColor} text-white px-2 py-1 rounded-full font-medium shadow-sm`}
                    >
                      {achievement.badge}
                    </span>
                  )}
                </div>

                {achievement.subtitle && (
                  <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {achievement.subtitle}
                  </h4>
                )}

                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{achievement.description}</p>

                {achievement.link && (
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 mt-3 font-medium text-sm group"
                    whileHover={{ x: 5 }}
                  >
                    {achievement.linkText}
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                )}
              </div>
            </div>

            {achievement.leetcodeStats && (
              <div className="mt-4 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-2 relative">
                      <Image
                        src="/leetcode-logo.png"
                        alt="LeetCode"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LeetCode Ranking</span>
                  </div>
                  <span
                    className={`text-xs bg-gradient-to-r ${achievement.leetcodeStats.color} text-white px-2 py-1 rounded-full font-medium`}
                  >
                    {achievement.leetcodeStats.rank}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${achievement.leetcodeStats.color} h-full rounded-full ${styles.leetcodeProgress}`}
                    style={{ width: `${achievement.leetcodeStats.percentile}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Better than {achievement.leetcodeStats.percentile}% of users
                  </span>
                  <span className="text-xs font-medium text-primary">{achievement.leetcodeStats.percentile}%</span>
                </div>
              </div>
            )}

            {achievement.certBadge && (
              <div className="mt-4 flex justify-center">
                <div className="relative w-full max-w-[200px] aspect-[1.6/1] bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 p-3 flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-800 dark:text-amber-500 font-bold text-sm">HackerRank</div>
                    <div className="text-amber-900 dark:text-amber-400 font-bold text-xs">CERTIFIED</div>
                    <div className="text-amber-700 dark:text-amber-300 text-[10px] mt-1">
                      Problem Solving (Intermediate)
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

